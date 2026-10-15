import {
  RECEPTION_WORK_END,
  RECEPTION_WORK_START,
  isReceptionWeekday,
} from '@/lib/contact-reception-schedule';

export type Locale = 'ru' | 'ro';

export const SITE_ORIGIN = 'https://meddera.md';

/** Stable entity ids. Never change them: they are referenced across every page's graph. */
export const ID = {
  website: `${SITE_ORIGIN}/#website`,
  clinic: `${SITE_ORIGIN}/#clinic`,
  physician: `${SITE_ORIGIN}/#physician`,
} as const;

export const PHONE = '+37368550030';

export const CLINIC_NAME = 'Meddera Beauty Clinic';

/** Business name as it appears in Google Business Profile (kept as alternate name only). */
export const CLINIC_GMB_NAME = 'Дерматолог Бельцы Beauty Clinic';

export const ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: 'Strada Ștefan cel Mare 13',
  addressLocality: 'Bălți',
  postalCode: 'MD-3100',
  addressCountry: 'MD',
};

export const GEO = {
  '@type': 'GeoCoordinates' as const,
  latitude: 47.7652934,
  longitude: 27.9342788,
};

export const MAPS_URL = 'https://maps.app.goo.gl/HMQKEyKybzzWBd1w7';

export const SAME_AS_CLINIC = [
  'https://www.instagram.com/meddera.md/',
  'https://www.facebook.com/p/Meddera-Beauty-Balti-61572519807548/',
  MAPS_URL,
];

export const SAME_AS_PHYSICIAN = ['https://www.instagram.com/ecaterina_dermatolog.balti/'];

export const IMAGES = {
  clinic: `${SITE_ORIGIN}/assets/img/img_contacts.jpg`,
  physician: `${SITE_ORIGIN}/assets/img/about_2k.jpg`,
  logo: `${SITE_ORIGIN}/assets/img/pintea.png`,
  ogDefault: `${SITE_ORIGIN}/assets/img/baner5.jpg`,
} as const;

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;

const hh = (h: number) => `${String(h).padStart(2, '0')}:00`;

/** Reception hours derived from the single source of truth edited by the site owner. */
export function openingHoursSpecification() {
  const days = DAY_NAMES.filter((_, dow) => isReceptionWeekday(dow));
  return [
    {
      '@type': 'OpeningHoursSpecification' as const,
      dayOfWeek: days,
      opens: hh(RECEPTION_WORK_START),
      closes: hh(RECEPTION_WORK_END),
    },
  ];
}

export function inLanguageOf(locale: Locale): 'ru-MD' | 'ro-MD' {
  return locale === 'ro' ? 'ro-MD' : 'ru-MD';
}

export function aboutUrl(locale: Locale): string {
  return locale === 'ro' ? `${SITE_ORIGIN}/ro/about` : `${SITE_ORIGIN}/about`;
}

export function homeUrl(locale: Locale): string {
  return locale === 'ro' ? `${SITE_ORIGIN}/ro` : `${SITE_ORIGIN}/`;
}
