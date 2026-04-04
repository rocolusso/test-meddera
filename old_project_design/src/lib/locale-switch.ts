import { findPostByAnySlug } from '@/blog-data/registry';

function normalizePathname(pathname: string): string {
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

/**
 * Target path for the other site language, preserving route kind (home, blog, post, pagination, services).
 * Query string should be appended by the caller (e.g. ?section=contacts on home).
 */
export function getAlternateLocalePath(pathname: string, locale: 'ru' | 'ro'): string {
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
    const post = findPostByAnySlug(slug);
    if (post) {
      return toRo ? `/ro/blog/${post.slugRo}` : `/blog/${post.slugRu}`;
    }
    return toRo ? '/ro/blog' : '/blog';
  }

  const blogPostRo = /^\/ro\/blog\/([^/]+)$/.exec(p);
  if (blogPostRo) {
    const slug = blogPostRo[1];
    if (slug === 'page') {
      return toRu ? '/blog' : '/ro/blog';
    }
    const post = findPostByAnySlug(slug);
    if (post) {
      return toRu ? `/blog/${post.slugRu}` : `/ro/blog/${post.slugRo}`;
    }
    return toRu ? '/blog' : '/ro/blog';
  }

  const service = /^\/services\/([^/]+)(\/ro)?$/.exec(p);
  if (service) {
    const serviceSlug = service[1];
    const hasRo = Boolean(service[2]);
    if (hasRo) {
      return toRu ? `/services/${serviceSlug}` : `/services/${serviceSlug}/ro`;
    }
    return toRo ? `/services/${serviceSlug}/ro` : `/services/${serviceSlug}`;
  }

  return toRo ? '/ro' : '/';
}

/** Path + preserved query string (e.g. ?section=contacts on home). */
export function getAlternateLocaleHref(
  pathname: string,
  searchParams: URLSearchParams,
  locale: 'ru' | 'ro',
): string {
  const path = getAlternateLocalePath(pathname, locale);
  const q = searchParams.toString();
  return q ? `${path}?${q}` : path;
}
