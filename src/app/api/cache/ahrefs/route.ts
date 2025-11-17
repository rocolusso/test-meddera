import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const res = await fetch('https://analytics.ahrefs.com/analytics.js');

  const js = await res.text();

  return new NextResponse(js, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, max-age=14400', // 4 часа
    },
  });
}
