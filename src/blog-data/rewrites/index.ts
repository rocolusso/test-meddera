import { DERMATOLOGIST_A } from '@/blog-data/rewrites/dermatologist-a';
import { DERMATOLOGIST_B } from '@/blog-data/rewrites/dermatologist-b';
import { DERMATOLOGIST_C } from '@/blog-data/rewrites/dermatologist-c';
import { DERMATOLOGIST_D } from '@/blog-data/rewrites/dermatologist-d';
import { BOTOX_A } from '@/blog-data/rewrites/botox-a';
import { BOTOX_B } from '@/blog-data/rewrites/botox-b';
import { BOTOX_C } from '@/blog-data/rewrites/botox-c';
import { BIOREV_A } from '@/blog-data/rewrites/biorev-a';
import { MISC_A } from '@/blog-data/rewrites/misc-a';
import { LIPS_A } from '@/blog-data/rewrites/lips-a';
import { LIPS_B } from '@/blog-data/rewrites/lips-b';
import { DERMATOLOGIST_E } from '@/blog-data/rewrites/dermatologist-e';
import type { ArticleRewrites } from '@/blog-data/rewrites/types';

/** Reworked article bodies. They take precedence over the older copy with the same article id. */
export const BLOG_REWRITES: ArticleRewrites = {
  ...DERMATOLOGIST_A,
  ...DERMATOLOGIST_B,
  ...DERMATOLOGIST_C,
  ...DERMATOLOGIST_D,
  ...DERMATOLOGIST_E,
  ...BOTOX_A,
  ...BOTOX_B,
  ...BOTOX_C,
  ...BIOREV_A,
  ...MISC_A,
  ...LIPS_A,
  ...LIPS_B,
};
