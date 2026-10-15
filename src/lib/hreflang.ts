import { SITE_ORIGIN } from '@/lib/schema/constants';

export { SITE_ORIGIN };

/** Absolute URL of the Russian version for a path such as "/services/x" (home is "/"). */
const ruUrl = (ruPath: string) => (ruPath === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${ruPath}`);

/** Absolute URL of the Romanian version: same path under /ro (home is /ro). */
const roUrl = (ruPath: string) => (ruPath === '/' ? `${SITE_ORIGIN}/ro` : `${SITE_ORIGIN}/ro${ruPath}`);

/**
 * Canonical + reciprocal hreflang for a page that exists in both languages with the same slug.
 * `ruPath` is the Russian path, `current` is the language of the page being rendered.
 * x-default points to the Russian version, as everywhere else on the site.
 */
export function bilingualAlternates(ruPath: string, current: 'ru' | 'ro') {
  const ru = ruUrl(ruPath);
  const ro = roUrl(ruPath);
  return {
    canonical: current === 'ru' ? ru : ro,
    languages: {
      ru,
      ro,
      'x-default': ru,
    },
  };
}
