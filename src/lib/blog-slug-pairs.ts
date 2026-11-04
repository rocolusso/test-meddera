import { getAllPosts } from '@/blog-data/registry';
import type { BlogSlugPairs } from '@/lib/locale-switch';

/**
 * RU/RO slug pairs of every blog post, for the language switch in the header.
 * Built on the server and passed down as a prop, so the client bundle carries only these pairs
 * (~2 KB) instead of the whole blog registry with titles and descriptions.
 */
export function getBlogSlugPairs(): BlogSlugPairs {
  return getAllPosts()
    .filter((p) => p.slugRu && p.slugRo)
    .map((p) => [p.slugRu, p.slugRo] as const);
}
