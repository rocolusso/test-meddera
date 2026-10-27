/**
 * Client for sending GA4 events to our own Cloudflare Worker, which relays
 * them to GA4 Measurement Protocol server-side. Replaces the previous
 * window.dataLayer / GTM event-tag approach for the events listed in
 * PLAN-GA4W-01, so the browser no longer has to load gtag.js to record them.
 *
 * Event names/params are kept identical to what GTM previously sent, so GA4
 * reports stay comparable across the cutover.
 */

import { getPageContext, parseFirstTouch, type FirstTouch } from '@/lib/analytics-context';
import { getReceptionIndicator } from '@/lib/contact-reception-schedule';

const ENDPOINT = '/api/ga4-collect';
const OPT_OUT_KEY = 'ga4_off';
const FIRST_TOUCH_KEY = 'ga4wfirst';
const CLIENT_ID_COOKIE = 'ga4wcid';
const CLIENT_ID_MAX_AGE_SECONDS = 60 * 60 * 24 * 365 * 2; // 2 years, mirrors _ga default
const SESSION_STORAGE_KEY = 'ga4wsid';
const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 min sliding window, mirrors GA4 default session timeout

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, maxAgeSeconds: number): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
}

function generateId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function getOrCreateClientId(): string {
  const existing = readCookie(CLIENT_ID_COOKIE);
  if (existing) return existing;

  const id = generateId();
  writeCookie(CLIENT_ID_COOKIE, id, CLIENT_ID_MAX_AGE_SECONDS);
  return id;
}

export function getOrCreateSessionId(): string {
  if (typeof sessionStorage === 'undefined') return generateId();

  try {
    const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
    const now = Date.now();

    if (raw) {
      const parsed = JSON.parse(raw) as { id: string; lastSeen: number };
      if (now - parsed.lastSeen < SESSION_TIMEOUT_MS) {
        sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({ id: parsed.id, lastSeen: now }));
        return parsed.id;
      }
    }

    const id = generateId();
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({ id, lastSeen: now }));
    return id;
  } catch {
    return generateId();
  }
}

type Ga4Params = Record<string, string | number | boolean>;

/**
 * Own devices: open /?no_track=1 once to stop sending events from this
 * browser, /?no_track=0 to turn it back on. Stored in localStorage only.
 */
function syncOptOutFromUrl(): void {
  try {
    const flag = new URLSearchParams(window.location.search).get('no_track');
    if (flag === '1') localStorage.setItem(OPT_OUT_KEY, '1');
    else if (flag === '0') localStorage.removeItem(OPT_OUT_KEY);
  } catch {
    // Storage may be blocked; tracking just stays on.
  }
}

function isTrackingSuppressed(): boolean {
  if (typeof navigator !== 'undefined' && navigator.webdriver) return true;
  try {
    return localStorage.getItem(OPT_OUT_KEY) === '1';
  } catch {
    return false;
  }
}

/** First-touch source of the session, computed once on the first event and kept in sessionStorage. */
function getFirstTouch(): FirstTouch {
  try {
    const raw = sessionStorage.getItem(FIRST_TOUCH_KEY);
    if (raw) return JSON.parse(raw) as FirstTouch;
    const touch = parseFirstTouch(window.location.search, document.referrer, window.location.hostname);
    sessionStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(touch));
    return touch;
  } catch {
    return parseFirstTouch(window.location.search, document.referrer, window.location.hostname);
  }
}

/** Parameters added to every event; parameters passed by the caller win. */
function buildContext(): Ga4Params {
  const page = getPageContext(window.location.pathname);
  return {
    page_location: window.location.href,
    page_path: page.page_path,
    page_type: page.page_type,
    content_slug: page.content_slug,
    lang: page.lang,
    reception_state: getReceptionIndicator(new Date()),
    ...getFirstTouch(),
  };
}

/**
 * Sends a GA4 event to the Cloudflare Worker relay. Fire-and-forget by
 * design — tracking must never block or break the UI. Prefers
 * navigator.sendBeacon so events fired right before navigation (e.g. a
 * tel: link click) still have a chance to be delivered.
 */
export function sendGa4Event(name: string, params: Ga4Params = {}): void {
  if (typeof window === 'undefined') return;

  try {
    syncOptOutFromUrl();
    if (isTrackingSuppressed()) return;

    const payload = {
      client_id: getOrCreateClientId(),
      session_id: getOrCreateSessionId(),
      events: [{ name, params: { ...buildContext(), ...params } }],
    };
    const body = JSON.stringify(payload);

    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([body], { type: 'application/json' });
      if (navigator.sendBeacon(ENDPOINT, blob)) return;
    }

    void fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Tracking failures must never surface to the user.
  }
}
