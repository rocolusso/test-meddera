export type BlogLocale = 'ru' | 'ro';

export type BlogPostKind = 'hub' | 'article';

/** Reserved URL segment; never use slugRu/slugRo === "page". */
export type BlogBodyKey = 'lip-augmentation-hub' | 'lip-cluster-article';

export type BlogPost = {
  id: string;
  kind: BlogPostKind;
  clusterId: string | null;
  slugRu: string;
  slugRo: string;
  publishedAt: string;
  dateModified: string;
  titleRu: string;
  titleRo: string;
  descriptionRu: string;
  descriptionRo: string;
  excerptRu: string;
  excerptRo: string;
  bodyKey: BlogBodyKey;
};
