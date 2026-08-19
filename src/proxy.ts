import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getImageProps } from 'next/image';

import aboutImg from '../public/assets/img/about_2k.jpg';

/**
 * Early Hints (HTTP 103) support — PLAN-PERF-03.
 *
 * Cloudflare's Early Hints feature only works off real HTTP `Link` response
 * headers (it caches them per-URL and replays them as a 103 on the next
 * request); a `<link rel="preload">` tag rendered inside the HTML `<head>`
 * (which is all `next/image`'s `preload`/`priority` prop produces) is
 * invisible to it. This proxy adds the equivalent `Link` header by hand.
 *
 * Computed once at module load (not per-request) so the added cost per
 * request is just a string concat + header set — no image processing at
 * request time.
 */

/**
 * Mirrors next/image's own srcset generation for AboutNew.tsx's LCP image
 * (see src/components/new-ui/AboutNew.tsx) so the URLs Cloudflare hints
 * match exactly what the browser will actually request. Keep `sizes` and
 * `quality` here in sync with AboutNew.tsx if either ever changes.
 */
const { props: aboutImageProps } = getImageProps({
  src: aboutImg,
  alt: '',
  fill: true,
  sizes: '(max-width: 1024px) 100vw, 38vw',
  quality: 75,
});

/**
 * Cloudflare's Early Hints cache/replay step drops any Link entry whose
 * parameter values contain commas — confirmed empirically: with the full
 * `imagesrcset`/`imagesizes` candidates (which are comma-separated lists),
 * the 103 response silently omits this resource entirely, even though the
 * real 200 response carries it correctly. So for the 103-only header we
 * hint a single concrete width instead of the full responsive set.
 *
 * The real HTML `<link rel="preload" imagesrcset=... imagesizes=...>` tag
 * (auto-rendered by next/image's `priority` prop on <Image>) is untouched
 * and still gives the browser the full responsive candidate list once the
 * HTML itself arrives — this header only affects the earlier 103 signal.
 *
 * 828 is a middle-of-the-road width that covers both the common mobile case
 * (sizes: 100vw below 1024px, most visitors) and the desktop case (38vw of
 * a ~1152px container ≈ 830px at 2x DPR) reasonably well. A visitor whose
 * viewport picks a different candidate just fetches that URL normally —
 * same as if this header didn't exist, not worse.
 */
function pickSrcSetUrl(srcSet: string, width: number): string {
  const entry = srcSet.split(', ').find((candidate) => candidate.endsWith(` ${width}w`));
  if (!entry) {
    throw new Error(`about_2k.jpg srcset has no ${width}w candidate — update PLAN-PERF-03's proxy.ts`);
  }
  return entry.slice(0, entry.lastIndexOf(' '));
}

if (!aboutImageProps.srcSet) {
  throw new Error('about_2k.jpg: next/image returned no srcSet — check the getImageProps() call above');
}

const ABOUT_IMAGE_URL = pickSrcSetUrl(aboutImageProps.srcSet, 828);
const ABOUT_IMAGE_LINK = `<${ABOUT_IMAGE_URL}>; rel=preload; as=image`;

/**
 * HeaderNew's logo is a plain static SVG (native <img>, bypasses the next/image
 * optimizer — see HeaderNew.tsx) rendered on every page, either directly or via
 * ContentPageShell. Safe to hint site-wide: single static URL, no srcset to match.
 */
const LOGO_LINK = '</assets/img/pintea_logo.svg>; rel=preload; as=image; type="image/svg+xml"';

// Home pages only — AboutNew (and its LCP image) is not rendered anywhere else.
const HOME_PATHS = new Set(['/', '/ro']);

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  const links = [LOGO_LINK];
  if (HOME_PATHS.has(request.nextUrl.pathname)) {
    links.push(ABOUT_IMAGE_LINK);
  }

  response.headers.set('Link', links.join(', '));
  return response;
}

export const config = {
  matcher: [
    {
      // Skip API routes, static/image-optimizer internals, public assets, and
      // well-known metadata files — no navigation ever happens on these.
      source:
        '/((?!api|_next/static|_next/image|assets|favicon.ico|sitemap.xml|robots.txt).*)',
      // Skip RSC prefetch/navigation requests — Early Hints only matters for
      // the initial document request, not client-side route prefetches.
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
