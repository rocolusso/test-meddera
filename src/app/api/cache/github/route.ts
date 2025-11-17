import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const res = await fetch('https://purecatamphetamine.github.io/country-flag-icons/3x2/MD.svg');

  const js = await res.text();

  return new NextResponse(js, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, max-age=600', // 10 минут
    },
  });
}
