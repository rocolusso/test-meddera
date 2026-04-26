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

function defaultBehavior(): BehaviorMetrics {
  return { mousemove: 0, keydown: 0, touchstart: 0, pointerdown: 0 };
}

/** Legacy path: only reCAPTCHA + Telegram (original behavior). */
async function legacyContactFormPost(
  request: NextRequest,
  telegramFormTitle: string,
  buildExtraTelegramBlock?: (body: Record<string, unknown>, locale: 'ru' | 'ro') => string,
): Promise<NextResponse> {
  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  const token = typeof body.recaptchaToken === 'string' ? body.recaptchaToken : '';
  if (!token) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  const verified = await verifyRecaptchaToken(token);
  if (!verified.ok) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
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
Телефон: ${phone}
Сообщение: ${userMessage}
${extraTelegramBlock ? `\n${extraTelegramBlock}` : ''}
`;
  const message = appendTelegramUrlBlock(messageBase.trimEnd(), formPathname);

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  if (!message) {
    return NextResponse.json({ error: 'Bad request' }, { status: 500 });
  }

  try {
    const promises = TELEGRAM_USER_IDS.map((userId) => fetch(telegramApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: userId, text: message }),
    }).then(async (res) => {
      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(errorData);
      }
      return res.json();
    }));
    await Promise.all(promises);
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error('Error sending messages:', err.message);
  }

  return NextResponse.json({ formSended: body });
}

export async function processContactFormPost(
  request: NextRequest,
  options: {
    telegramFormTitle: string;
    buildExtraTelegramBlock?: (body: Record<string, unknown>, locale: 'ru' | 'ro') => string;
  },
): Promise<NextResponse> {
  if (isFormAbuseProtectionDisabled()) {
    return legacyContactFormPost(request, options.telegramFormTitle, options.buildExtraTelegramBlock);
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  if (!process.env.FORM_TOKEN_SECRET || process.env.FORM_TOKEN_SECRET.length < 16) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  const limiter = getFormPostRatelimit();
  if (!limiter) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
  const ip = getClientIp(request);
  const { success, reset } = await limiter.limit(ip);
  if (!success) {
    const retrySec = Math.max(1, Math.ceil((reset - Date.now()) / 1000));
    return NextResponse.json(
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
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
  if (raw.length > 65536) {
    return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  const formToken = typeof body.formToken === 'string' ? body.formToken : '';
  if (!formToken) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  const verified = verifyFormToken(formToken);
  if (!verified.ok) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const replay = await consumeFormJtiOnce(verified.jti);
  if (replay === 'unavailable') {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
  if (replay === 'replay') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const website = typeof body.website === 'string' ? body.website : '';
  const honeypotNonEmpty = website.trim().length > 0;

  const msg = body.message as Record<string, unknown> | undefined;
  const username = typeof msg?.username === 'string' ? msg.username : '';
  const userphone = typeof msg?.userphone === 'string' ? msg.userphone : '';
  const userMessage = typeof msg?.message === 'string' ? msg.message : '';

  const locale = body.locale === 'ro' ? 'ro' : 'ru';
  const parsed = parseContactForm(locale, { username, userphone, message: userMessage });
  if (!parsed.ok) {
    return NextResponse.json({ error: 'Bad request', fieldErrors: parsed.fieldErrors }, { status: 400 });
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
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { username: name, userphone: phone, message: messageText } = parsed.data;

  const formPathname = resolveFormPathname(body, request);
  const extraTelegramBlock = options.buildExtraTelegramBlock?.(body, locale) ?? '';
  const telegramBase = `
${options.telegramFormTitle}

Имя: ${name}
Телефон: ${phone}
Сообщение: ${messageText}
${extraTelegramBlock ? `\n${extraTelegramBlock}` : ''}
`;
  const telegramBlock = appendTelegramUrlBlock(telegramBase.trimEnd(), formPathname);

  if (score <= 40) {
    return NextResponse.json({ success: true, shadow: true });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const promises = TELEGRAM_USER_IDS.map((userId) => fetch(telegramApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: userId, text: telegramBlock }),
    }).then(async (res) => {
      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(errorData);
      }
      return res.json();
    }));
    await Promise.all(promises);
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error('Error sending messages:', err.message);
  }

  return NextResponse.json({
    formSended: body,
    success: true,
  });
}
