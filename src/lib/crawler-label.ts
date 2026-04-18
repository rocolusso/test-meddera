/** Substrings (lowercase) matched in order — put more specific tokens before generic ones. */
const KNOWN_CRAWLERS: readonly { readonly needle: string; readonly label: string }[] = [
  { needle: 'google-inspectiontool', label: 'Google-InspectionTool' },
  { needle: 'google-extended', label: 'Google-Extended' },
  { needle: 'googleother', label: 'GoogleOther' },
  { needle: 'storebot-google', label: 'Storebot-Google' },
  { needle: 'adsbot-google', label: 'AdsBot-Google' },
  { needle: 'mediapartners-google', label: 'Mediapartners-Google' },
  { needle: 'googlebot', label: 'Googlebot' },
  { needle: 'bingpreview', label: 'BingPreview' },
  { needle: 'bingbot', label: 'Bingbot' },
  { needle: 'duckduckbot', label: 'DuckDuckBot' },
  { needle: 'baiduspider', label: 'Baiduspider' },
  { needle: 'yandexbot', label: 'YandexBot' },
  { needle: 'yandeximages', label: 'YandexImages' },
  { needle: 'facebookexternalhit', label: 'facebookexternalhit' },
  { needle: 'facebot', label: 'Facebot' },
  { needle: 'twitterbot', label: 'Twitterbot' },
  { needle: 'linkedinbot', label: 'LinkedInBot' },
  { needle: 'slackbot', label: 'Slackbot' },
  { needle: 'applebot', label: 'Applebot' },
  { needle: 'chatgpt-user', label: 'ChatGPT-User' },
  { needle: 'gptbot', label: 'GPTBot' },
  { needle: 'claude-web', label: 'Claude-Web' },
  { needle: 'anthropic-ai', label: 'anthropic-ai' },
  { needle: 'perplexitybot', label: 'PerplexityBot' },
  { needle: 'bytespider', label: 'Bytespider' },
  { needle: 'amazonbot', label: 'Amazonbot' },
  { needle: 'ahrefsbot', label: 'AhrefsBot' },
  { needle: 'semrushbot', label: 'SemrushBot' },
  { needle: 'dotbot', label: 'DotBot' },
  { needle: 'mj12bot', label: 'MJ12bot' },
  { needle: 'petalbot', label: 'PetalBot' },
  { needle: 'slurp', label: 'Slurp' },
  { needle: 'ia_archiver', label: 'ia_archiver' },
];

/**
 * Short label for known crawlers (substring match on User-Agent). Empty if no match — typical for human browsers.
 */
export function getCrawlerLabel(userAgent: string | null): string {
  if (userAgent == null || userAgent.trim() === '') {
    return '';
  }
  const u = userAgent.toLowerCase();
  for (const { needle, label } of KNOWN_CRAWLERS) {
    if (u.includes(needle)) {
      return label;
    }
  }
  return '';
}
