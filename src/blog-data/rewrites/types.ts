import type { ArticleSection } from '@/blog-data/types-article-shared';

export type ArticleRewrite = {
  sectionsRu: ArticleSection[];
  sectionsRo: ArticleSection[];
};

export type ArticleRewrites = Record<string, ArticleRewrite>;
