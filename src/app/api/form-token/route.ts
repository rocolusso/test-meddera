import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { getClientIp } from '@/lib/client-ip';
import { isFormAbuseProtectionDisabled } from '@/lib/form-abuse-flags';
import { signFormToken } from '@/lib/form-token';
import { getFormTokenRatelimit } from '@/lib/upstash-rate-limit';

export async function GET(request: NextRequest) {
  if (isFormAbuseProtectionDisabled()) {
    return NextResponse.json({
      token: '',
      expiresAt: null as string | null,
      disabled: true,
    });
  }

  if (!process.env.FORM_TOKEN_SECRET || process.env.FORM_TOKEN_SECRET.length < 16) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  const limiter = getFormTokenRatelimit();
  if (!limiter) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
  const ip = getClientIp(request);
  const { success, reset } = await limiter.limit(ip);
  if (!success) {
    const retrySec = Math.max(1, Math.ceil((reset - Date.now()) / 1000));
    return NextResponse.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: { 'Retry-After': String(retrySec) },
      },
    );
  }

  const signed = signFormToken();
  if (!signed) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  return NextResponse.json({
    token: signed.token,
    expiresAt: signed.expiresAt,
    disabled: false,
  });
}
