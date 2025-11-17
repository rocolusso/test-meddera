import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const res = await fetch('https://maps.googleapis.com/maps/api/js?client=google-maps-embed&paint_origin=&libraries=geometry,search&v=weekly&loading=async&language=en&callback=onApiLoad');

  const js = await res.text();

  return new NextResponse(js, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, max-age=1800', // 30 минут
    },
  });
}
