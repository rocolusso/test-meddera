import { ID, type Locale } from '@/lib/schema/constants';
import { blogId } from '@/lib/schema/entities';
import { pageGraph, pageId } from '@/lib/schema/graph';

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
  const locale: Locale = o.inLanguage === 'ro-MD' ? 'ro' : 'ru';
  const article = {
    '@type': 'Article',
    '@id': `${o.pageUrl}#article`,
    headline: o.headline,
    description: o.description,
    datePublished: o.datePublished,
    dateModified: o.dateModified,
    inLanguage: o.inLanguage,
    author: { '@id': ID.physician },
    publisher: { '@id': ID.clinic },
    isPartOf: { '@id': blogId(locale) },
    mainEntityOfPage: { '@id': pageId(o.pageUrl) },
  };
  return pageGraph({
    locale,
    url: o.pageUrl,
    name: o.headline,
    description: o.description,
    types: ['WebPage'],
    breadcrumbs: o.breadcrumbItems.map((b) => ({ name: b.name, url: b.item })),
    dateModified: o.dateModified,
    includeBlog: true,
    mainEntityId: `${o.pageUrl}#article`,
    extra: [article],
  });
}
