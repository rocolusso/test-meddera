const SITE = 'https://meddera.md';

export type AboutPageJsonLdInput = {
  pageUrl: string;
  locale: 'ru' | 'ro';
  /** Page title (visible / meta) */
  pageName: string;
  description: string;
  imageUrl: string;
  physicianName: string;
  jobTitle: string;
  breadcrumbItems: { name: string; item: string }[];
};

/**
 * Schema.org для страницы «Обо мне»: WebPage + Physician + BreadcrumbList.
 */
export function aboutPageJsonLd(o: AboutPageJsonLdInput) {
  const inLanguage = o.locale === 'ro' ? 'ro-MD' : 'ru-MD';
  const physicianId = `${o.pageUrl}#physician`;
  const webpageId = `${o.pageUrl}#webpage`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: o.pageUrl,
        name: o.pageName,
        description: o.description,
        inLanguage,
        isPartOf: {
          '@type': 'WebSite',
          url: SITE,
          name: 'Meddera',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: o.imageUrl,
        },
        mainEntity: { '@id': physicianId },
      },
      {
        '@type': 'Physician',
        '@id': physicianId,
        name: o.physicianName,
        image: o.imageUrl,
        url: o.pageUrl,
        jobTitle: o.jobTitle,
        worksFor: {
          '@type': 'MedicalClinic',
          '@id': `${SITE}/#clinic`,
          name: 'Meddera Beauty Clinic',
          url: SITE,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Ștefan cel Mare 13',
            addressLocality: o.locale === 'ro' ? 'Bălți' : 'Бельцы',
            addressCountry: 'MD',
          },
        },
        medicalSpecialty: ['Dermatology', 'Cosmetic dermatology'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: o.breadcrumbItems.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.item,
        })),
      },
    ],
  };
}
