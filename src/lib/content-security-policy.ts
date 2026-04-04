/**
 * Per-request CSP for Next.js App Router (nonce + strict-dynamic).
 * @see https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
 */

/** Edge-safe nonce (same role as Buffer.from(crypto.randomUUID()).toString('base64') in Node). */
export function generateNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes));
}

export type ContentSecurityPolicyOptions = {
  isDev: boolean;
  /** When true, adds require-trusted-types-for + trusted-types (may break some third-party scripts). */
  enableTrustedTypes: boolean;
};

export function buildContentSecurityPolicy(
  nonce: string,
  { isDev, enableTrustedTypes }: ContentSecurityPolicyOptions,
): string {
  const scriptSrcHosts = [
    'https://www.google.com',
    'https://www.gstatic.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://connect.facebook.net',
    'https://clarity.ms',
    'https://www.clarity.ms',
    'https://scripts.clarity.ms',
    'https://analytics.ahrefs.com',
    'https://vercel.live',
    'https://googleads.g.doubleclick.net',
    // Vercel Analytics / Speed Insights debug scripts (development)
    'https://va.vercel-scripts.com',
  ];

  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    ...(isDev ? ["'unsafe-eval'"] : []),
    ...scriptSrcHosts,
  ].join(' ');

  const directives: string[] = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://www.facebook.com https://www.google.com https://www.google.pl https://www.google.md https://googleads.g.doubleclick.net https://c.clarity.ms https://c.bing.com https://purecatamphetamine.github.io",
    "font-src 'self' data: https:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.analytics.google.com https://www.googletagmanager.com https://www.google.com https://www.gstatic.com https://www.facebook.com https://graph.facebook.com https://connect.facebook.net https://clarity.ms https://www.clarity.ms https://scripts.clarity.ms https://a.clarity.ms https://k.clarity.ms https://l.clarity.ms https://n.clarity.ms https://stats.g.doubleclick.net https://analytics.ahrefs.com",
    "frame-src 'self' https://www.googletagmanager.com https://www.facebook.com https://maps.google.com https://www.google.com https://vercel.live",
    "form-action 'self'",
  ];

  // In dev over http://LAN_IP:3000, upgrade-insecure-requests breaks CSS/JS (browser tries https:// on no TLS).
  if (!isDev) {
    directives.push('upgrade-insecure-requests');
  }

  if (!isDev && enableTrustedTypes) {
    directives.push("require-trusted-types-for 'script'");
    directives.push('trusted-types default');
  }

  return directives.join('; ');
}
