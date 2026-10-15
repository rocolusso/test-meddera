import { ID, SITE_ORIGIN, type Locale } from '@/lib/schema/constants';
import { pageGraph, type Crumb } from '@/lib/schema/graph';
import type { GraphNode } from '@/lib/schema/entities';

export type WebPageJsonLdInput = {
  pageUrl: string;
  name: string;
  description: string;
  inLanguage: 'ru-MD' | 'ro-MD';
  /** Use CollectionPage for listings (e.g. blog index). */
  pageType?: 'WebPage' | 'CollectionPage';
  breadcrumbItems?: { name: string; item: string }[];
  /** Home pages state who founded the clinic. */
  founder?: boolean;
  /** Blog listings are part of the Blog entity. */
  includeBlog?: boolean;
  mainEntityId?: string;
  extra?: GraphNode[];
};

export function localeOfInLanguage(l: 'ru-MD' | 'ro-MD'): Locale {
  return l === 'ro-MD' ? 'ro' : 'ru';
}

export function toCrumbs(items: { name: string; item: string }[] | undefined, fallback: Crumb): Crumb[] {
  return items?.length ? items.map((b) => ({ name: b.name, url: b.item })) : [fallback];
}

/** WebPage (or CollectionPage) plus the shared site entities and breadcrumbs. */
export function webPageJsonLd(o: WebPageJsonLdInput) {
  const locale = localeOfInLanguage(o.inLanguage);
  return pageGraph({
    locale,
    url: o.pageUrl,
    name: o.name,
    description: o.description,
    types: [o.pageType ?? 'WebPage'],
    breadcrumbs: toCrumbs(o.breadcrumbItems, { name: o.name, url: o.pageUrl }),
    founder: o.founder,
    includeBlog: o.includeBlog,
    mainEntityId: o.mainEntityId,
    extra: o.extra,
  });
}

export { ID, SITE_ORIGIN };
