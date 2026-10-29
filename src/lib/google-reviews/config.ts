/**
 * Switch for the Google reviews block (home page, the reviews page, their sitemap entries, the footer link).
 * Server-only on purpose (no NEXT_PUBLIC_): read at build time, so after changing it redeploy. Unset or any
 * value other than "true" keeps all of it off and the site exactly as before.
 */
export function isGoogleReviewsEnabled(): boolean {
  return process.env.GOOGLE_REVIEWS_ENABLED === 'true';
}

/**
 * Browser key of Google Maps Platform and the Place ID of the clinic card. Both are public by nature (they
 * end up in the page); the key must be restricted to the site's domain in Google Cloud. Without either of
 * them the block shows nothing.
 */
export const GOOGLE_MAPS_BROWSER_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? '';
export const GOOGLE_PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? '';

/** Paths of the reviews page. */
export const REVIEWS_PATH = { ru: '/otzyvy', ro: '/ro/recenzii' } as const;
