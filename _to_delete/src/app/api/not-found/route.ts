import { NextResponse, type NextRequest } from 'next/server';

import { notFoundRedirect, shouldRedirectUnknown } from '@/lib/not-found-redirect';

/**
 * Safety net behind the rewrite fallback in next.config.ts: reached only when no page, file or dynamic route matched.
 * The original path comes in the `path` query parameter. Only GET and HEAD are redirected.
 */
function handle(request: NextRequest): NextResponse {
  const original = request.nextUrl.searchParams.get('path');
  if (!original || !original.startsWith('/') || !shouldRedirectUnknown(original)) {
    return new NextResponse('Not found', { status: 404 });
  }
  return notFoundRedirect({ url: request.nextUrl, headers: request.headers }, original);
}

export function GET(request: NextRequest) {
  return handle(request);
}

export function HEAD(request: NextRequest) {
  return handle(request);
}

function plainNotFound(): NextResponse {
  return new NextResponse('Not found', { status: 404 });
}

export const POST = plainNotFound;
export const PUT = plainNotFound;
export const PATCH = plainNotFound;
export const DELETE = plainNotFound;
export const OPTIONS = plainNotFound;
