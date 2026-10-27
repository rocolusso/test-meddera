import { NextRequest, NextResponse } from 'next/server';

import { getSearchIndex } from '@/lib/search/build-index';
import { searchIndex } from '@/lib/search/query';
import { isSearchServerEnabled, warnOnSearchFlagMismatch } from '@/lib/search/server-config';
import type { SearchLocale } from '@/lib/search/types';

export const runtime = 'nodejs';

const MIN_QUERY = 2;
const MAX_QUERY = 64;
const DEFAULT_LIMIT = 8;
const MAX_LIMIT = 30;

// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\u0000-\u001f\u007f]/;

const ERROR_HEADERS = { 'Cache-Control': 'no-store' };

function badRequest(code: string) {
  return NextResponse.json({ error: code }, { status: 400, headers: ERROR_HEADERS });
}

// eslint-disable-next-line import/prefer-default-export
export function GET(request: NextRequest) {
  warnOnSearchFlagMismatch();
  if (!isSearchServerEnabled()) return NextResponse.json({ error: 'disabled' }, { status: 404, headers: ERROR_HEADERS });

  const params = request.nextUrl.searchParams;

  const lang = params.get('lang');
  if (lang !== 'ru' && lang !== 'ro') return badRequest('lang');
  const locale: SearchLocale = lang;

  const q = (params.get('q') ?? '').trim();
  if (q.length < MIN_QUERY || q.length > MAX_QUERY || CONTROL_CHARS.test(q)) return badRequest('q');

  const parsedLimit = Number.parseInt(params.get('limit') ?? '', 10);
  const limit = Number.isFinite(parsedLimit) ? Math.min(Math.max(parsedLimit, 1), MAX_LIMIT) : DEFAULT_LIMIT;

  const body = searchIndex(getSearchIndex(locale), q, limit);

  return NextResponse.json(body, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'noindex',
    },
  });
}
