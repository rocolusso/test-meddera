const SITE = 'https://meddera.md';

export type WebPageJsonLdInput = {
  pageUrl: string;
  name: string;
  description: string;
  inLanguage: 'ru-MD' | 'ro-MD';
  /** Use CollectionPage for listings (e.g. blog index). */
  pageType?: 'WebPage' | 'CollectionPage';
  breadcrumbItems?: { name: string; item: string }[];
};

/** WebPage (or CollectionPage) + optional BreadcrumbList, aligned with contacts-page JSON-LD style. */
export function webPageJsonLd(o: WebPageJsonLdInput) {
  const webpageId = `${o.pageUrl}#webpage`;
  const type = o.pageType ?? 'WebPage';

  const graph: Record<string, unknown>[] = [
    {
      '@type': type,
      '@id': webpageId,
      url: o.pageUrl,
      name: o.name,
      description: o.description,
      inLanguage: o.inLanguage,
      isPartOf: {
        '@type': 'WebSite',
        url: SITE,
        name: 'Meddera',
      },
    },
  ];

  if (o.breadcrumbItems?.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: o.breadcrumbItems.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.item,
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
