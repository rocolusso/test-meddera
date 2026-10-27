import { BLOG_REWRITES } from '@/blog-data/rewrites';
import { BIOREVITALIZATION_ARTICLE_CONTENT } from '@/blog-data/biorevitalization-article-content';
import { BOTOX_ARTICLE_CONTENT } from '@/blog-data/botox-article-content';
import { DERMATOLOGIST_ARTICLE_CONTENT } from '@/blog-data/dermatologist-article-content';
import { FILLERS_ARTICLE_CONTENT } from '@/blog-data/fillers-article-content';
import { HUB_CONTENT } from '@/blog-data/hubs';
import { LIP_CLUSTER_ARTICLE_CONTENT } from '@/blog-data/lip-cluster-article-content';
import { LIPS_ARTICLE_CONTENT } from '@/blog-data/lips-article-content';
import { MESOTHERAPY_FACE_ARTICLE_CONTENT } from '@/blog-data/mesotherapy-face-article-content';
import { stripInlineLinks } from '@/blog-data/inline-links';
import type { BlogLocale, BlogPost } from '@/blog-data/types';

import type { SearchBlock } from './types';

type Sections = { h2: string; paragraphs: string[] }[];
type Copy = { sectionsRu: Sections; sectionsRo: Sections };

/**
 * Same source and same priority as `renderBlogPostBody`:
 * a rewrite wins over the older copy with the same article id.
 */
function resolveArticleCopy(post: BlogPost): Copy | undefined {
  const rewrite = BLOG_REWRITES[post.id];
  switch (post.bodyKey) {
    case 'lip-cluster-article':
      return rewrite ?? LIPS_ARTICLE_CONTENT[post.id] ?? LIP_CLUSTER_ARTICLE_CONTENT[post.id];
    case 'dermatologist-article':
      return rewrite ?? DERMATOLOGIST_ARTICLE_CONTENT[post.id];
    case 'botox-article':
      return rewrite ?? BOTOX_ARTICLE_CONTENT[post.id];
    case 'mesotherapy-face-article':
      return rewrite ?? MESOTHERAPY_FACE_ARTICLE_CONTENT[post.id];
    case 'biorevitalization-article':
      return rewrite ?? BIOREVITALIZATION_ARTICLE_CONTENT[post.id];
    case 'fillers-article':
      return rewrite ?? FILLERS_ARTICLE_CONTENT[post.id];
    default:
      return undefined;
  }
}

function toBlocks(sections: Sections): SearchBlock[] {
  const blocks: SearchBlock[] = [];
  for (const section of sections) {
    if (section.h2) blocks.push({ kind: 'h2', text: stripInlineLinks(section.h2) });
    for (const p of section.paragraphs) blocks.push({ kind: 'p', text: stripInlineLinks(p) });
  }
  return blocks;
}

/** Plain-text blocks of a blog post, as the reader sees them on the page. */
export function getPostBlocks(post: BlogPost, locale: BlogLocale): SearchBlock[] {
  if (post.kind === 'hub') {
    const hub = post.clusterId ? HUB_CONTENT[post.clusterId] : undefined;
    if (!hub) return [];
    const text = locale === 'ru' ? hub.ru : hub.ro;
    const blocks: SearchBlock[] = text.intro.map((p) => ({ kind: 'p' as const, text: stripInlineLinks(p) }));
    blocks.push(...toBlocks(text.sections));
    // Thematic groups of the article list: their headings and intros are visible text of the hub page.
    for (const group of hub.groups) {
      const g = locale === 'ru' ? group.ru : group.ro;
      blocks.push({ kind: 'h2', text: stripInlineLinks(g.h3) });
      if (g.intro) blocks.push({ kind: 'p', text: stripInlineLinks(g.intro) });
    }
    return blocks;
  }
  const copy = resolveArticleCopy(post);
  if (!copy) return [];
  return toBlocks(locale === 'ru' ? copy.sectionsRu : copy.sectionsRo);
}

/** True when the article has body text that the page renders (used by the verify script). */
export function hasPostText(post: BlogPost): boolean {
  return getPostBlocks(post, 'ru').length > 0 && getPostBlocks(post, 'ro').length > 0;
}
