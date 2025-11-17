import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const res = await fetch('https://maps.googleapis.com/maps/api/js/StaticMapService.GetMapImage?1m2&1i19380673&2i11696399&2e1&3u17&4m2&1u412&2u450&5m6&1e0&5sen&6sus&10b1&12b1&14i47083502&8e1&client=google-maps-embed&token=2765');

  const js = await res.text();

  return new NextResponse(js, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, max-age=86400', // 1 день
    },
  });
}
