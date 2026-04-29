/**
 * Boolean parsing for NEXT_PUBLIC_* feature flags.
 *
 * Treats a missing value as enabled (true) so that production deploys do not
 * silently lose features when an env var is forgotten on a new environment.
 * Only the explicit opt-out strings ("0" / "false" / "off") disable the flag.
 */
export function isEnabled(value: string | undefined): boolean {
  return value !== '0' && value !== 'false' && value !== 'off';
}
