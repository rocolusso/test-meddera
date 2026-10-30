import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import {
  clampBehavior,
  computeContactFormScore,
  type BehaviorMetrics,
} from '@/lib/form-score';
import { getClientIp } from '@/lib/client-ip';
import { verifyFormToken } from '@/lib/form-token';
import { parseContactForm } from '@/lib/contact-form-schema';
import { normalizeDeveloperLocale, parseDeveloperForm } from '@/lib/developer-form-schema';
import { verifyRecaptchaForScoring, verifyRecaptchaToken } from '@/lib/recaptcha-verify';
import { isFormAbuseProtectionDisabled } from '@/lib/form-abuse-flags';
import { appendTelegramUrlBlock, resolveFormPathname } from '@/lib/form-page-url';
import { getFormPostRatelimit } from '@/lib/upstash-rate-limit';
import { consumeFormJtiOnce } from '@/lib/upstash-replay';

const TELEGRAM_USER_IDS = [
  '256302541',
  '5299878921',
  '6576456966',
  '7378233926',
] as const;

export type ContactFormPostOptions = {
  telegramFormTitle: string;
  buildExtraTelegramBlock?: (body: Record<string, unknown>, locale: 'ru' | 'ro') => string;
  /**
   * Telegram user ids that receive the message. Omitted: the shared list of the clinic forms.
   * Passed: only these ids (never mixed with the shared list). An empty or malformed list stops the request.
   */
  recipients?: readonly string[];
  /**
   * 'phone' (default): the clinic form, strict phone validation, label "Телефон".
   * 'contact': the /developer form, the field may be a phone, an @username or a messenger link, label "Контакт".
   */
  contactMode?: 'phone' | 'contact';
  /** When true and no recipient accepted the message, answer 502 instead of a silent success. */
  strictDelivery?: boolean;
};

/** Returns the ids to send to, or null when `recipients` was passed but is empty or not made of numeric ids. */
export function resolveTelegramRecipients(recipients: readonly string[] | undefined): readonly string[] | null {
  if (recipients === undefined) {
    return TELEGRAM_USER_IDS;
  }
  if (recipients.length === 0 || !recipients.every((id) => /^\d{5,15}$/.test(id))) {
    return null;
  }
  return recipients;
}

/** Sends the text to every id; resolves with how many sends were accepted. Failures are logged, never thrown. */
async function sendTelegramMessage(
  userIds: readonly string[],
  text: string,
): Promise<{ delivered: number; failed: number }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const results = await Promise.allSettled(userIds.map((userId) => fetch(telegramApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: userId, text }),
  }).then(async (res) => {
    if (!res.ok) {
      const errorData = await res.text();
      throw new Error(errorData);
    }
    return res.json();
  })));
  let delivered = 0;
  let failed = 0;
  for (const r of results) {
    if (r.status === 'fulfilled') {
      delivered += 1;
    } else {
      failed += 1;
      const err = r.reason as { message?: string };
      console.error('Error sending messages:', err?.message);
    }
  }
  return { delivered, failed };
}

function jsonNoStore(body: unknown, init?: ResponseInit): NextResponse {
  const headers = new Headers(init?.headers);
  headers.set('Cache-Control', 'no-store, max-age=0');
  return NextResponse.json(body, { ...init, headers });
}

function defaultBehavior(): BehaviorMetrics {
  return { mousemove: 0, keydown: 0, touchstart: 0, pointerdown: 0 };
}

/** Legacy path: only reCAPTCHA + Telegram (original behavior). */
async function legacyContactFormPost(
  request: NextRequest,
  options: ContactFormPostOptions,
  userIds: readonly string[],
): Promise<NextResponse> {
  const { telegramFormTitle, buildExtraTelegramBlock } = options;
  const contactLabel = options.contactMode === 'contact' ? 'Контакт' : 'Телефон';
  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return jsonNoStore({ error: 'Bad request' }, { status: 400 });
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return jsonNoStore({ error: 'Service unavailable' }, { status: 503 });
  }

  const token = typeof body.recaptchaToken === 'string' ? body.recaptchaToken : '';
  if (!token) {
    return jsonNoStore({ error: 'Bad request' }, { status: 400 });
  }

  const verified = await verifyRecaptchaToken(token);
  if (!verified.ok) {
    return jsonNoStore({ error: 'Forbidden' }, { status: 403 });
  }

  const msg = body.message as Record<string, unknown> | undefined;
  const name = typeof msg?.username === 'string' ? msg.username : '';
  const phone = typeof msg?.userphone === 'string' ? msg.userphone : '';
  const userMessage = typeof msg?.message === 'string' ? msg.message : '';

  const locale = body.locale === 'ro' ? 'ro' : 'ru';
  const extraTelegramBlock = buildExtraTelegramBlock?.(body, locale) ?? '';
  const formPathname = resolveFormPathname(body, request);
  const messageBase = `
${telegramFormTitle}

Имя: ${name}
${contactLabel}: ${phone}
Сообщение: ${userMessage}
${extraTelegramBlock ? `\n${extraTelegramBlock}` : ''}
`;
  const message = appendTelegramUrlBlock(messageBase.trimEnd(), formPathname);

  if (!message) {
    return jsonNoStore({ error: 'Bad request' }, { status: 500 });
  }

  const sent = await sendTelegramMessage(userIds, message);
  if (options.strictDelivery && sent.delivered === 0) {
    return jsonNoStore({ error: 'Delivery failed' }, { status: 502 });
  }

  return jsonNoStore({ formSended: body });
}

