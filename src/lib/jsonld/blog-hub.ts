import { SITE_ORIGIN, type Locale } from '@/lib/schema/constants';
import { blogId } from '@/lib/schema/entities';
import { itemListNode, pageGraph } from '@/lib/schema/graph';

export type BlogHubJsonLdInput = {
  pageUrl: string;
  locale: Locale;
  title: string;
  description: string;
  dateModified: string;
  breadcrumbItems: { name: string; item: string }[];
  /** Articles of the cluster, in display order. */
  articles: { name: string; path: string }[];
};

/**
 * Cluster hub (rubric page): a MedicalWebPage that lists every article of the rubric.
 * Used for every hub except the lip-augmentation hub, which keeps its own generator.
 */
export function blogHubJsonLd(o: BlogHubJsonLdInput) {
  const list = itemListNode(
    o.pageUrl,
    'itemlist',
    o.title,
    o.articles.map((a) => ({ name: a.name, url: `${SITE_ORIGIN}${a.path}` })),
  );
  const graph = pageGraph({
    locale: o.locale,
    url: o.pageUrl,
    name: o.title,
    description: o.description,
    types: ['CollectionPage', 'MedicalWebPage'],
    breadcrumbs: o.breadcrumbItems.map((b) => ({ name: b.name, url: b.item })),
    dateModified: o.dateModified,
    includeBlog: true,
    mainEntityId: `${o.pageUrl}#itemlist`,
    extra: [list],
  });
  // The hub belongs to the blog.
  const wp = graph['@graph'].find((n) => (n as { '@id'?: string })['@id'] === `${o.pageUrl}#webpage`) as Record<string, unknown>;
  wp.isPartOf = [{ '@id': 'https://meddera.md/#website' }, { '@id': blogId(o.locale) }];
  return graph;
}
