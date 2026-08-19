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

const ABOUT_IMAGE_SIZES = '(max-width: 1024px) 100vw, 38vw';
const ABOUT_IMAGE_LINK = `<${aboutImageProps.src}>; rel=preload; as=image; imagesrcset="${aboutImageProps.srcSet}"; imagesizes="${ABOUT_IMAGE_SIZES}"`;

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
