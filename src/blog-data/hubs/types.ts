import type { BlogLocale } from '@/blog-data/types';

/**
 * Text blocks may contain inline link tokens: [[article-id|anchor]] or [[svc:service-slug|anchor]].
 * They are resolved by renderInline in inline-links.tsx; an unknown target renders as plain text.
 */
export interface HubSection { h2: string; paragraphs: string[] }

export interface HubGroupText { h3: string; intro?: string }

/** One thematic group of articles. Every article of the rubric belongs to exactly one group. */
export interface HubGroup {
  ids: string[];
  ru: HubGroupText;
  ro: HubGroupText;
}

export interface HubService { slug: string; ru: string; ro: string }

export interface HubLocaleText {
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
}

export interface HubContent {
  clusterId: string;
  hubId: string;
  ru: HubLocaleText;
  ro: HubLocaleText;
  groups: HubGroup[];
  services: HubService[];
}

export type { BlogLocale };
