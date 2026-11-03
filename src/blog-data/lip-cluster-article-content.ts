/** Structured copy for lip cluster articles (informational; not personal medical advice). */

export interface ArticleSection { h2: string; paragraphs: string[] }

export interface LipClusterArticleCopy {
  sectionsRu: ArticleSection[];
  sectionsRo: ArticleSection[];
}

export const LIP_CLUSTER_ARTICLE_CONTENT: Record<string, LipClusterArticleCopy> = {
};
