import type { BlogLocale } from '@/blog-data/types';

/**
 * Text blocks may contain inline link tokens: [[article-id|anchor]] or [[svc:service-slug|anchor]].
 * They are resolved by renderInline in inline-links.tsx; an unknown target renders as plain text.
 */
export type HubSection = { h2: string; paragraphs: string[] };

export type HubGroupText = { h3: string; intro?: string };

/** One thematic group of articles. Every article of the rubric belongs to exactly one group. */
export type HubGroup = {
  ids: string[];
  ru: HubGroupText;
  ro: HubGroupText;
};

export type HubService = { slug: string; ru: string; ro: string };

export type HubLocaleText = {
  /** Breadcrumb tail, kept as before. */
  crumb: string;
  /** H1, kept as before. */
  h1: string;
  intro: string[];
  sections: HubSection[];
  listTitle: string;
  ctaTitle: string;
  ctaText: string;
  eeatText: string;
};

export type HubContent = {
  clusterId: string;
  hubId: string;
  ru: HubLocaleText;
  ro: HubLocaleText;
  groups: HubGroup[];
  services: HubService[];
};

export type { BlogLocale };
