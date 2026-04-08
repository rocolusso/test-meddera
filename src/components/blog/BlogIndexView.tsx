import React from 'react';
import Link from 'next/link';

import type { BlogLocale } from '@/blog-data/types';
import {
  getAllHubs,
  getMaxIndexPage,
  getPostsForIndexPage,
} from '@/blog-data/registry';

type Props = {
  locale: BlogLocale;
  page: number;
};

export function BlogIndexView({ locale, page }: Props) {
  const isRu = locale === 'ru';
  const base = isRu ? '/blog' : '/ro/blog';
  const home = isRu ? '/' : '/ro';
  const maxPage = getMaxIndexPage();
  const posts = getPostsForIndexPage(locale, page);
  const allHubs = getAllHubs();

  const title = isRu ? 'Блог клиники Meddera в Бельцах' : 'Blog — clinica Meddera din Bălți';
  const rubricsTitle = isRu ? 'Рубрики' : 'Rubrici';
  const listTitle = isRu ? 'Все статьи' : 'Toate articolele';
  const empty = isRu ? 'Скоро здесь появятся новые материалы.' : 'În curând vor apărea materiale noi.';

  return (
    <div className="container mx-auto max-w-3xl px-5 py-10">
      <nav className="text-sm text-gray-500 mb-6" aria-label={isRu ? 'Хлебные крошки' : 'Breadcrumb'}>
        <Link href={home} className="underline hover:text-gray-800">{isRu ? 'Главная' : 'Acasă'}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{title}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{title}</h1>

      {allHubs.length > 0 ? (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{rubricsTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {allHubs.map((hub) => {
              const hubTitle = isRu ? hub.titleRu : hub.titleRo;
              const hubExcerpt = isRu ? hub.excerptRu : hub.excerptRo;
              const hubSlugRu = hub.slugRu;
              const hubSlugRo = hub.slugRo;
              
              return (
                <div
                  key={hub.id}
                  className="rounded-lg border border-green-200 bg-green-50/80 p-5 hover:border-green-300 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {hubTitle.replace(' | Meddera', '').replace(': гид по', '').replace(': ghid despre', '')}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">{hubExcerpt}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/blog/${hubSlugRu}`}
                      className="text-green-800 font-medium text-sm underline hover:text-green-950"
                    >
                      {isRu ? 'Открыть (RU)' : 'Ghid RU'}
                    </Link>
                    <Link
                      href={`/ro/blog/${hubSlugRo}`}
                      className="text-green-800 font-medium text-sm underline hover:text-green-950"
                    >
                      {isRu ? 'Ghid RO' : 'Deschide (RO)'}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      <h2 className="text-lg font-semibold text-gray-800 mb-4">{listTitle}</h2>
      {posts.length === 0 ? (
        <p className="text-gray-600">{empty}</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => {
            const href = isRu ? `/blog/${post.slugRu}` : `/ro/blog/${post.slugRo}`;
            const t = isRu ? post.titleRu : post.titleRo;
            const ex = isRu ? post.excerptRu : post.excerptRo;
            const d = isRu ? post.publishedAt : post.publishedAt;
            return (
              <li key={post.id} className="border-b border-gray-100 pb-6">
                <Link href={href} className="group">
                  <span className="block text-xl font-semibold text-gray-900 group-hover:text-green-800 underline-offset-2 group-hover:underline">
                    {t.replace(' | Meddera', '')}
                  </span>
                  <time dateTime={d} className="text-sm text-gray-500 mt-1 block">
                    {d}
                  </time>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">{ex}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {maxPage > 1 ? (
        <nav className="mt-10 flex flex-wrap items-center gap-4 text-sm" aria-label={isRu ? 'Страницы' : 'Pagini'}>
          {page > 1 ? (
            <Link
              href={page === 2 ? base : `${base}/page/${page - 1}`}
              className="underline text-gray-800 hover:text-green-800"
            >
              {isRu ? 'Назад' : 'Înapoi'}
            </Link>
          ) : null}
          <span className="text-gray-500">
            {isRu ? 'Стр.' : 'Pag.'}
            {' '}
            {page}
            {' / '}
            {maxPage}
          </span>
          {page < maxPage ? (
            <Link
              href={`${base}/page/${page + 1}`}
              className="underline text-gray-800 hover:text-green-800"
            >
              {isRu ? 'Вперёд' : 'Înainte'}
            </Link>
          ) : null}
        </nav>
      ) : null}
    </div>
  );
}
