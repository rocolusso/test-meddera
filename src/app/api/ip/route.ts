import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded
    ? forwarded.split(',')[0] // If multiple IPs, use the first
    : ''; // Если нет, используем  // Fallback to request IP if available

  return NextResponse.json(
    { ip },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
}
