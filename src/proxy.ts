import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { buildContentSecurityPolicy, generateNonce } from '@/lib/content-security-policy';

declare module 'next/server' {
  interface NextRequest {
    geo?: {
      city?: string;
      country?: string;
      region?: string;
    };
  }
}

function nextWithCsp(request: NextRequest): NextResponse {
  const nonce = generateNonce();
  const isDev = process.env.NODE_ENV !== 'production';
  const enableTrustedTypes = process.env.ENABLE_TRUSTED_TYPES === 'true';
  const csp = buildContentSecurityPolicy(nonce, { isDev, enableTrustedTypes });
  const disableCsp = process.env.DISABLE_CSP === 'true' || process.env.DISABLE_CSP === '1';

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  if (!disableCsp) {
    response.headers.set('Content-Security-Policy', csp);
  }
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // if (pathname === '/blocked') {
  //   return nextWithCsp(request);
  // }

  const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || '';
  const countryCode = country.toUpperCase();

  console.log('[geo-block]', {
    countryCode,
    pathname: request.nextUrl.pathname,
    href: request.nextUrl.href,
  });

  if (['IL', 'IN'].includes(countryCode)) {
    console.log('[geo-block] Access denied', {
      countryCode,
      pathname: request.nextUrl.pathname,
      href: request.nextUrl.href,
    });

    // Возвращаем ответ со статусом 403 напрямую
    return new NextResponse(
      JSON.stringify({ message: 'Access denied' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  if (pathname === '/cert') {
    // Возвращаем ответ со статусом 403 напрямую
    return new NextResponse(
      JSON.stringify({ message: 'Access denied' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
  if (pathname === '/blocked') {
    // Возвращаем ответ со статусом 403 напрямую
    return new NextResponse(
      JSON.stringify({ message: 'Access denied' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  // if (['IL', 'IN', 'RU', 'JP', 'SE'].includes(countryCode)) {
  //   console.log('[geo-block] redirect to /blocked', {
  //     countryCode,
  //     pathname: request.nextUrl.pathname,
  //     href: request.nextUrl.href,
  //   });
  //   return NextResponse.redirect(new URL('/blocked', request.url));
  // }

  return nextWithCsp(request);
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
