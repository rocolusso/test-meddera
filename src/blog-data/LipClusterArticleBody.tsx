import React from 'react';
import Link from 'next/link';

import { LIP_CLUSTER_ARTICLE_CONTENT } from '@/blog-data/lip-cluster-article-content';
import { getHubForCluster, ORIGIN } from '@/blog-data/registry';
import type { BlogLocale, BlogPost } from '@/blog-data/types';

type Props = {
  post: BlogPost;
  locale: BlogLocale;
};

function stripTitleSuffix(title: string) {
  return title.replace(' | Meddera', '');
}

export function LipClusterArticleBody({ post, locale }: Props) {
  const copy = LIP_CLUSTER_ARTICLE_CONTENT[post.id];
  const ruUrl = `${ORIGIN}/blog/${post.slugRu}`;
  const roUrl = `${ORIGIN}/ro/blog/${post.slugRo}`;
  const hub = post.clusterId ? getHubForCluster(post.clusterId) : undefined;

  if (!copy) {
    return null;
  }

  const sections = locale === 'ru' ? copy.sectionsRu : copy.sectionsRo;
  const title = locale === 'ru' ? post.titleRu : post.titleRo;
  const h1 = stripTitleSuffix(title);
  const crumbLabel = h1.length > 48 ? `${h1.slice(0, 45)}…` : h1;

  if (locale === 'ru') {
    return (
      <>
        <nav className="text-sm text-gray-500 mb-6" aria-label="Хлебные крошки">
          <Link href="/" className="underline hover:text-gray-800">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="underline hover:text-gray-800">Блог</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{crumbLabel}</span>
        </nav>

        <p className="text-sm text-gray-500 mb-2">
          Опубликовано:
          {' '}
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          {' · Обновлено: '}
          <time dateTime={post.dateModified}>{post.dateModified}</time>
          {' · '}
          <Link href={roUrl} className="underline hover:text-gray-800" hrefLang="ro">Română</Link>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{h1}</h1>

        {sections.map((sec, si) => (
          <section key={`${post.id}-ru-${si}`} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{sec.h2}</h2>
            {sec.paragraphs.map((p, pi) => (
              <p key={`${post.id}-ru-${si}-${pi}`} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </section>
        ))}

        {hub ? (
          <section
            className="mt-12 rounded-lg border border-green-200 bg-green-50/80 p-6"
            aria-labelledby="back-hub-ru"
          >
            <h2 id="back-hub-ru" className="text-lg font-semibold text-gray-900 mb-2">
              Гид по процедуре
            </h2>
            <p className="text-gray-700 text-sm mb-3">
              Полный обзор этапов, безопасности и записи в Meddera.
            </p>
            <Link
              href={`/blog/${hub.slugRu}`}
              className="text-green-800 font-medium underline hover:text-green-950"
            >
              Открыть гид по увеличению губ
            </Link>
          </section>
        ) : null}
      </>
    );
  }

  return (
    <>
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/ro" className="underline hover:text-gray-800">Acasă</Link>
        <span className="mx-2">/</span>
        <Link href="/ro/blog" className="underline hover:text-gray-800">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{crumbLabel}</span>
      </nav>

      <p className="text-sm text-gray-500 mb-2">
        Publicat:
        {' '}
        <time dateTime={post.publishedAt}>{post.publishedAt}</time>
        {' · Actualizat: '}
        <time dateTime={post.dateModified}>{post.dateModified}</time>
        {' · '}
        <Link href={ruUrl} className="underline hover:text-gray-800" hrefLang="ru">Русский</Link>
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{h1}</h1>

      {sections.map((sec, si) => (
        <section key={`${post.id}-ro-${si}`} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">{sec.h2}</h2>
          {sec.paragraphs.map((p, pi) => (
            <p key={`${post.id}-ro-${si}-${pi}`} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </section>
      ))}

      {hub ? (
        <section
          className="mt-12 rounded-lg border border-green-200 bg-green-50/80 p-6"
          aria-labelledby="back-hub-ro"
        >
          <h2 id="back-hub-ro" className="text-lg font-semibold text-gray-900 mb-2">
            Ghid despre procedură
          </h2>
          <p className="text-gray-700 text-sm mb-3">
            Prezentare generală a etapelor, siguranței și programării la Meddera.
          </p>
          <Link
            href={`/ro/blog/${hub.slugRo}`}
            className="text-green-800 font-medium underline hover:text-green-950"
          >
            Deschide ghidul despre mărirea buzelor
          </Link>
        </section>
      ) : null}
    </>
  );
}
