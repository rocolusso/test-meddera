/**
 * Cheap perimeter filter for automated probes (WordPress, PHP, env leaks).
 * Does not replace WAF; avoids matching real app routes under /services/, /blog/, etc.
 */
export function isScannerProbePathname(pathname: string): boolean {
  const lower = pathname.toLowerCase();

  if (lower.endsWith('.php')) {
    return true;
  }
  if (lower.includes('/wp-admin') || lower.includes('wp-login')) {
    return true;
  }
  if (lower.includes('/wp-content') || lower.includes('/wp-includes')) {
    return true;
  }
  if (lower.includes('xmlrpc.php')) {
    return true;
  }
  if (lower === '/.env' || lower.endsWith('/.env')) {
    return true;
  }
  if (lower.includes('phpinfo')) {
    return true;
  }
  if (lower.includes('/vendor/phpunit')) {
    return true;
  }
  if (lower.includes('/administrator')) {
    return true;
  }

  return false;
}
