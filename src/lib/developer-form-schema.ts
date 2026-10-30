import { parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js';
import { z } from 'zod';

import { cleanPhoneInput, type ContactFieldErrors } from '@/lib/contact-form-schema';

import type { DeveloperLocale } from '@/lib/developer-locale';

export { DEVELOPER_LOCALES, normalizeDeveloperLocale, type DeveloperLocale } from '@/lib/developer-locale';

/** What the visitor wants. Whitelist: ids come from the page, labels are written in Russian for the Telegram message. */
export const DEVELOPER_NEEDS = {
  new_site: 'Новый сайт',
  promotion: 'Продвижение',
  ads: 'Реклама',
  support: 'Доработка и поддержка',
  analytics: 'Аналитика',
} as const;

export type DeveloperNeedId = keyof typeof DEVELOPER_NEEDS;

export function sanitizeDeveloperNeeds(raw: unknown): DeveloperNeedId[] {
  if (!Array.isArray(raw)) return [];
  const out: DeveloperNeedId[] = [];
  for (const item of raw) {
    if (typeof item === 'string' && Object.prototype.hasOwnProperty.call(DEVELOPER_NEEDS, item)) {
      const id = item as DeveloperNeedId;
      if (!out.includes(id)) out.push(id);
    }
  }
  return out;
}

/** Messengers and social networks whose profile or chat links we accept in the contact field. */
const LINK_HOSTS = new Set([
  't.me',
  'telegram.me',
  'telegram.dog',
  'wa.me',
  'api.whatsapp.com',
  'viber.com',
  'invite.viber.com',
  'instagram.com',
  'ig.me',
  'facebook.com',
  'fb.com',
  'm.me',
  'signal.me',
  'vk.com',
  'vk.me',
]);

const PHONE_DEFAULT_COUNTRIES: readonly CountryCode[] = ['MD', 'UA', 'RO'];

export type ContactKind = 'phone' | 'username' | 'link';

function isPhone(v: string): boolean {
  if (parsePhoneNumberFromString(v)?.isValid()) return true;
  return PHONE_DEFAULT_COUNTRIES.some((c) => parsePhoneNumberFromString(v, c)?.isValid());
}

function isUsername(v: string): boolean {
  return /^@(?=.{3,32}$)[A-Za-z0-9_.]+$/.test(v);
}

function isMessengerLink(v: string): boolean {
  if (/^viber:\/\/[a-z]+\?[^\s]+$/i.test(v)) return true;
  const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(v) ? v : `https://${v}`;
  let url: URL;
  try {
    url = new URL(withScheme);
  } catch {
    return false;
  }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return false;
  const host = url.hostname.toLowerCase().replace(/^www\./, '');
  if (!LINK_HOSTS.has(host)) return false;
  return url.pathname.replace(/\//g, '').length > 0 || url.search.length > 1;
}

/** Classifies the single contact field: a phone, an @username or a messenger link. Null means "not recognised". */
export function classifyContact(raw: string): ContactKind | null {
  const v = cleanPhoneInput(raw);
  if (!v) return null;
  if (isUsername(v)) return 'username';
  if (isMessengerLink(v)) return 'link';
  if (/^[+\d\s().-]+$/.test(v) && isPhone(v)) return 'phone';
  return null;
}

function messages(locale: DeveloperLocale) {
  if (locale === 'uk') {
    return {
      nameShort: 'Введіть ім’я (не менше 2 символів).',
      nameLong: 'Ім’я занадто довге.',
      contactRequired: 'Вкажіть телефон або месенджер.',
      contactInvalid: 'Вкажіть номер з кодом країни, @username або посилання на месенджер.',
      messageLong: 'Повідомлення занадто довге.',
    };
  }
  if (locale === 'en') {
    return {
      nameShort: 'Enter your name (at least 2 characters).',
      nameLong: 'The name is too long.',
      contactRequired: 'Enter a phone number or a messenger contact.',
      contactInvalid: 'Enter a number with the country code, an @username or a messenger link.',
      messageLong: 'The message is too long.',
    };
  }
  return {
    nameShort: 'Введите имя (не менее 2 символов).',
    nameLong: 'Имя слишком длинное.',
    contactRequired: 'Укажите телефон или мессенджер.',
    contactInvalid: 'Укажите номер с кодом страны, @username или ссылку на мессенджер.',
    messageLong: 'Сообщение слишком длинное.',
  };
}

export type DeveloperFormInput = { username: string; userphone: string; message: string };

/**
 * Validation of the /developer form. The contact field keeps the key `userphone` so it fits the shared form processor,
 * but it accepts a phone, an @username or a messenger link.
 */
export function parseDeveloperForm(
  locale: DeveloperLocale,
  input: DeveloperFormInput,
):
  | { ok: true; data: DeveloperFormInput }
  | { ok: false; fieldErrors: ContactFieldErrors } {
  const m = messages(locale);

  const schema = z.object({
    username: z.string().trim().min(2, m.nameShort).max(200, m.nameLong),
    userphone: z
      .string()
      .transform((s) => cleanPhoneInput(s).replace(/\s+/g, ' '))
      .pipe(
        z
          .string()
          .min(1, m.contactRequired)
          .max(200, m.contactInvalid)
          .refine((v) => classifyContact(v) !== null, { message: m.contactInvalid }),
      ),
    message: z.string().max(5000, m.messageLong),
  });

  const result = schema.safeParse({
    username: input.username,
    userphone: input.userphone,
    message: input.message ?? '',
  });

  if (result.success) {
    return { ok: true, data: result.data };
  }

  const fieldErrors: ContactFieldErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (key === 'username' || key === 'userphone' || key === 'message') {
      if (!fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
  }
  return { ok: false, fieldErrors };
}
