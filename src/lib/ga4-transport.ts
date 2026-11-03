/**
 * Where the browser sends GA4 events (PLAN GA4G-01).
 *
 * - `worker` (default): our Cloudflare Worker relays them to the Measurement Protocol (ga4-worker-client.ts).
 * - `gtm`: events go through Google Tag Manager, the Google tag of the container measures the page itself
 *   (sessions, traffic source, engagement time).
 *
 * The switch is NEXT_PUBLIC_GA4_TRANSPORT (and it needs a valid NEXT_PUBLIC_GTM_ID, otherwise the worker is used). It is baked into the bundle at build time, so changing it needs a redeploy.
 * Exactly one path is active, so an event is never counted twice.
 */

export type Ga4Transport = 'worker' | 'gtm';

export type Ga4EventParams = Record<string, string | number | boolean>;

/**
 * `gtm` only when it is asked for AND the container id is valid. With a missing or malformed id GTM would never load
 * and events pushed to dataLayer would be lost silently, so the worker keeps carrying them instead.
 */
export function getGa4Transport(): Ga4Transport {
  return process.env.NEXT_PUBLIC_GA4_TRANSPORT === 'gtm' && getGtmId() ? 'gtm' : 'worker';
}

/** The container id from NEXT_PUBLIC_GTM_ID; an empty string when it is missing or malformed (GTM then stays off). */
export function getGtmId(): string {
  const id = (process.env.NEXT_PUBLIC_GTM_ID || '').trim();
  return /^GTM-[A-Z0-9]{4,10}$/.test(id) ? id : '';
}

/**
 * Server side (layouts): should the GTM loader be rendered?
 * Only for transport `gtm`, a valid id and a production deployment, like the other analytics.
 * A Vercel preview can opt in with NEXT_PUBLIC_GTM_ON_PREVIEW=1 (for the PageSpeed comparison).
 */
export function isGtmEnabled(): boolean {
  if (getGa4Transport() !== 'gtm' || !getGtmId()) return false;
  const isVercel = process.env.VERCEL === '1';
  const isProductionDeployment = process.env.NODE_ENV === 'production' && (isVercel ? process.env.VERCEL_ENV === 'production' : true);
  return isProductionDeployment || process.env.NEXT_PUBLIC_GTM_ON_PREVIEW === '1';
}

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

/**
 * Makes sure `window.dataLayer` and `window.gtag` exist. Commands pushed before gtm.js has loaded wait in the queue
 * and are processed when it arrives, so an early event is not lost.
 */
export function ensureGtagShim(): (...args: unknown[]) => void {
  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== 'function') {
    const layer = w.dataLayer;
    w.gtag = function gtag() {
      // GTM reads gtag commands only as an Arguments object; a plain array would be treated as a data layer message.
      // eslint-disable-next-line prefer-rest-params
      layer.push(arguments);
    };
  }
  return w.gtag;
}

/** Sends one event through the Google tag of the GTM container, with all its parameters. */
export function pushGtmEvent(name: string, params: Ga4EventParams): void {
  ensureGtagShim()('event', name, params);
}
