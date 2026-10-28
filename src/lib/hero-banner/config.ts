/**
 * Switch for the animated banner on the two home pages (/ and /ro).
 * Server-only on purpose (no NEXT_PUBLIC_): nothing about it reaches the browser bundle.
 * The home pages are static, so the value is read at build time: after changing it, redeploy.
 * Unset or any value other than "true" keeps the banner off and the pages exactly as before.
 */
export function isHeroBannerEnabled(): boolean {
  return process.env.HERO_BANNER_ENABLED === 'true';
}
