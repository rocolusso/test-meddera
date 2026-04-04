const SITE = 'https://meddera.md';

export type ContactsPageJsonLdInput = {
  pageUrl: string;
  locale: 'ru' | 'ro';
  pageName: string;
  description: string;
  breadcrumbItems: { name: string; item: string }[];
};

/** WebPage + ContactPage + BreadcrumbList */
export function contactsPageJsonLd(o: ContactsPageJsonLdInput) {
  const inLanguage = o.locale === 'ro' ? 'ro-MD' : 'ru-MD';
  const webpageId = `${o.pageUrl}#webpage`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['WebPage', 'ContactPage'],
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
