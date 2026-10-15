import {
  ID,
  inLanguageOf,
  type Locale,
} from '@/lib/schema/constants';
import {
  blogNode,
  clinicNode,
  physicianNode,
  websiteNode,
  type GraphNode,
  type PhysicianTier,
} from '@/lib/schema/entities';

export type Crumb = { name: string; url: string };

export type FaqItem = { question: string; answer: string };

export type PageSpec = {
  locale: Locale;
  /** Absolute canonical URL of the page. */
  url: string;
  name: string;
  description: string;
  /** schema.org WebPage subtypes, e.g. ['WebPage', 'ContactPage']. */
  types?: string[];
  breadcrumbs: Crumb[];
  /** Compact physician on every page; full only on the About page. */
  physician?: PhysicianTier;
  /** Founder link: only where the page says who founded the clinic. */
  founder?: boolean;
  /** What the page is about; defaults to the clinic. */
  about?: 'clinic' | 'physician';
  mainEntityId?: string;
  primaryImage?: string;
  dateModified?: string;
  includeBlog?: boolean;
  /** Extra nodes: Service, FAQPage, ItemList, Article ... */
  extra?: GraphNode[];
};

export const pageId = (url: string) => `${url}#webpage`;
export const breadcrumbId = (url: string) => `${url}#breadcrumb`;

export function breadcrumbNode(url: string, crumbs: Crumb[]): GraphNode {
  return {
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId(url),
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function itemListNode(url: string, suffix: string, name: string, items: { name: string; url: string }[]): GraphNode {
  return {
    '@type': 'ItemList',
    '@id': `${url}#${suffix}`,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  };
}

/** FAQPage. The questions and answers must be word-for-word the visible text of the page. */
export function faqNode(url: string, faq: FaqItem[]): GraphNode {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntityOfPage: { '@id': pageId(url) },
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/** Service provided by the clinic. No prices or online channels: neither is shown as an offer. */
export function serviceNode(o: {
  url: string;
  name: string;
  description: string;
  serviceType: string;
  image?: string;
}): GraphNode {
  return {
    '@type': 'Service',
    '@id': `${o.url}#service`,
    name: o.name,
    description: o.description,
    serviceType: o.serviceType,
    url: o.url,
    provider: { '@id': ID.clinic },
    areaServed: { '@type': 'City', name: 'Bălți' },
    mainEntityOfPage: { '@id': pageId(o.url) },
    ...(o.image ? { image: o.image } : {}),
  };
}

export function pageGraph(spec: PageSpec) {
  const types = spec.types ?? ['WebPage'];
  const aboutId = spec.about === 'physician' ? ID.physician : ID.clinic;
  const webPage: GraphNode = {
    '@type': types.length === 1 ? types[0] : types,
    '@id': pageId(spec.url),
    url: spec.url,
    name: spec.name,
    description: spec.description,
    inLanguage: inLanguageOf(spec.locale),
    isPartOf: { '@id': ID.website },
    about: { '@id': aboutId },
    breadcrumb: { '@id': breadcrumbId(spec.url) },
    ...(spec.primaryImage
      ? { primaryImageOfPage: { '@type': 'ImageObject', url: spec.primaryImage } }
      : {}),
    ...(spec.dateModified ? { dateModified: spec.dateModified } : {}),
    ...(spec.mainEntityId ? { mainEntity: { '@id': spec.mainEntityId } } : {}),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      websiteNode(),
      clinicNode(spec.locale, { founder: spec.founder }),
      physicianNode(spec.locale, spec.physician ?? 'compact'),
      ...(spec.includeBlog ? [blogNode(spec.locale)] : []),
      webPage,
      breadcrumbNode(spec.url, spec.breadcrumbs),
      ...(spec.extra ?? []),
    ],
  };
}

/** Site entities only (WebSite, clinic, physician) for pages that bring their own page-level markup. */
export function siteGraph(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteNode(), clinicNode(locale), physicianNode(locale)],
  };
}
