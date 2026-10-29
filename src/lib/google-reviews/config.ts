/**
 * Switch for the Google reviews block (home page, the reviews page, their sitemap entries, the footer link).
 * Server-only on purpose (no NEXT_PUBLIC_): read at build time, so after changing it redeploy. Unset or any
 * value other than "true" keeps all of it off and the site exactly as before.
 */
export function isGoogleReviewsEnabled(): boolean {
  return process.env.GOOGLE_REVIEWS_ENABLED === 'true';
}

/**
 * ID of the Featurable widget the reviews are read from (the part after "featurable-" in its embed code).
 * It is public by nature, but kept server-side: the reviews are fetched on the server, not in the browser.
 * Without it the block shows nothing.
 */
export function getFeaturableWidgetId(): string {
  return (process.env.FEATURABLE_WIDGET_ID ?? '').trim();
}

/**
 * Place ID of the clinic card. Optional: only used for the link to the card on Google Maps. Public by nature.
 * Without it the link is simply not shown.
 */
export const GOOGLE_PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? '';

/** Link to the clinic card on Google Maps (not the "write a review" form), or '' when there is no Place ID. */
export function googleMapsCardUrl(): string {
  return GOOGLE_PLACE_ID ? `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}` : '';
}

/** Paths of the reviews page. */
export const REVIEWS_PATH = { ru: '/otzyvy', ro: '/ro/recenzii' } as const;
