import { DERMATOLOGIST_A } from '@/blog-data/rewrites/dermatologist-a';
import { DERMATOLOGIST_B } from '@/blog-data/rewrites/dermatologist-b';
import { DERMATOLOGIST_C } from '@/blog-data/rewrites/dermatologist-c';
import { DERMATOLOGIST_D } from '@/blog-data/rewrites/dermatologist-d';
import { DERMATOLOGIST_E } from '@/blog-data/rewrites/dermatologist-e';
import type { ArticleRewrites } from '@/blog-data/rewrites/types';

/** Reworked article bodies. They take precedence over the older copy with the same article id. */
export const BLOG_REWRITES: ArticleRewrites = {
  ...DERMATOLOGIST_A,
  ...DERMATOLOGIST_B,
  ...DERMATOLOGIST_C,
  ...DERMATOLOGIST_D,
  ...DERMATOLOGIST_E,
};
