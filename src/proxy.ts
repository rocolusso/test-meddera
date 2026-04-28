import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { isScannerProbePathname } from '@/lib/scanner-paths';

declare module 'next/server' {
  interface NextRequest {
    geo?: {
      city?: string;
      country?: string;
      region?: string;
    };
  }
}

/** Pass pathname to the App Router for alternates / locale (layout reads x-pathname). */
function nextWithPathname(request: NextRequest): NextResponse {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isScannerProbePathname(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  const userAgent = request.headers.get('user-agent') || '';
  // Keep proxy checks ultra-cheap; detailed bot scoring is handled in API.
  if (/curl|wget|python|scrapy|aiohttp/i.test(userAgent)) {
    return new NextResponse(null, { status: 403 });
  }

  const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || '';
  const countryCode = country.toUpperCase();

  if (['IL', 'IN'].includes(countryCode)) {
    return new NextResponse(
      JSON.stringify({ message: 'Access denied' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  return nextWithPathname(request);
}

export const config = {
  matcher: [
    {
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
