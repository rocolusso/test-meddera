/** Slug word helpers shared by the 404 page (server) and its "did you mean" block (client). */
export const SUGGEST_PREFIX = 5;

const STOP_WORDS = new Set(['services', 'blog', 'page', 'belczah', 'beltsy', 'balti', 'hub', 'dlya']);

/** Meaningful words of a URL path or slug: latin, at least SUGGEST_PREFIX letters, no city or section words. */
export function slugWords(value: string): string[] {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= SUGGEST_PREFIX && !STOP_WORDS.has(w));
}
