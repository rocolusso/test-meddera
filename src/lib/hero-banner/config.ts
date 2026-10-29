/**
 * Switch for the animated banner on the two home pages (/ and /ro).
 * Server-only on purpose (no NEXT_PUBLIC_): nothing about it reaches the browser bundle.
 * The home pages are static, so the value is read at build time: after changing it, redeploy.
 * Unset or any value other than "true" keeps the banner off and the pages exactly as before.
 */
export function isHeroBannerEnabled(): boolean {
  return process.env.HERO_BANNER_ENABLED === 'true';
}

/**
 * Switch for the banner on the lip enlargement pages (the service page and the blog pages about lips,
 * RU and RO). Same rules as the home banner switch: server-only, read at build time, redeploy after
 * changing it, unset or any value other than "true" keeps the banner off. It switches only the banner:
 * the buttons of those pages open the lips quiz either way.
 */
export function isLipsBannerEnabled(): boolean {
  return process.env.LIPS_BANNER_ENABLED === 'true';
}

/**
 * Switch for the banner at the end of the lip enlargement pages (before the contacts block, or before
 * the footer on blog pages), the one with the survey invitation. Same rules as the other switches:
 * server-only, read at build time, redeploy after changing it, unset or any value other than "true"
 * keeps it off. While it is off the service page keeps its closing grey box with the two sentences and
 * the lip articles and hubs keep their call-to-action card (ArticleCta); when it is on, the banner takes
 * the place of both.
 */
export function isLipsEndBannerEnabled(): boolean {
  return process.env.LIPS_END_BANNER_ENABLED === 'true';
}
