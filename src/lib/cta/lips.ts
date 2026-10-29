/**
 * What makes a page a "lip enlargement page", and how a lead from such a page is named in Telegram.
 * Server-side helpers: the blog pages decide whether to show the lips banner, the lead route picks
 * the title of the message.
 */
import type { LeadQuizSource } from '@/lib/cta/keys';
import { ctaForCluster, ctaForPost } from '@/lib/cta/registry';

type PostLike = { id: string; kind: string; clusterId: string | null };

/**
 * A blog post is about lips when its call to action is the lips one: the hub and the articles of the
 * lips rubric, plus articles of other rubrics whose main service is lips (same rule as the cards).
 */
export function isLipsPost(post: PostLike): boolean {
  const entry = post.kind === 'hub' ? ctaForCluster(post.clusterId) : ctaForPost(post);
  return entry.key === 'lips';
}

/** Title of a lead from a lips page, always starting with this text. */
export const LIPS_LEAD_TITLE = 'Форма/ Увеличение Губ / LEAD';

/** Ending of the title by the button the quiz was opened from. The home page banner has none. */
export const LIPS_TITLE_SUFFIX: Partial<Record<LeadQuizSource, string>> = {
  lips_banner: 'baner_cta',
  float_book: 'float_cta',
  dock_book: 'dock_cta',
  article_card: 'card_cta',
  hub_card: 'hub_cta',
  teaser_scroll60: 'teaser_cta',
};

/** `source` comes from the browser: an unknown or missing value gives the plain title. */
export function lipsLeadTitle(source: unknown): string {
  if (typeof source === 'string' && Object.prototype.hasOwnProperty.call(LIPS_TITLE_SUFFIX, source)) {
    return `${LIPS_LEAD_TITLE}/${LIPS_TITLE_SUFFIX[source as LeadQuizSource]}`;
  }
  return LIPS_LEAD_TITLE;
}
