import React from 'react';
import Link from 'next/link';

import type { BlogLocale } from '@/blog-data/types';
import { blogPathRo, blogPathRu, getPostById } from '@/blog-data/registry';
import { SERVICE_SLUGS, servicePath } from '@/lib/service-slugs';

/** [[target|anchor]]: target is an article id or "svc:" plus a service slug. */
const TOKEN = /\[\[([^\]|]+)\|([^\]]+)\]\]/g;

const SERVICE_SET = new Set<string>(SERVICE_SLUGS);

export function resolveLinkTarget(target: string, locale: BlogLocale): string | null {
  if (target.startsWith('svc:')) {
    const slug = target.slice(4);
    return SERVICE_SET.has(slug) ? servicePath(slug, locale) : null;
  }
  const post = getPostById(target);
  if (!post) return null;
  return locale === 'ru' ? blogPathRu(post.slugRu) : blogPathRo(post.slugRo);
}

/** Text without link markup (for counting words or building plain strings). */
export function stripInlineLinks(text: string): string {
  return text.replace(TOKEN, (_m, _t, anchor: string) => anchor);
}

/** Splits text on link tokens and returns strings and <Link> elements. */
export function renderInline(text: string, locale: BlogLocale, linkClassName: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let last = 0;
  let n = 0;
  for (const m of text.matchAll(TOKEN)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(text.slice(last, idx));
    const href = resolveLinkTarget(m[1], locale);
    out.push(
      href ? (
        <Link key={`l${n++}`} href={href} className={linkClassName}>
          {m[2]}
        </Link>
      ) : (
        m[2]
      ),
    );
    last = idx + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
