import { articleAnchor } from '@/blog-data/inline-links';
import { blogPathRo, blogPathRu, getPostsForSitemap } from '@/blog-data/registry';

import { normalizeText } from './normalize';
import { getSearchPages } from './pages';
import { getPostBlocks } from './post-text';
import type { SearchBlock, SearchEntry, SearchEntryType, SearchIndex, SearchLocale } from './types';

function makeEntry(
  type: SearchEntryType,
  url: string,
  title: string,
  description: string,
  blocks: SearchBlock[],
  altTitle = '',
): SearchEntry {
  const headings = blocks.filter((b) => b.kind === 'h2').map((b) => b.text);
  const body = blocks.filter((b) => b.kind === 'p').map((b) => b.text);
  return {
    type,
    url,
    title,
    description,
    blocks,
    nTitle: ` ${normalizeText(altTitle && altTitle !== title ? `${title} ${altTitle}` : title)}`,
    nDescription: ` ${normalizeText(description)}`,
    nHeadings: ` ${normalizeText(headings.join(' '))}`,
    nBody: ` ${normalizeText(body.join(' '))}`,
  };
}

function buildIndex(locale: SearchLocale): SearchIndex {
  const entries: SearchEntry[] = [];

  for (const page of getSearchPages(locale)) {
    entries.push(makeEntry('page', page.url, page.title, page.description, []));
  }

  for (const post of getPostsForSitemap()) {
    const url = locale === 'ru' ? blogPathRu(post.slugRu) : blogPathRo(post.slugRo);
    const description = locale === 'ru' ? post.descriptionRu : post.descriptionRo;
    entries.push(
      makeEntry(
        post.kind === 'hub' ? 'hub' : 'article',
        url,
        articleAnchor(post, locale),
        description,
        getPostBlocks(post, locale),
        // The SEO title can differ from the H1 (breadcrumbs and tab title use it), so it is searchable too.
        (locale === 'ru' ? post.titleRu : post.titleRo).replace(/\s*\|\s*Meddera.*$/i, ''),
      ),
    );
  }

  return { locale, entries };
}

const cache = new Map<SearchLocale, SearchIndex>();

/** Built once per server instance and locale; the content is static between deploys. */
export function getSearchIndex(locale: SearchLocale): SearchIndex {
  let index = cache.get(locale);
  if (!index) {
    index = buildIndex(locale);
    cache.set(locale, index);
  }
  return index;
}
