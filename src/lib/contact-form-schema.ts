import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

export type ContactFieldKey = 'username' | 'userphone' | 'message';

export type ContactFieldErrors = Partial<Record<ContactFieldKey, string>>;

function messages(locale: string) {
  if (locale === 'ru') {
    return {
      nameShort: 'Введите имя (не менее 3 символов).',
      nameLong: 'Имя слишком длинное.',
      phoneRequired: 'Укажите номер телефона.',
      phoneInvalid: 'Введите корректный номер телефона.',
      messageLong: 'Сообщение слишком длинное.',
    };
  }
  return {
    nameShort: 'Introduceți numele (minimum 3 caractere).',
    nameLong: 'Numele este prea lung.',
    phoneRequired: 'Indicați numărul de telefon.',
    phoneInvalid: 'Introduceți un număr de telefon valid.',
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
      .trim()
      .min(1, m.phoneRequired)
      .refine((v) => isValidPhoneNumber(v), { message: m.phoneInvalid }),
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
