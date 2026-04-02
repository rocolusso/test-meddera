import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export function GET() {
  // Moderate experiment: allow ~50% of private prefetch proxy traffic.
  // Spec expects `application/trafficadvice+json` and an array payload.
  const body = [
    {
      user_agent: 'prefetch-proxy',
      google_prefetch_proxy_eap: {
        // fraction: 0.5,
        fraction: 0.0,
      },
    },
  ];

  return NextResponse.json(body, {
    headers: {
      'Content-Type': 'application/trafficadvice+json; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}

