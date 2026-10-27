import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Country of the visitor for one decision only: whether to show the scroll teaser.
 * Reads the header Cloudflare (or Vercel) adds to the request. Nothing is logged or stored.
 * '' means unknown (no header, "XX" unknown, "T1" Tor); the client treats it as allowed.
 */
// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
  const raw = (request.headers.get('cf-ipcountry') ?? request.headers.get('x-vercel-ip-country') ?? '').trim().toUpperCase();
  const country = /^[A-Z]{2}$/.test(raw) && raw !== 'XX' && raw !== 'T1' ? raw : '';
  return NextResponse.json({ country }, { headers: { 'Cache-Control': 'no-store, max-age=0' } });
}
