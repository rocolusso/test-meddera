import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { isScannerProbePathname } from '@/lib/scanner-paths';
import { getCrawlerLabel } from '@/lib/crawler-label';

declare module 'next/server' {
  interface NextRequest {
    geo?: {
      city?: string;
      country?: string;
      region?: string;
    };
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isScannerProbePathname(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || '';
  const countryCode = country.toUpperCase();
  const userAgent = request.headers.get('user-agent') ?? '';
  const signatureAgent = request.headers.get('signature-agent') ?? '';
  const crawlerLabel = getCrawlerLabel(userAgent);

  // Keep proxy checks ultra-cheap; detailed bot scoring is handled in API.
  if (/curl|wget|python|scrapy|aiohttp/i.test(userAgent)) {
    return new NextResponse(null, { status: 403 });
  }

  console.log('[geo-block]', {
    countryCode,
    pathname: request.nextUrl.pathname,
    href: request.nextUrl.href,
    userAgent,
    crawlerLabel,
    signatureAgent,
  });

  if (['IL', 'IN'].includes(countryCode)) {
    console.log('[geo-block]', {
      countryCode,
      pathname: request.nextUrl.pathname,
      href: request.nextUrl.href,
      userAgent,
      crawlerLabel,
      signatureAgent,
    });
    return new NextResponse(
      JSON.stringify({ message: 'Access denied' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      // robots.txt and sitemap.xml are excluded so they bypass the bot-UA
      // blacklist below — REP requires robots.txt to be reachable to every
      // crawler regardless of UA, and Ahrefs Site Audit was flagging it as
      // "not accessible" when probing with curl/python-flavoured user agents.
      source: '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
