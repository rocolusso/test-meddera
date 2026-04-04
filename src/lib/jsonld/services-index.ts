import { servicesLinksRo, servicesLinksRu } from '@/lib/db-content';

const SITE = 'https://meddera.md';

export type ServicesIndexJsonLdInput = {
  pageUrl: string;
  locale: 'ru' | 'ro';
  pageName: string;
  description: string;
  breadcrumbItems: { name: string; item: string }[];
};

/**
 * WebPage + ItemList (каталог услуг) + BreadcrumbList.
 */
export function servicesIndexJsonLd(o: ServicesIndexJsonLdInput) {
  const inLanguage = o.locale === 'ro' ? 'ro-MD' : 'ru-MD';
  const items = o.locale === 'ro' ? servicesLinksRo : servicesLinksRu;
  const listId = `${o.pageUrl}#itemlist`;
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
        mainEntity: { '@id': listId },
      },
      {
        '@type': 'ItemList',
        '@id': listId,
        name: o.pageName,
        numberOfItems: items.length,
        itemListElement: items.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.title,
          item: `${SITE}${s.url}`,
        })),
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
