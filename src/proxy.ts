import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { getCrawlerLabel } from '@/lib/crawler-label';
import { getClientIp } from '@/lib/client-ip';
import { isScannerProbePathname } from '@/lib/scanner-paths';
import { isSuspiciousUserAgent } from '@/lib/suspicious-user-agents';
import { getFormPostRatelimit, getFormTokenRatelimit } from '@/lib/upstash-rate-limit';

declare module 'next/server' {
  interface NextRequest {
    geo?: {
      city?: string;
      country?: string;
      region?: string;
    };
  }
}

export const runtime = 'edge';

const PROTECTED_API_PREFIX = ['/api/form-token', '/api/lips-form', '/api/main-contact-form'] as const;

function isProtectedApiPath(pathname: string): boolean {
  return (PROTECTED_API_PREFIX as readonly string[]).includes(pathname);
}

/** Pass pathname to the App Router for alternates / locale (layout reads x-pathname). */
function nextWithPathname(request: NextRequest): NextResponse {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isScannerProbePathname(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || '';
  const countryCode = country.toUpperCase();
  const userAgent = request.headers.get('user-agent') ?? '';
  const signatureAgent = request.headers.get('signature-agent') ?? '';
  const crawlerLabel = getCrawlerLabel(userAgent);

  console.log('[geo-block]', {
    countryCode,
    pathname: request.nextUrl.pathname,
    href: request.nextUrl.href,
    crawlerLabel,
    userAgent,
    signatureAgent,
  });

  if (['IL', 'IN'].includes(countryCode)) {
    console.log('[geo-block] Access denied', {
      countryCode,
      pathname: request.nextUrl.pathname,
      href: request.nextUrl.href,
      crawlerLabel,
      userAgent,
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

  if (pathname === '/cert') {
    return new NextResponse(
      JSON.stringify({ message: 'Access denied' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
  if (pathname === '/blocked') {
    return new NextResponse(
      JSON.stringify({ message: 'Access denied' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  if (isProtectedApiPath(pathname)) {
    if (request.method === 'OPTIONS') {
      return nextWithPathname(request);
    }

    const hasRedis = Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
    if (!hasRedis) {
      return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
    }

    const ua = request.headers.get('user-agent');
    if (isSuspiciousUserAgent(ua)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const ip = getClientIp(request);
    const limiter =
      pathname === '/api/form-token'
        ? getFormTokenRatelimit()
        : getFormPostRatelimit();

    if (!limiter) {
      return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
    }

    const { success, reset } = await limiter.limit(ip);
    if (!success) {
      const retrySec = Math.max(1, Math.ceil((reset - Date.now()) / 1000));
      return NextResponse.json(
        { error: 'Too many requests' },
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(retrySec),
          },
        },
      );
    }
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
