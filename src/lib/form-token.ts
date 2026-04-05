import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';

const AUD = 'contact-form' as const;
const TTL_SEC = 120;

export type FormTokenPayload = {
  jti: string;
  exp: number;
  aud: typeof AUD;
};

function getSecret(): string | null {
  const s = process.env.FORM_TOKEN_SECRET;
  if (!s || s.length < 16) {
    return null;
  }
  return s;
}

/** Signed token: base64url(payloadJson).base64url(hmacSha256) */
export function signFormToken(): { token: string; expiresAt: string; exp: number } | null {
  const secret = getSecret();
  if (!secret) {
    return null;
  }
  const jti = randomUUID();
  const exp = Math.floor(Date.now() / 1000) + TTL_SEC;
  const payload: FormTokenPayload = { jti, exp, aud: AUD };
  const payloadJson = JSON.stringify(payload);
  const payloadB64 = Buffer.from(payloadJson, 'utf8').toString('base64url');
  const sig = createHmac('sha256', secret).update(payloadB64, 'utf8').digest();
  const sigB64 = sig.toString('base64url');
  const token = `${payloadB64}.${sigB64}`;
  const expiresAt = new Date(exp * 1000).toISOString();
  return { token, expiresAt, exp };
}

export type VerifyFormTokenResult =
  | { ok: true; jti: string; exp: number }
  | { ok: false; reason: string };

export function verifyFormToken(token: string): VerifyFormTokenResult {
  const secret = getSecret();
  if (!secret) {
    return { ok: false, reason: 'missing_secret' };
  }
  const parts = token.split('.');
  if (parts.length !== 2) {
    return { ok: false, reason: 'format' };
  }
  const [payloadB64, sigB64] = parts;
  if (!payloadB64 || !sigB64) {
    return { ok: false, reason: 'format' };
  }
  const expectedSig = createHmac('sha256', secret).update(payloadB64, 'utf8').digest();
  let sigBuf: Buffer;
  try {
    sigBuf = Buffer.from(sigB64, 'base64url');
  } catch {
    return { ok: false, reason: 'sig' };
  }
  if (sigBuf.length !== expectedSig.length || !timingSafeEqual(sigBuf, expectedSig)) {
    return { ok: false, reason: 'sig' };
  }

  let parsed: FormTokenPayload;
  try {
    const json = Buffer.from(payloadB64, 'base64url').toString('utf8');
    parsed = JSON.parse(json) as FormTokenPayload;
  } catch {
    return { ok: false, reason: 'payload' };
  }
  if (parsed.aud !== AUD || typeof parsed.jti !== 'string' || typeof parsed.exp !== 'number') {
    return { ok: false, reason: 'payload' };
  }
  const now = Math.floor(Date.now() / 1000);
  if (parsed.exp < now) {
    return { ok: false, reason: 'expired' };
  }

  return { ok: true, jti: parsed.jti, exp: parsed.exp };
}

export { TTL_SEC as FORM_TOKEN_TTL_SEC };
