import type { NextRequest } from 'next/server';

export function getClientIp(request: NextRequest): string {
  const xf = request.headers.get('x-forwarded-for');
  if (xf) {
    const first = xf.split(',')[0]?.trim();
    if (first) {
      return first;
    }
  }
  const vercel = request.headers.get('x-vercel-forwarded-for');
  if (vercel) {
    const first = vercel.split(',')[0]?.trim();
    if (first) {
      return first;
    }
  }
  const real = request.headers.get('x-real-ip');
  if (real) {
    return real.trim();
  }
  return 'unknown';
}
