/** When true, contact forms use legacy reCAPTCHA-only handling (emergency rollback). */
export function isFormAbuseProtectionDisabled(): boolean {
  const v = process.env.DISABLE_FORM_ABUSE_PROTECTION;
  return v === 'true' || v === '1';
}
