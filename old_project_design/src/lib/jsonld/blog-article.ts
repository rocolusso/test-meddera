const SITE = 'https://meddera.md';
const PHYSICIAN_ID = `${SITE}/#physician`;
const CLINIC_ID = `${SITE}/#clinic`;

export type BlogArticleJsonLdInput = {
  pageUrl: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  inLanguage: 'ru-MD' | 'ro-MD';
  breadcrumbItems: { name: string; item: string }[];
};

export function blogArticleJsonLd(o: BlogArticleJsonLdInput) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${o.pageUrl}#article`,
        headline: o.headline,
        description: o.description,
        datePublished: o.datePublished,
        dateModified: o.dateModified,
        inLanguage: o.inLanguage,
        author: {
          '@type': 'Person',
          '@id': PHYSICIAN_ID,
          name: 'Ecaterina Pîntea',
        },
        publisher: {
          '@type': 'MedicalClinic',
          '@id': CLINIC_ID,
          name: 'Meddera Beauty Clinic',
          url: SITE,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': o.pageUrl,
        },
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
