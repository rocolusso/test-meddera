import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {



    const pathname = request.nextUrl.pathname;
    // Exclude /blocked from middleware processing
    if (pathname === '/blocked') {
        return NextResponse.next();
    }

    // Get the country from the Vercel geolocation headers
    const country = request.geo?.country || request.headers.get('x-vercel-ip-country');

    // Check if the visitor is from Israel
    // if (country === 'IL') {
    //     // Redirect to a custom page or block access
    //     return NextResponse.redirect(new URL('/index.tsx', request.url));
    // }

    if (country !== 'MD') {
        // Redirect to a custom page or block access
        return NextResponse.redirect(new URL('/blocked', request.url));
    }


    // Allow the request to proceed
    return NextResponse.next();
}
