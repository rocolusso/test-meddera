import { servicesLinksRo, servicesLinksRu } from '@/lib/db-content';
import { SITE_ORIGIN, type Locale } from '@/lib/schema/constants';
import { itemListNode, pageGraph } from '@/lib/schema/graph';

export type ServicesIndexJsonLdInput = {
  pageUrl: string;
  locale: Locale;
  pageName: string;
  description: string;
  breadcrumbItems: { name: string; item: string }[];
};

/** CollectionPage with an ItemList of every service page. */
export function servicesIndexJsonLd(o: ServicesIndexJsonLdInput) {
  const items = o.locale === 'ro' ? servicesLinksRo : servicesLinksRu;
  const list = itemListNode(
    o.pageUrl,
    'itemlist',
    o.pageName,
    items.map((s) => ({ name: s.title, url: `${SITE_ORIGIN}${s.url}` })),
  );
  return pageGraph({
    locale: o.locale,
    url: o.pageUrl,
    name: o.pageName,
    description: o.description,
    types: ['CollectionPage'],
    breadcrumbs: o.breadcrumbItems.map((b) => ({ name: b.name, url: b.item })),
    mainEntityId: `${o.pageUrl}#itemlist`,
    extra: [list],
  });
}
