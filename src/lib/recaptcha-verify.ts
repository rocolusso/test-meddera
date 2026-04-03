/**
 * Server-side reCAPTCHA v3 verification (Google siteverify).
 */

export type RecaptchaVerifyResult = {
  ok: boolean;
  score?: number;
};

export async function verifyRecaptchaToken(token: string): Promise<RecaptchaVerifyResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return { ok: false };
  }

  const rawMin = process.env.RECAPTCHA_MIN_SCORE;
  const minScore = rawMin === undefined || rawMin === ''
    ? 0.5
    : Number.parseFloat(rawMin);
  if (Number.isNaN(minScore)) {
    return { ok: false };
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
      return { ok: false };
    }
    data = await res.json() as { success?: boolean; score?: number };
  } catch {
    return { ok: false };
  }

  if (!data.success) {
    return { ok: false };
  }

  const { score } = data;
  if (typeof score !== 'number' || score < minScore) {
    return { ok: false, score };
  }

  return { ok: true, score };
}
