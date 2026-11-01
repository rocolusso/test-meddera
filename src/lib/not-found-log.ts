/**
 * 404 handling helpers for proxy.ts (PLAN 404L-01). The log writes one JSON line per distinct path per minute and
 * instance, visible in Vercel Logs (search: "not_found"). It replaces the old not_found_redirect line: unknown URLs
 * now get a real 404 page instead of a 301 to the home page.
 */

/** Internal paths of the 404 pages; proxy.ts rewrites unknown URLs to them with status 404. */
export const NOT_FOUND_PAGE = { ru: '/404-page', ro: '/ro/404-page' } as const;

const recentlyLogged = new Map<string, number>();
const LOG_WINDOW_MS = 60_000;
const LOG_MAX_KEYS = 500;

function refererPath(referer: string | null): string | null {
  if (!referer) return null;
  try {
    const u = new URL(referer);
    return `${u.host}${u.pathname}`;
  } catch {
    return null;
  }
}

export function logNotFound(pathname: string, referer: string | null, userAgent: string | null): void {
  const path = (pathname || 'unknown').slice(0, 200);
  const now = Date.now();
  const last = recentlyLogged.get(path);
  if (last !== undefined && now - last < LOG_WINDOW_MS) return;
  if (recentlyLogged.size >= LOG_MAX_KEYS) recentlyLogged.clear();
  recentlyLogged.set(path, now);

  console.warn(
    JSON.stringify({
      event: 'not_found',
      path,
      lang: path === '/ro' || path.startsWith('/ro/') ? 'ro' : 'ru',
      referer: refererPath(referer),
      ua: userAgent ? userAgent.slice(0, 120) : null,
    }),
  );
}
