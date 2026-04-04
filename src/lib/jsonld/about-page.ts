const SITE = 'https://meddera.md';

/** Same @id as root layout JSON-LD — avoid duplicate Physician/MedicalClinic nodes on /about. */
const GLOBAL_PHYSICIAN_ID = `${SITE}/#physician`;

export type AboutPageJsonLdInput = {
  pageUrl: string;
  locale: 'ru' | 'ro';
  /** Page title (visible / meta) */
  pageName: string;
  description: string;
  imageUrl: string;
  breadcrumbItems: { name: string; item: string }[];
};

/**
 * Schema.org for «Обо мне»: WebPage + BreadcrumbList only.
 * Physician + MedicalClinic live in root layout (@graph) to prevent duplicate @id / validation errors.
 */
export function aboutPageJsonLd(o: AboutPageJsonLdInput) {
  const inLanguage = o.locale === 'ro' ? 'ro-MD' : 'ru-MD';
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
        mainEntity: { '@id': GLOBAL_PHYSICIAN_ID },
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
