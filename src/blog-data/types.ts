export type BlogLocale = 'ru' | 'ro';

export type BlogPostKind = 'hub' | 'article';

export type BlogClusterId =
  | 'lips'
  | 'botox'
  | 'dermatologist'
  | 'consultation'
  | 'mesotherapy-face'
  | 'mesotherapy-hair'
  | 'biorevitalization'
  | 'fillers'
  | 'facial-cleaning'
  | 'peeling'
  | 'dermapen'
  | 'anti-acne'
  | 'anti-pigmentation'
  | 'carboxytherapy'
  | 'alginate-mask'
  | 'lipolytics';

/** Reserved URL segment; never use slugRu/slugRo === "page". */
export type BlogBodyKey =
  | 'lip-augmentation-hub'
  | 'lip-cluster-article'
  | 'botox-hub'
  | 'botox-article'
  | 'dermatologist-hub'
  | 'dermatologist-article'
  | 'consultation-hub'
  | 'consultation-article'
  | 'mesotherapy-face-hub'
  | 'mesotherapy-face-article'
  | 'mesotherapy-hair-hub'
  | 'mesotherapy-hair-article'
  | 'biorevitalization-hub'
  | 'biorevitalization-article'
  | 'fillers-hub'
  | 'fillers-article'
  | 'facial-cleaning-hub'
  | 'facial-cleaning-article'
  | 'peeling-hub'
  | 'peeling-article'
  | 'dermapen-hub'
  | 'dermapen-article'
  | 'anti-acne-hub'
  | 'anti-acne-article'
  | 'anti-pigmentation-hub'
  | 'anti-pigmentation-article'
  | 'carboxytherapy-hub'
  | 'carboxytherapy-article'
  | 'alginate-mask-hub'
  | 'alginate-mask-article'
  | 'lipolytics-hub'
  | 'lipolytics-article';

export type BlogPost = {
  id: string;
  kind: BlogPostKind;
  clusterId: BlogClusterId | null;
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
  authorByline?: {
    ru: string;
    ro: string;
  };
  medicalReview?: {
    ru: string;
    ro: string;
  };
  relatedArticles?: string[];
};
