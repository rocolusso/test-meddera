import { DEVELOPER_NEEDS, normalizeDeveloperLocale, sanitizeDeveloperNeeds } from '@/lib/developer-form-schema';

/**
 * The only Telegram user that receives /developer leads. Fixed in code on purpose: the id never comes from the request.
 */
export const DEVELOPER_TELEGRAM_RECIPIENTS = ['256302541'] as const;

export const DEVELOPER_TELEGRAM_TITLE = 'Форма DEVELOPER';

/** Short ASCII id of the button the visitor used (for example `form_submit`). Anything else is dropped. */
export function sanitizeSource(raw: unknown): string {
  if (typeof raw !== 'string') return '';
  const s = raw.trim();
  return s.length <= 40 && /^[a-z0-9_]+$/i.test(s) ? s : '';
}

/** Extra lines of the Telegram message: what the visitor needs, page language and source button. */
export function buildDeveloperTelegramBlock(body: Record<string, unknown>): string {
  const lines: string[] = [];
  const needs = sanitizeDeveloperNeeds(body.needs);
  if (needs.length > 0) {
    lines.push(`Нужно: ${needs.map((id) => DEVELOPER_NEEDS[id]).join(', ')}`);
  }
  lines.push(`Язык страницы: ${normalizeDeveloperLocale(body.locale).toUpperCase()}`);
  const source = sanitizeSource(body.source);
  if (source) {
    lines.push(`Источник: ${source}`);
  }
  return lines.join('\n');
}
