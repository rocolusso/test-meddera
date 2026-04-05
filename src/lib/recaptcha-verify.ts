/**
 * Server-side reCAPTCHA v3 verification (Google siteverify).
 */

export type RecaptchaVerifyResult = {
  ok: boolean;
  score?: number;
};

export type RecaptchaScoreStatus =
  | 'ok'
  | 'low_score'
  | 'invalid'
  | 'network_error'
  | 'missing_secret'
  | 'empty_token';

export type RecaptchaScoringResult = {
  status: RecaptchaScoreStatus;
  score?: number;
};

export async function verifyRecaptchaToken(token: string): Promise<RecaptchaVerifyResult> {
  const detailed = await verifyRecaptchaForScoring(token);
  return { ok: detailed.status === 'ok', score: detailed.score };
}

/** Full detail for anti-spam scoring and fallback when Google is down. */
export async function verifyRecaptchaForScoring(token: string): Promise<RecaptchaScoringResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return { status: 'missing_secret' };
  }
  if (!token || token.trim() === '') {
    return { status: 'empty_token' };
  }

  const rawMin = process.env.RECAPTCHA_MIN_SCORE;
  const minScore = rawMin === undefined || rawMin === ''
    ? 0.5
    : Number.parseFloat(rawMin);
  if (Number.isNaN(minScore)) {
    return { status: 'invalid' };
  }

  const params = new URLSearchParams();
  params.set('secret', secret);
  params.set('response', token);

  let data: { success?: boolean; score?: number };
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
    if (!res.ok) {
      return { status: 'network_error' };
    }
    data = await res.json() as { success?: boolean; score?: number };
  } catch {
    return { status: 'network_error' };
  }

  if (!data.success) {
    return { status: 'invalid' };
  }

  const { score } = data;
  if (typeof score !== 'number') {
    return { status: 'invalid' };
  }
  if (score < minScore) {
    return { status: 'low_score', score };
  }

  return { status: 'ok', score };
}
