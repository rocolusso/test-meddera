import { isCtaKey } from '@/lib/cta/keys';
import { ctaForCluster, ctaForPathname, ctaForPost, type CtaEntry } from '@/lib/cta/registry';

export { LIPS_LEAD_TITLE, lipsLeadTitle } from '@/lib/cta/lips';

type PostLike = { id: string; kind: string; clusterId: string | null };

/** Finds a blog post by the slug of its URL (RU or RO). Passed in, so this file stays free of the blog data. */
export type PostLookup = (slug: string) => PostLike | undefined;

function pathnameOf(raw: string): string {
  const value = raw.trim();
  if (value.startsWith('/')) return value.split(/[?#]/)[0];
  try {
    return new URL(value).pathname;
  } catch {
    return '';
  }
}

/**
 * Entry of the page a form was sent from, by its URL: a service page, an article or a hub of the blog.
 * null for every other page (home, contacts, search, lists, unknown posts).
 */
export function ctaEntryForPageUrl(rawUrl: string, findPost: PostLookup): CtaEntry | null {
  const path = pathnameOf(rawUrl);
  if (!path) return null;

  const service = ctaForPathname(path);
  if (service) return service;

  const match = /^(?:\/ro)?\/blog\/([^/]+)\/?$/.exec(path);
  if (!match) return null;
  let slug = match[1];
  try {
    slug = decodeURIComponent(slug);
  } catch {
    // keep the raw segment
  }
  const post = findPost(slug);
  if (!post) return null;
  return post.kind === 'hub' ? ctaForCluster(post.clusterId) : ctaForPost(post);
}

/**
 * Is the lead from the lip enlargement topic? Yes when the quiz was opened with the lips procedure
 * (a card, a teaser), or, without a procedure of its own (bottom panel, floating button), when the
 * page it was sent from is a lips service page, the lips hub or an article of that rubric.
 * The URL comes from the browser and only picks a label for the manager, nothing else depends on it.
 */
export function isLipsLead(body: Record<string, unknown>, formPageUrl: string, findPost: PostLookup): boolean {
  if (isCtaKey(body.procedure)) return body.procedure === 'lips';
  return ctaEntryForPageUrl(formPageUrl, findPost)?.key === 'lips';
}
