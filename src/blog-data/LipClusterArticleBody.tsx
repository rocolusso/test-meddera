import React from 'react';
import Link from 'next/link';

import { LIP_CLUSTER_ARTICLE_CONTENT } from '@/blog-data/lip-cluster-article-content';
import { blogPathRu, blogPathRo, getHubForCluster } from '@/blog-data/registry';
import type { BlogLocale, BlogPost } from '@/blog-data/types';
import { blogUi } from '@/blog-data/blog-ui';

type Props = {
  post: BlogPost;
  locale: BlogLocale;
};

function stripTitleSuffix(title: string) {
  return title.replace(' | Meddera', '');
}

export function LipClusterArticleBody({ post, locale }: Props) {
  const copy = LIP_CLUSTER_ARTICLE_CONTENT[post.id];
  const ruUrl = blogPathRu(post.slugRu);
  const roUrl = blogPathRo(post.slugRo);
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
        <nav className={blogUi.breadcrumbs} aria-label="Хлебные крошки">
          <Link href="/" className={blogUi.crumbLink}>Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className={blogUi.crumbLink}>Блог</Link>
          <span className="mx-2">/</span>
          <span className={blogUi.crumbCurrent}>{crumbLabel}</span>
        </nav>

        <p className={blogUi.meta}>
          Опубликовано:
          {' '}
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          {' · Обновлено: '}
          <time dateTime={post.dateModified}>{post.dateModified}</time>
          {' · '}
          <Link href={roUrl} className={blogUi.crumbLink} hrefLang="ro">Română</Link>
        </p>

        <h1 className={blogUi.h1Loose}>{h1}</h1>

        {sections.map((sec, si) => (
          <section key={`${post.id}-ru-${si}`} className="mb-10">
            <h2 className={blogUi.h2Tight}>{sec.h2}</h2>
            {sec.paragraphs.map((p, pi) => (
              <p key={`${post.id}-ru-${si}-${pi}`} className={blogUi.pMb4Last}>
                {p}
              </p>
            ))}
          </section>
        ))}

        {hub ? (
          <section
            className={blogUi.ctaBox}
            aria-labelledby="back-hub-ru"
          >
            <h2 id="back-hub-ru" className={blogUi.boxTitleTight}>
              Гид по процедуре
            </h2>
            <p className={blogUi.smallMb3}>
              Полный обзор этапов, безопасности и записи в Meddera.
            </p>
            <Link
              href={`/blog/${hub.slugRu}`}
              className={blogUi.link}
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
      <nav className={blogUi.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/ro" className={blogUi.crumbLink}>Acasă</Link>
        <span className="mx-2">/</span>
        <Link href="/ro/blog" className={blogUi.crumbLink}>Blog</Link>
        <span className="mx-2">/</span>
        <span className={blogUi.crumbCurrent}>{crumbLabel}</span>
      </nav>

      <p className={blogUi.meta}>
        Publicat:
        {' '}
        <time dateTime={post.publishedAt}>{post.publishedAt}</time>
        {' · Actualizat: '}
        <time dateTime={post.dateModified}>{post.dateModified}</time>
        {' · '}
        <Link href={ruUrl} className={blogUi.crumbLink} hrefLang="ru">Русский</Link>
      </p>

      <h1 className={blogUi.h1Loose}>{h1}</h1>

      {sections.map((sec, si) => (
        <section key={`${post.id}-ro-${si}`} className="mb-10">
          <h2 className={blogUi.h2Tight}>{sec.h2}</h2>
          {sec.paragraphs.map((p, pi) => (
            <p key={`${post.id}-ro-${si}-${pi}`} className={blogUi.pMb4Last}>
              {p}
            </p>
          ))}
        </section>
      ))}

      {hub ? (
        <section
          className={blogUi.ctaBox}
          aria-labelledby="back-hub-ro"
        >
          <h2 id="back-hub-ro" className={blogUi.boxTitleTight}>
            Ghid despre procedură
          </h2>
          <p className={blogUi.smallMb3}>
            Prezentare generală a etapelor, siguranței și programării la Meddera.
          </p>
          <Link
            href={`/ro/blog/${hub.slugRo}`}
            className={blogUi.link}
          >
            Deschide ghidul despre mărirea buzelor
          </Link>
        </section>
      ) : null}
    </>
  );
}
