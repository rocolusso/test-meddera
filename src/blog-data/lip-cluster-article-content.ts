/** Structured copy for lip cluster articles (informational; not personal medical advice). */

export type ArticleSection = { h2: string; paragraphs: string[] };

export type LipClusterArticleCopy = {
  sectionsRu: ArticleSection[];
  sectionsRo: ArticleSection[];
};

export const LIP_CLUSTER_ARTICLE_CONTENT: Record<string, LipClusterArticleCopy> = {
};
