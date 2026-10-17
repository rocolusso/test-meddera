import { NextResponse } from 'next/server';

import { isBlogPaginationPath, isRoPath, isTechnicalPath, isValidPath, normalizePath } from '@/lib/valid-paths';

/** Where an unknown URL goes: the home page of its language. */
export function notFoundTarget(pathname: string): string {
  if (isBlogPaginationPath(pathname)) {
    return isRoPath(pathname) ? '/ro/blog' : '/blog';
  }
  return isRoPath(pathname) ? '/ro' : '/';
}

/** True when the path is page-like, unknown to the site and therefore redirected instead of a 404 page. */
export function shouldRedirectUnknown(pathname: string): boolean {
  if (isTechnicalPath(pathname)) return false;
  return !isValidPath(pathname);
}

const recentlyLogged = new Map<string, number>();
const LOG_WINDOW_MS = 60_000;
const LOG_MAX_KEYS = 500;

/** One JSON line per distinct path per minute and instance; visible in Vercel Logs (search: not_found_redirect). */
function logRedirect(pathname: string, referer: string | null, userAgent: string | null): void {
  const now = Date.now();
  const last = recentlyLogged.get(pathname);
  if (last !== undefined && now - last < LOG_WINDOW_MS) return;
  if (recentlyLogged.size >= LOG_MAX_KEYS) {
    recentlyLogged.clear();
  }
  recentlyLogged.set(pathname, now);

  let refererPath: string | null = null;
  if (referer) {
    try {
      const u = new URL(referer);
      refererPath = `${u.host}${u.pathname}`;
    } catch {
      refererPath = null;
    }
  }

  console.warn(
    JSON.stringify({
      event: 'not_found_redirect',
      path: pathname.slice(0, 200),
      lang: isRoPath(pathname) ? 'ro' : 'ru',
      referer: refererPath,
      ua: userAgent ? userAgent.slice(0, 120) : null,
    }),
  );
}

type Source = { url: URL; headers: Headers };

/** Builds the 301 response. `pathname` is the originally requested path. */
export function notFoundRedirect(source: Source, pathname: string): NextResponse {
  const target = new URL(source.url);
  target.pathname = notFoundTarget(pathname);
  target.search = '';
  target.hash = '';

  logRedirect(normalizePath(pathname), source.headers.get('referer'), source.headers.get('user-agent'));

  const response = NextResponse.redirect(target, 301);
  response.headers.set('Cache-Control', 'no-store');
  response.headers.set('x-redirect-reason', 'not-found');
  return response;
}
