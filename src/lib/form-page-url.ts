import type { NextRequest } from 'next/server';

/**
 * Client may send window.location.href; allow path+search only; strip junk for Telegram.
 */
export function sanitizeFormPathnameForTelegram(raw: string): string {
  const s = raw.trim().slice(0, 2048);
  if (!s) {
    return '';
  }
  if (s.startsWith('/')) {
    if (/^[\x20-\x7E]+$/.test(s)) {
      return s;
    }
    return '';
  }
  try {
    const u = new URL(s);
    if (u.protocol !== 'http:' && u.protocol !== 'https:') {
      return '';
    }
    return u.href;
  } catch {
    return '';
  }
}

/** Prefer JSON body.formPathname (full URL or path), else Referer. */
export function resolveFormPathname(body: Record<string, unknown>, request: NextRequest): string {
  const fromBody = typeof body.formPathname === 'string' ? body.formPathname : '';
  const a = sanitizeFormPathnameForTelegram(fromBody);
  if (a) {
    return a;
  }
  const ref = request.headers.get('referer');
  if (ref) {
    return sanitizeFormPathnameForTelegram(ref);
  }
  return '';
}

export function appendTelegramUrlBlock(telegramBody: string, formPathname: string): string {
  if (!formPathname) {
    return telegramBody;
  }
  return `${telegramBody}\n\nURL: ${formPathname}`;
}
