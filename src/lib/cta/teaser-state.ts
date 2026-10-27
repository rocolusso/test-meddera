/**
 * Rules and browser memory of the scroll teaser. Tiny on purpose: it is in the main bundle
 * (ScrollTeaserHost and the forms import it); the teaser texts are in the lazy TeaserCard.
 * Every storage call is wrapped, because storage can be blocked or throw (private windows).
 */

/** Article and service pages only. Not the blog list (`/blog/page/2`), not hubs of services, not home, contacts, search. */
const TEASER_ROUTE = /^\/(?:ro\/)?(?:blog|services)\/([^/]+)\/?$/;

export const TEASER_MIN_VISIBLE_MS = 8000;
export const TEASER_SCROLL_RATIO = 0.6;
export const TEASER_PAUSE_MS = 7 * 24 * 60 * 60 * 1000;
export const TEASER_COUNTRIES: readonly string[] = ['MD', 'RO'];

const SESSION_KEY = 'cta_teaser_shown';
const PAUSE_KEY = 'cta_teaser_until';
const LEAD_KEY = 'lead_submitted';

export function isTeaserRoute(pathname: string): boolean {
  const match = TEASER_ROUTE.exec(pathname);
  if (!match) return false;
  // `/blog/page/2` has two segments and is excluded above; this guards `/blog/page` itself.
  return match[1] !== 'page';
}

function read(storage: 'session' | 'local', key: string): string | null {
  try {
    return (storage === 'session' ? window.sessionStorage : window.localStorage).getItem(key);
  } catch {
    return null;
  }
}

function write(storage: 'session' | 'local', key: string, value: string): void {
  try {
    (storage === 'session' ? window.sessionStorage : window.localStorage).setItem(key, value);
  } catch {
    // storage unavailable: the teaser still works for this page view
  }
}

/** Nothing in the browser's memory forbids showing the teaser now. */
export function teaserAllowedByStorage(now: number = Date.now()): boolean {
  if (read('session', SESSION_KEY)) return false;
  if (read('local', LEAD_KEY)) return false;
  const until = Number(read('local', PAUSE_KEY));
  if (Number.isFinite(until) && until > now) return false;
  return true;
}

/** Shown (or hidden by an opening overlay) once: not again in this session. */
export function markTeaserShown(): void {
  write('session', SESSION_KEY, '1');
}

/** Closed or clicked: silence for 7 days. */
export function pauseTeaser(now: number = Date.now()): void {
  write('local', PAUSE_KEY, String(now + TEASER_PAUSE_MS));
}

/** A request was sent successfully (quiz or contact form): the visitor already asked, no more teasers. */
export function markLeadSubmitted(): void {
  write('local', LEAD_KEY, '1');
}

/** `country` comes from /api/geo: '' = unknown, which is allowed. */
export function teaserAllowedForCountry(country: string): boolean {
  return country === '' || TEASER_COUNTRIES.includes(country);
}
