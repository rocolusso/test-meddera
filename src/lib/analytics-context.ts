/**
 * Pure helpers that describe "where the visitor is" and "how they arrived"
 * for GA4 events. No imports on purpose: scripts/verify-ga4.mjs loads this
 * file directly in Node.
 */

export type PageType =
  | 'home'
  | 'service'
  | 'services_list'
  | 'article'
  | 'hub'
  | 'blog_list'
  | 'contacts'
  | 'search'
  | 'ads'
  | 'other';

export type PageContext = {
  page_path: string;
  page_type: PageType;
  content_slug: string;
  lang: 'ru' | 'ro';
};

/**
 * Slugs of the blog hubs (RU and RO). Kept as an explicit list because one hub
 * ("uvelichenie-gub-beltsy") has no "-hub" suffix. scripts/verify-ga4.mjs compares
 * this list with the registry, so a new hub that is not added here fails the check.
 */
export const BLOG_HUB_SLUGS: readonly string[] = [
  'dermatolog-beltsy-hub',
  'dermatolog-balti-hub',
  'botoks-beltsy-hub',
  'botox-balti-hub',
  'mezoterapiya-lica-beltsy-hub',
  'mezoterapie-fata-balti-hub',
  'biorevitalizaciya-beltsy-hub',
  'biorevitalizare-balti-hub',
  'konturnaya-plastika-beltsy-hub',
  'conturare-faciala-balti-hub',
  'uvelichenie-gub-beltsy',
  'marire-buzelor-balti',
];

function decodeSegment(segment: string): string {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

/** Classifies a pathname such as "/ro/blog/botox-balti-hub" or "/services/uvelychenye-gub-…". */
export function getPageContext(pathname: string): PageContext {
  const clean = (pathname || '/').split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  const lang: 'ru' | 'ro' = clean === '/ro' || clean.startsWith('/ro/') ? 'ro' : 'ru';
  const rest = lang === 'ro' ? clean.slice(3) || '/' : clean;
  const segments = rest.split('/').filter(Boolean).map(decodeSegment);
  const [first, second] = segments;

  let page_type: PageType = 'other';
  let content_slug = '';

  if (segments.length === 0) {
    page_type = 'home';
  } else if (first === 'services') {
    if (second) {
      page_type = 'service';
      content_slug = second;
    } else {
      page_type = 'services_list';
    }
  } else if (first === 'blog') {
    if (second && second !== 'page') {
      page_type = BLOG_HUB_SLUGS.includes(second) ? 'hub' : 'article';
      content_slug = second;
    } else {
      page_type = 'blog_list';
    }
  } else if (first === 'contacts') {
    page_type = 'contacts';
  } else if (first === 'search') {
    page_type = 'search';
  } else if (first === 'ads') {
    page_type = 'ads';
    content_slug = second ?? '';
  }

  return { page_path: clean, page_type, content_slug: content_slug.slice(0, 100), lang };
}

export type FirstTouch = { first_src: string; first_med: string; first_cmp: string; first_ref: string };

const SEARCH_ENGINE_HOST = /(^|\.)(google|bing|yandex|duckduckgo|yahoo|ecosia|baidu|ya)\.[a-z.]+$/i;

function stripWww(host: string): string {
  return host.replace(/^www\./, '').toLowerCase();
}

/**
 * First-touch attribution for the session, from the landing URL and
 * document.referrer. Measurement Protocol cannot carry source/medium, so we
 * send them as ordinary event parameters (custom dimensions).
 */
export function parseFirstTouch(search: string, referrer: string, ownHost: string): FirstTouch {
  const params = new URLSearchParams(search || '');
  let refHost = '';
  try {
    refHost = referrer ? stripWww(new URL(referrer).hostname) : '';
  } catch {
    refHost = '';
  }
  const own = stripWww(ownHost || '');
  if (refHost && refHost === own) refHost = '';

  const utmSource = (params.get('utm_source') || '').toLowerCase();
  const utmMedium = (params.get('utm_medium') || '').toLowerCase();
  const utmCampaign = params.get('utm_campaign') || '';

  let src = 'direct';
  let med = 'none';

  if (utmSource) {
    src = utmSource;
    med = utmMedium || 'unknown';
  } else if (params.get('gclid')) {
    src = 'google';
    med = 'cpc';
  } else if (refHost) {
    src = refHost;
    med = SEARCH_ENGINE_HOST.test(refHost) ? 'organic' : 'referral';
  }

  return {
    first_src: src.slice(0, 100),
    first_med: med.slice(0, 100),
    first_cmp: utmCampaign.slice(0, 100),
    first_ref: refHost.slice(0, 100),
  };
}
