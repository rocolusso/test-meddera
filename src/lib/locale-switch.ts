/**
 * [slugRu, slugRo] for every blog post. Passed in from the server (see lib/blog-slug-pairs.ts):
 * importing the blog registry here would put all post metadata into the client bundle.
 */
export type BlogSlugPairs = readonly (readonly [string, string])[];

function findSlugPair(pairs: BlogSlugPairs, slug: string): readonly [string, string] | undefined {
  return pairs.find(([ru, ro]) => ru === slug || ro === slug);
}

import { REVIEWS_PATH } from '@/lib/google-reviews/config';

function normalizePathname(pathname: string): string {
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

/**
 * Target path for the other site language, preserving route kind (home, blog, post, pagination, services).
 * Query string should be appended by the caller (e.g. ?section=contacts on home).
 */
export function getAlternateLocalePath(
  pathname: string,
  locale: 'ru' | 'ro',
  blogSlugPairs: BlogSlugPairs = [],
): string {
  const p = normalizePathname(pathname);
  const toRo = locale === 'ru';
  const toRu = locale === 'ro';

  if (p === '/') {
    return toRo ? '/ro' : '/';
  }
  if (p === '/ro') {
    return toRu ? '/' : '/ro';
  }

  if (p === '/about') {
    return toRo ? '/ro/about' : '/about';
  }
  if (p === '/ro/about') {
    return toRu ? '/about' : '/ro/about';
  }

  if (p === '/services') {
    return toRo ? '/ro/services' : '/services';
  }
  if (p === '/ro/services') {
    return toRu ? '/services' : '/ro/services';
  }

  if (p === '/contacts') {
    return toRo ? '/ro/contacts' : '/contacts';
  }
  if (p === '/ro/contacts') {
    return toRu ? '/contacts' : '/ro/contacts';
  }

  if (p === REVIEWS_PATH.ru) {
    return toRo ? REVIEWS_PATH.ro : REVIEWS_PATH.ru;
  }
  if (p === REVIEWS_PATH.ro) {
    return toRu ? REVIEWS_PATH.ru : REVIEWS_PATH.ro;
  }

  if (p === '/search') {
    return toRo ? '/ro/search' : '/search';
  }
  if (p === '/ro/search') {
    return toRu ? '/search' : '/ro/search';
  }

  if (p === '/blog') {
    return toRo ? '/ro/blog' : '/blog';
  }
  if (p === '/ro/blog') {
    return toRu ? '/blog' : '/ro/blog';
  }

  const blogPageRu = /^\/blog\/page\/(\d+)$/.exec(p);
  if (blogPageRu) {
    const n = blogPageRu[1];
    return toRo ? `/ro/blog/page/${n}` : `/blog/page/${n}`;
  }
  const blogPageRo = /^\/ro\/blog\/page\/(\d+)$/.exec(p);
  if (blogPageRo) {
    const n = blogPageRo[1];
    return toRu ? `/blog/page/${n}` : `/ro/blog/page/${n}`;
  }

  const blogPostRu = /^\/blog\/([^/]+)$/.exec(p);
  if (blogPostRu) {
    const slug = blogPostRu[1];
    if (slug === 'page') {
      return toRo ? '/ro/blog' : '/blog';
    }
    const pair = findSlugPair(blogSlugPairs, slug);
    if (pair) {
      return toRo ? `/ro/blog/${pair[1]}` : `/blog/${pair[0]}`;
    }
    return toRo ? '/ro/blog' : '/blog';
  }

  const blogPostRo = /^\/ro\/blog\/([^/]+)$/.exec(p);
  if (blogPostRo) {
    const slug = blogPostRo[1];
    if (slug === 'page') {
      return toRu ? '/blog' : '/ro/blog';
    }
    const pair = findSlugPair(blogSlugPairs, slug);
    if (pair) {
      return toRu ? `/blog/${pair[0]}` : `/ro/blog/${pair[1]}`;
    }
    return toRu ? '/blog' : '/ro/blog';
  }

  const serviceRu = /^\/services\/([^/]+)$/.exec(p);
  if (serviceRu) {
    const slug = serviceRu[1];
    return toRo ? `/ro/services/${slug}` : `/services/${slug}`;
  }
  const serviceRo = /^\/ro\/services\/([^/]+)$/.exec(p);
  if (serviceRo) {
    const slug = serviceRo[1];
    return toRu ? `/services/${slug}` : `/ro/services/${slug}`;
  }

  return toRo ? '/ro' : '/';
}
