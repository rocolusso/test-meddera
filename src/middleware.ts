/*eslint-disable*/

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Extend the NextRequest type to include Vercel's geo property
declare module 'next/server' {
    interface NextRequest {
        geo?: {
            city?: string
            country?: string
            region?: string
        }
    }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exclude /blocked from middleware processing
  if (pathname === '/blocked') {
    return NextResponse.next();
  }

  // Get the country from the Vercel geolocation headers
  const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || '';

  console.log('Detected country:', country); // Debug log

  // Convert to uppercase for case-insensitive comparison
  const countryCode = country.toUpperCase();

  if (['IL', 'IN', 'RU','JP','SE'].includes(countryCode)) {
    console.log(`Blocked country detected, redirecting to /blocked, coutry: ${country}`);
    // Redirect to a custom page or block access
    return NextResponse.redirect(new URL('/blocked', request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - blocked (to prevent redirect loops)
         */
    '/((?!api|_next/static|_next/image|favicon.ico|blocked).*)',
  ],
};