export async function processContactFormPost(
  request: NextRequest,
  options: ContactFormPostOptions,
): Promise<NextResponse> {
  const userIds = resolveTelegramRecipients(options.recipients);
  if (!userIds) {
    console.error('Contact form: recipients option is empty or malformed, nothing was sent');
    return jsonNoStore({ error: 'Service unavailable' }, { status: 503 });
  }

  if (isFormAbuseProtectionDisabled()) {
    return legacyContactFormPost(request, options, userIds);
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return jsonNoStore({ error: 'Service unavailable' }, { status: 503 });
  }

  if (!process.env.FORM_TOKEN_SECRET || process.env.FORM_TOKEN_SECRET.length < 16) {
    return jsonNoStore({ error: 'Service unavailable' }, { status: 503 });
  }

  const limiter = getFormPostRatelimit();
  if (!limiter) {
    return jsonNoStore({ error: 'Service unavailable' }, { status: 503 });
  }
  const ip = getClientIp(request);
  const { success, reset } = await limiter.limit(ip);
  if (!success) {
    const retrySec = Math.max(1, Math.ceil((reset - Date.now()) / 1000));
    return jsonNoStore(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: { 'Retry-After': String(retrySec) },
      },
    );
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return jsonNoStore({ error: 'Bad request' }, { status: 400 });
  }
  if (raw.length > 65536) {
    return jsonNoStore({ error: 'Payload too large' }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return jsonNoStore({ error: 'Bad request' }, { status: 400 });
  }

  const formToken = typeof body.formToken === 'string' ? body.formToken : '';
  if (!formToken) {
    return jsonNoStore({ error: 'Bad request' }, { status: 400 });
  }

  const verified = verifyFormToken(formToken);
  if (!verified.ok) {
    return jsonNoStore({ error: 'Forbidden' }, { status: 403 });
  }

  const replay = await consumeFormJtiOnce(verified.jti);
  if (replay === 'unavailable') {
    return jsonNoStore({ error: 'Service unavailable' }, { status: 503 });
  }
  if (replay === 'replay') {
    return jsonNoStore({ error: 'Forbidden' }, { status: 403 });
  }

  const website = typeof body.website === 'string' ? body.website : '';
  const honeypotNonEmpty = website.trim().length > 0;

  const msg = body.message as Record<string, unknown> | undefined;
  const username = typeof msg?.username === 'string' ? msg.username : '';
  const userphone = typeof msg?.userphone === 'string' ? msg.userphone : '';
  const userMessage = typeof msg?.message === 'string' ? msg.message : '';

  const locale = body.locale === 'ro' ? 'ro' : 'ru';
  const contactMode = options.contactMode ?? 'phone';
  const parsed = contactMode === 'contact'
    ? parseDeveloperForm(normalizeDeveloperLocale(body.locale), { username, userphone, message: userMessage })
    : parseContactForm(locale, { username, userphone, message: userMessage });
  if (!parsed.ok) {
    return jsonNoStore({ error: 'Bad request', fieldErrors: parsed.fieldErrors }, { status: 400 });
  }

  const recaptchaToken = typeof body.recaptchaToken === 'string' ? body.recaptchaToken : '';
  const rec = await verifyRecaptchaForScoring(recaptchaToken);

  const recaptchaStatus = rec.status === 'missing_secret' ? 'invalid' : rec.status;

  const submitTimeMs = typeof body.submitTimeMs === 'number' ? body.submitTimeMs : 0;
  const b = body.behavior as Record<string, unknown> | undefined;
  const behavior: BehaviorMetrics =
    b && typeof b === 'object'
      ? {
        mousemove: clampBehavior(Number(b.mousemove)),
        keydown: clampBehavior(Number(b.keydown)),
        touchstart: clampBehavior(Number(b.touchstart)),
        pointerdown: clampBehavior(Number(b.pointerdown)),
      }
      : defaultBehavior();

  const ua = request.headers.get('user-agent');
  const { score, reasons } = computeContactFormScore({
    recaptchaStatus,
    honeypotNonEmpty,
    submitTimeMs,
    behavior,
    userAgent: ua,
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('[form-score]', { score, reasons });
  }

  if (score < 20) {
    return jsonNoStore({ error: 'Forbidden' }, { status: 403 });
  }

  const { username: name, userphone: phone, message: messageText } = parsed.data;

  const formPathname = resolveFormPathname(body, request);
  const extraTelegramBlock = options.buildExtraTelegramBlock?.(body, locale) ?? '';
  const telegramBase = `
${options.telegramFormTitle}

Имя: ${name}
${contactMode === 'contact' ? 'Контакт' : 'Телефон'}: ${phone}
Сообщение: ${messageText}
${extraTelegramBlock ? `\n${extraTelegramBlock}` : ''}
`;
  const telegramBlock = appendTelegramUrlBlock(telegramBase.trimEnd(), formPathname);

  if (score <= 40) {
    return jsonNoStore({ success: true, shadow: true });
  }

  const sent = await sendTelegramMessage(userIds, telegramBlock);
  if (options.strictDelivery && sent.delivered === 0) {
    return jsonNoStore({ error: 'Delivery failed' }, { status: 502 });
  }

  return jsonNoStore({
    formSended: body,
    success: true,
  });
}
