import { DERMATOLOGIST_A } from '@/blog-data/rewrites/dermatologist-a';
import { DERMATOLOGIST_B } from '@/blog-data/rewrites/dermatologist-b';
import { DERMATOLOGIST_C } from '@/blog-data/rewrites/dermatologist-c';
import { DERMATOLOGIST_D } from '@/blog-data/rewrites/dermatologist-d';
import { BOTOX_A } from '@/blog-data/rewrites/botox-a';
import { BOTOX_B } from '@/blog-data/rewrites/botox-b';
import { BOTOX_C } from '@/blog-data/rewrites/botox-c';
import { BOTOX_D } from '@/blog-data/rewrites/botox-d';
import { BOTOX_E } from '@/blog-data/rewrites/botox-e';
import { BIOREV_A } from '@/blog-data/rewrites/biorev-a';
import { MISC_A } from '@/blog-data/rewrites/misc-a';
import { LIPS_A } from '@/blog-data/rewrites/lips-a';
import { LIPS_B } from '@/blog-data/rewrites/lips-b';
import { DERMATOLOGIST_E } from '@/blog-data/rewrites/dermatologist-e';
import { DERMATOLOGIST_F } from '@/blog-data/rewrites/derm-f';
import { DERMATOLOGIST_G } from '@/blog-data/rewrites/derm-g';
import { DERMATOLOGIST_H } from '@/blog-data/rewrites/derm-h';
import { BIOREV_B } from '@/blog-data/rewrites/biorev-b';
import { MISC_B } from '@/blog-data/rewrites/misc-b';
import { MISC_C } from '@/blog-data/rewrites/misc-c';
import type { ArticleRewrites } from '@/blog-data/rewrites/types';

/** Reworked article bodies. They take precedence over the older copy with the same article id. */
export const BLOG_REWRITES: ArticleRewrites = {
  ...DERMATOLOGIST_A,
  ...DERMATOLOGIST_B,
  ...DERMATOLOGIST_C,
  ...DERMATOLOGIST_D,
  ...DERMATOLOGIST_E,
  ...DERMATOLOGIST_F,
  ...DERMATOLOGIST_G,
  ...DERMATOLOGIST_H,
  ...BOTOX_A,
  ...BOTOX_B,
  ...BOTOX_C,
  ...BOTOX_D,
  ...BOTOX_E,
  ...BIOREV_A,
  ...MISC_A,
  ...LIPS_A,
  ...LIPS_B,
  ...MISC_C,
  ...MISC_B,
  ...BIOREV_B,
};
