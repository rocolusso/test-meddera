const SUSPICIOUS_SUBSTRINGS = [
  'curl/',
  'curl ',
  'wget',
  'python-requests',
  'aiohttp',
  'go-http-client',
  'libwww',
  'httpclient',
  'scrapy',
  'java/',
  'okhttp',
];

/** Block obvious scripted clients on protected JSON APIs (not used for HTML pages). */
export function isSuspiciousUserAgent(userAgent: string | null): boolean {
  if (userAgent == null || userAgent.trim() === '') {
    return true;
  }
  const ua = userAgent.toLowerCase();
  return SUSPICIOUS_SUBSTRINGS.some((s) => ua.includes(s));
}

/** Heuristic for scoring: long enough UA and not a blocked automation signature. */
export function isLikelyHumanBrowserUserAgent(userAgent: string | null): boolean {
  if (!userAgent || userAgent.trim().length < 10) {
    return false;
  }
  return !isSuspiciousUserAgent(userAgent);
}
