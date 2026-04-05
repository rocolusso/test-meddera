import { NextResponse } from 'next/server';

import { isFormAbuseProtectionDisabled } from '@/lib/form-abuse-flags';
import { signFormToken } from '@/lib/form-token';

export async function GET() {
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
