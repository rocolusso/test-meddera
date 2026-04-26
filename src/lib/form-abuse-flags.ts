/** When true, contact forms use legacy reCAPTCHA-only handling (emergency rollback). */
export function isFormAbuseProtectionDisabled(): boolean {
  const v = process.env.DISABLE_FORM_ABUSE_PROTECTION;
  if (v === 'true' || v === '1') {
    return true;
  }
  if (v === 'false' || v === '0') {
    return false;
  }

  // Local/dev fallback: if token/rate-limit infra is not configured, avoid hard 5xx on forms.
  if (process.env.NODE_ENV !== 'production') {
    const hasSecret = Boolean(process.env.FORM_TOKEN_SECRET && process.env.FORM_TOKEN_SECRET.length >= 16);
    const hasRedis = Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
    if (!hasSecret || !hasRedis) {
      return true;
    }
  }

  return false;
}
