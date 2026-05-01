/**
 * Treat unset env as "enabled"; explicit `0` / `false` / `off` disables.
 */
export function isEnabled(value: string | undefined): boolean {
  return value !== '0' && value !== 'false' && value !== 'off';
}
