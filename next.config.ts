import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { NextConfig } from 'next';

/**
 * Redirects for merged or removed blog articles. Source of truth: src/blog-data/blog-redirects.json.
 * Each entry: { id, ruSlug, roSlug, ruTo, roTo }. RU goes to ruTo, RO goes to roTo.
 */
function blogRedirects() {
  const file = path.join(path.dirname(fileURLToPath(import.meta.url)), 'src/blog-data/blog-redirects.json');
  const rows = JSON.parse(fs.readFileSync(file, 'utf8')) as Array<{
    ruSlug: string;
    roSlug: string;
    ruTo: string;
    roTo: string;
  }>;
  return rows.flatMap((r) => [
    { source: `/blog/${r.ruSlug}`, destination: r.ruTo, permanent: true },
    { source: `/ro/blog/${r.roSlug}`, destination: r.roTo, permanent: true },
  ]);
}

const getSecurityHeaders = (isDev: boolean) => [
  // Keep HSTS only in production to avoid sticky localhost/browser behavior.
  ...(isDev ? [] : [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }]),
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'interest-cohort=()',
  },
];

const nextConfig: NextConfig = {
  /* config options here */

  /** Avoid webpack re-bundling Upstash (fixes "Super expression must either be null or a function" in API routes). */
  serverExternalPackages: ['@upstash/redis', '@upstash/ratelimit'],

  poweredByHeader: false,

  // Inline CSS was tried but the bundle (>100 KB Tailwind floor) bloats every
  // HTML response and prevents cross-route browser caching of the stylesheet.
  // Keeping it as a separate request lets the CDN cache the CSS by hash and
  // the browser reuse it across the SPA-style navigation between RU/RO pages.
  // experimental: {
  //   inlineCss: true,
  // },

  generateBuildId: async () => `${Date.now()}`, // Forces new build ID on each deploy (updated 2026-04-11 fix-2)

  /** Allow next/image quality below default 75 (e.g. LCP logo in Header). */
  images: {
    qualities: [100, 40, 60, 75],
  },

  turbopack: {
    resolveAlias: {
      'next/dist/build/polyfills/polyfill-module': './polyfills/empty-polyfill.js',
      'next/dist/build/polyfills/polyfill-module.js': './polyfills/empty-polyfill.js',
      '../build/polyfills/polyfill-module': './polyfills/empty-polyfill.js',
      '../build/polyfills/polyfill-module.js': './polyfills/empty-polyfill.js',
    },
  },

  async headers() {
    const isDev = process.env.NODE_ENV !== 'production';

    return [
      {
        source: '/:path*',
        headers: getSecurityHeaders(isDev),
      },
      // /developer is closed from search engines also by header (the page carries a robots meta tag too).
      {
        source: '/developer',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },

  /**
   * Safety net: a path that matched no page, file or dynamic route goes to /api/not-found, which answers GET and HEAD
   * with a 301 to the home page (proxy.ts normally handles this earlier).
   */
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [{ source: '/:path*', destination: '/api/not-found?path=/:path*' }],
    };
  },

  async redirects() {
    return [
      ...blogRedirects(),
      // Blog: page 1 canonical on /blog and /ro/blog; bare /blog/page → /blog (reserved segment; do not use slug "page")
      {
        source: '/blog/page/1',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/ro/blog/page/1',
        destination: '/ro/blog',
        permanent: true,
      },
      {
        source: '/blog/page',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/page/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/ro/blog/page',
        destination: '/ro/blog',
        permanent: true,
      },
      {
        source: '/ro/blog/page/',
        destination: '/ro/blog',
        permanent: true,
      },
      {
        source: '/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej/ro',
        destination: '/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
        destination: '/',
        permanent: true, // 301 redirect
      },
      // Locale URL refactor 2026-04: RO services moved from suffix `/services/<slug>/ro` to prefix `/ro/services/<slug>`.
      // 301 from old suffix URLs preserves SEO weight.
      {
        source: '/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej/ro',
        destination: '/ro/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
        permanent: true,
      },
      {
        source: '/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza/ro',
        destination: '/ro/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
        permanent: true,
      },
      {
        source: '/services/byorevytalyzaczyya-v-belczah/ro',
        destination: '/ro/services/byorevytalyzaczyya-v-belczah',
        permanent: true,
      },
      {
        source: '/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy/ro',
        destination: '/ro/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
        permanent: true,
      },
      {
        source: '/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye/ro',
        destination: '/ro/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
        permanent: true,
      },
      {
        source: '/services/karboksyterapyya-v-belczah/ro',
        destination: '/ro/services/karboksyterapyya-v-belczah',
        permanent: true,
      },
      {
        source: '/services/konsultaczyya-dermatokosmetologa-v-belczah/ro',
        destination: '/ro/services/konsultaczyya-dermatokosmetologa-v-belczah',
        permanent: true,
      },
      {
        source: '/services/konturnaya-plastyka-fylleramy-v-belczah/ro',
        destination: '/ro/services/konturnaya-plastyka-fylleramy-v-belczah',
        permanent: true,
      },
      {
        source: '/services/mezoterapyya-dlya-volos-v-belczah/ro',
        destination: '/ro/services/mezoterapyya-dlya-volos-v-belczah',
        permanent: true,
      },
      {
        source: '/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe/ro',
        destination: '/ro/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
        permanent: true,
      },
      {
        source: '/services/professyonalnaya-chystka-lycza-v-belczah/ro',
        destination: '/ro/services/professyonalnaya-chystka-lycza-v-belczah',
        permanent: true,
      },
      {
        source: '/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy/ro',
        destination: '/ro/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
        permanent: true,
      },
      {
        source: '/services/terapyya-anty-akne-v-belczah/ro',
        destination: '/ro/services/terapyya-anty-akne-v-belczah',
        permanent: true,
      },
      {
        source: '/services/terapyya-protyv-pygmentaczyy-v-belczah/ro',
        destination: '/ro/services/terapyya-protyv-pygmentaczyy-v-belczah',
        permanent: true,
      },
      {
        source: '/services/uvelychenye-gub-v-belczah/ro',
        destination: '/ro/services/uvelychenye-gub-v-belczah',
        permanent: true,
      },
      {
        source: '/services/ynjekczyy-lypolytykov-v-belczah/ro',
        destination: '/ro/services/ynjekczyy-lypolytykov-v-belczah',
        permanent: true,
      },
      // Numeric legacy redirects (`/services/N` → slug-based RU; `/services/N/ro` → prefix-based RO).
      {
        source: '/services/1',
        destination: '/services/konsultaczyya-dermatokosmetologa-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/1/ro',
        destination: '/ro/services/konsultaczyya-dermatokosmetologa-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/2',
        destination: '/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/2/ro',
        destination: '/ro/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/3',
        destination: '/services/professyonalnaya-chystka-lycza-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/3/ro',
        destination: '/ro/services/professyonalnaya-chystka-lycza-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/4',
        destination: '/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/4/ro',
        destination: '/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/5',
        destination: '/services/karboksyterapyya-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/5/ro',
        destination: '/ro/services/karboksyterapyya-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/6',
        destination: '/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/6/ro',
        destination: '/ro/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/7',
        destination: '/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/7/ro',
        destination: '/ro/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/8',
        destination: '/services/terapyya-anty-akne-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/8/ro',
        destination: '/ro/services/terapyya-anty-akne-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/9',
        destination: '/services/terapyya-protyv-pygmentaczyy-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/9/ro',
        destination: '/ro/services/terapyya-protyv-pygmentaczyy-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/10',
        destination: '/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/10/ro',
        destination: '/ro/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/11',
        destination: '/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/11/ro',
        destination: '/ro/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/12',
        destination: '/services/mezoterapyya-dlya-volos-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/12/ro',
        destination: '/ro/services/mezoterapyya-dlya-volos-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/13',
        destination: '/services/uvelychenye-gub-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/13/ro',
        destination: '/ro/services/uvelychenye-gub-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/14',
        destination: '/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/14/ro',
        destination: '/ro/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/15',
        destination: '/services/byorevytalyzaczyya-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/15/ro',
        destination: '/ro/services/byorevytalyzaczyya-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/16',
        destination: '/services/konturnaya-plastyka-fylleramy-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/16/ro',
        destination: '/ro/services/konturnaya-plastyka-fylleramy-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/17',
        destination: '/services/ynjekczyy-lypolytykov-v-belczah',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/17/ro',
        destination: '/ro/services/ynjekczyy-lypolytykov-v-belczah',
        permanent: true, // 301 redirect
      },

      {
        source: '/ro/blog/botox-b%C4%83rba%C8%9Bi-particularit%C4%83%C8%9Bi-balti',
        destination: '/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/ro/blog/conturare-pome%C8%9Bi-barbie-balti',
        destination: '/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/ro/blog/conturare-pome%C8%9Bi-balti',
        destination: '/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/ro/blog/botox-sarcin%C4%83-al%C4%83ptare-balti',
        destination: '/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/ro/blog/botox-bruxism-scr%C3%A2%C8%99nit-din%C8%9Bi-balti',
        destination: '/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/ro/blog/botox-migren%C4%83-dureri-cap-tratament-balti',
        destination: '/ro',
        permanent: true, // 301 redirect
      },
      {
        source: '/$',
        destination: '/',
        permanent: true, // 301 redirect
      },

    ];
  },
};

export default nextConfig;
