import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { z } from 'zod';

export type ContactFieldKey = 'username' | 'userphone' | 'message';

/** Strip zero-width chars; trim. PhoneInput sometimes injects \u200B between segments. */
export function cleanPhoneInput(raw: string): string {
  return raw.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
}

/**
 * Any valid international number, else national/international as Moldova (matches defaultCountry="MD" in forms).
 */
export function isValidContactPhone(raw: string): boolean {
  const v = cleanPhoneInput(raw);
  if (!v) {
    return false;
  }
  const asIntl = parsePhoneNumberFromString(v);
  if (asIntl?.isValid()) {
    return true;
  }
  const asMd = parsePhoneNumberFromString(v, 'MD');
  return asMd?.isValid() ?? false;
}

export type ContactFieldErrors = Partial<Record<ContactFieldKey, string>>;

function messages(locale: string) {
  if (locale === 'ru') {
    return {
      nameShort: 'Введите имя (не менее 3 символов).',
      nameLong: 'Имя слишком длинное.',
      phoneRequired: 'Укажите номер телефона.',
      phoneInvalid:
        'Укажите номер в формате Молдовы: с 0 (например 069…) или с кодом +373. Если нужна другая страна — смените флаг в поле.',
      messageLong: 'Сообщение слишком длинное.',
    };
  }
  return {
    nameShort: 'Introduceți numele (minimum 3 caractere).',
    nameLong: 'Numele este prea lung.',
    phoneRequired: 'Indicați numărul de telefon.',
    phoneInvalid:
      'Indicați numărul în formatul Moldovei: cu 0 (ex. 069…) sau cu prefix +373. Pentru altă țară — schimbați steagul în câmp.',
    messageLong: 'Mesajul este prea lung.',
  };
}

export function parseContactForm(
  locale: string,
  input: { username: string; userphone: string; message: string },
):
  | { ok: true; data: { username: string; userphone: string; message: string } }
  | { ok: false; fieldErrors: ContactFieldErrors } {
  const m = messages(locale);

  const schema = z.object({
    username: z.string().trim().min(3, m.nameShort).max(200, m.nameLong),
    userphone: z
      .string()
      .transform((s) => cleanPhoneInput(s))
      .pipe(
        z
          .string()
          .min(1, m.phoneRequired)
          .refine((v) => isValidContactPhone(v), { message: m.phoneInvalid }),
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
