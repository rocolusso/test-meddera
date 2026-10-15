import { aboutCopy } from '@/lib/about-content';
import {
  ADDRESS,
  CLINIC_GMB_NAME,
  CLINIC_NAME,
  GEO,
  ID,
  IMAGES,
  MAPS_URL,
  PHONE,
  SAME_AS_CLINIC,
  SAME_AS_PHYSICIAN,
  SITE_ORIGIN,
  aboutUrl,
  homeUrl,
  inLanguageOf,
  openingHoursSpecification,
  type Locale,
} from '@/lib/schema/constants';

export type GraphNode = Record<string, unknown>;

export type PhysicianTier = 'compact' | 'full';

const oneLine = (s: string) => s.replace(/\s+/g, ' ').trim();

export function websiteNode(): GraphNode {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: `${SITE_ORIGIN}/`,
    name: 'Meddera',
    alternateName: [CLINIC_NAME],
    inLanguage: ['ru-MD', 'ro-MD'],
    publisher: { '@id': ID.clinic },
  };
}

/**
 * The clinic: only data that is visible on every page (address and phone in the footer,
 * reception hours in the contact block) or on the contacts page.
 */
export function clinicNode(locale: Locale, opts: { founder?: boolean } = {}): GraphNode {
  return {
    '@type': ['MedicalClinic', 'LocalBusiness'],
    '@id': ID.clinic,
    name: CLINIC_NAME,
    alternateName: ['Meddera', CLINIC_GMB_NAME],
    description:
      locale === 'ro'
        ? 'Clinică de dermatologie și cosmetologie în Bălți.'
        : 'Клиника дерматологии и косметологии в Бельцах.',
    url: homeUrl(locale),
    image: IMAGES.clinic,
    logo: IMAGES.logo,
    telephone: PHONE,
    address: ADDRESS,
    geo: GEO,
    hasMap: MAPS_URL,
    medicalSpecialty: 'https://schema.org/Dermatology',
    areaServed: { '@type': 'City', name: 'Bălți' },
    knowsLanguage: ['ru', 'ro'],
    openingHoursSpecification: openingHoursSpecification(),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'reservations',
      areaServed: 'MD',
      availableLanguage: ['Russian', 'Romanian'],
    },
    sameAs: SAME_AS_CLINIC,
    ...(opts.founder ? { founder: { '@id': ID.physician } } : {}),
  };
}

/**
 * The physician. `compact` is used on every page (name, role, link to the clinic).
 * `full` is used only on the About page, where education and specialisation are visible.
 */
export function physicianNode(locale: Locale, tier: PhysicianTier = 'compact'): GraphNode {
  const ro = locale === 'ro';
  const base: GraphNode = {
    '@type': ['Person', 'Physician'],
    '@id': ID.physician,
    name: ro ? 'Ecaterina Pîntea' : 'Екатерина Пынтя',
    alternateName: ro
      ? ['Pîntea Ecaterina', 'Екатерина Пынтя']
      : ['Пынтя Екатерина', 'Ecaterina Pîntea'],
    jobTitle: ro ? 'Medic dermatovenerolog, cosmetolog' : 'Врач-дерматовенеролог, косметолог',
    url: aboutUrl(locale),
    image: IMAGES.physician,
    telephone: PHONE,
    medicalSpecialty: 'https://schema.org/Dermatology',
    worksFor: { '@id': ID.clinic },
  };
  if (tier === 'compact') return base;

  const copy = aboutCopy[locale];
  return {
    ...base,
    knowsAbout: copy.specColumns.flat().map(oneLine),
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'USMF „Nicolae Testemițanu”',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: ro ? 'Medic dermatovenerolog de categoria I' : 'Врач-дерматовенеролог 1 категории',
    },
    sameAs: SAME_AS_PHYSICIAN,
  };
}

export function blogNode(locale: Locale): GraphNode {
  const url = locale === 'ro' ? `${SITE_ORIGIN}/ro/blog` : `${SITE_ORIGIN}/blog`;
  return {
    '@type': 'Blog',
    '@id': `${url}#blog`,
    url,
    name: locale === 'ro' ? 'Blog Meddera' : 'Блог Meddera',
    inLanguage: inLanguageOf(locale),
    publisher: { '@id': ID.clinic },
  };
}

export function blogId(locale: Locale): string {
  return `${locale === 'ro' ? `${SITE_ORIGIN}/ro/blog` : `${SITE_ORIGIN}/blog`}#blog`;
}
