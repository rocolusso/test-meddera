import { getAllSlugParams, getMaxIndexPage } from '@/blog-data/registry';
import { isGoogleReviewsEnabled, REVIEWS_PATH } from '@/lib/google-reviews/config';
import { SERVICE_SLUGS } from '@/lib/service-slugs';

/**
 * Paths that exist on the site. Used by proxy.ts: any other page-like path is answered with a 301 to the home page.
 * Built once per server instance from the same sources as the sitemap.
 */
const STATIC_PATHS = [
  '/',
  '/about',
  '/services',
  '/contacts',
  '/blog',
  '/search',
  '/review',
  '/developer',
  '/ads/cards',
  '/ads/g1',
  '/ro',
  '/ro/about',
  '/ro/services',
  '/ro/contacts',
  '/ro/blog',
  '/ro/search',
];

function buildValidPaths(): Set<string> {
  const set = new Set<string>(STATIC_PATHS);
  if (isGoogleReviewsEnabled()) {
    set.add(REVIEWS_PATH.ru);
    set.add(REVIEWS_PATH.ro);
  }
  for (const slug of SERVICE_SLUGS) {
    set.add(`/services/${slug}`);
    set.add(`/ro/services/${slug}`);
  }
  for (const { slug } of getAllSlugParams('ru')) set.add(`/blog/${slug}`);
  for (const { slug } of getAllSlugParams('ro')) set.add(`/ro/blog/${slug}`);
  const max = getMaxIndexPage();
  for (let p = 2; p <= max; p++) {
    set.add(`/blog/page/${p}`);
    set.add(`/ro/blog/page/${p}`);
  }
  return set;
}

const VALID_PATHS = buildValidPaths();

/** Drops the trailing slash (except for the root). */
export function normalizePath(pathname: string): string {
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export function isValidPath(pathname: string): boolean {
  return VALID_PATHS.has(normalizePath(pathname));
}

export function isRoPath(pathname: string): boolean {
  return pathname === '/ro' || pathname.startsWith('/ro/');
}

/** Blog list pages: `/blog/page/<anything>` and the RO twin. */
export function isBlogPaginationPath(pathname: string): boolean {
  return /^\/(ro\/)?blog\/page\/.+$/.test(normalizePath(pathname));
}

/** Paths that must keep a real 404: assets, framework internals, API, any file with an extension. */
export function isTechnicalPath(pathname: string): boolean {
  if (pathname.startsWith('/api/') || pathname === '/api') return true;
  if (pathname.startsWith('/_next/') || pathname === '/_next') return true;
  const last = pathname.split('/').pop() ?? '';
  return last.includes('.');
}
