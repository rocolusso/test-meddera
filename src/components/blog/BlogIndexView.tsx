import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import type { BlogLocale } from '@/blog-data/types';
import {
  getAllHubs,
  getMaxIndexPage,
  getPostsForIndexPage,
} from '@/blog-data/registry';
import { getBlogClusterImage } from '@/lib/blog-cluster-image';
import PageTitleMini from '@/components/pofo/PageTitleMini';
import SectionHeading from '@/components/pofo/SectionHeading';
import SectionReveal from '@/components/new-ui/SectionReveal';

type Props = {
  locale: BlogLocale;
  page: number;
};

const REVEAL_DELAYS = [0, 200, 400] as const;
const CARD_IMAGE_SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

/** Pofo pagination cell. */
const pageCellClass =
  'alt-font inline-flex items-center gap-1.5 border-l border-border px-[18px] text-[12px] font-medium uppercase leading-[40px] text-pofo-heading transition-colors first:border-l-0 hover:bg-[#232323] hover:text-white';

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
    <>
      <PageTitleMini
        title={title}
        breadcrumbsLabel={isRu ? 'Хлебные крошки' : 'Breadcrumb'}
        breadcrumbs={[{ href: home, label: isRu ? 'Главная' : 'Acasă' }, { label: title }]}
      />

      <div className="pofo-container section-y">
        {allHubs.length > 0 ? (
          <section className="mb-[70px] md:mb-[100px]">
            <SectionHeading as="h2" title={rubricsTitle} separator className="mb-12 md:mb-[70px]" />
            {/* Pofo blog-classic */}
            <div className="grid gap-x-[30px] gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {allHubs.map((hub, i) => {
                const hubTitle = isRu ? hub.titleRu : hub.titleRo;
                const hubExcerpt = isRu ? hub.excerptRu : hub.excerptRo;
                const hubSlugRu = hub.slugRu;
                const hubSlugRo = hub.slugRo;
                const cover = getBlogClusterImage(hub.clusterId);
                const ownHref = isRu ? `/blog/${hubSlugRu}` : `/ro/blog/${hubSlugRo}`;

                return (
                  <SectionReveal key={hub.id} delay={REVEAL_DELAYS[i % 3]} className="group text-center sm:text-left">
                    {cover ? (
                      <Link
                        href={ownHref}
                        tabIndex={-1}
                        aria-hidden
                        className="relative mb-6 block aspect-[16/10] overflow-hidden bg-muted transition-colors duration-300 group-hover:bg-[#232323]"
                      >
                        <Image
                          src={cover}
                          alt=""
                          fill
                          sizes={CARD_IMAGE_SIZES}
                          className="object-cover transition-[transform,opacity] duration-300 ease-out group-hover:scale-110 group-hover:opacity-50 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        />
                      </Link>
                    ) : null}
                    <h3 className="alt-font text-[16px] font-semibold leading-[23px] text-pofo-heading">
                      {hubTitle.replace(' | Meddera', '').replace(': гид по', '').replace(': ghid despre', '')}
                    </h3>
                    <span aria-hidden className="my-5 block h-px w-full bg-border" />
                    <p className="text-[14px] leading-[24px] text-muted-foreground">{hubExcerpt}</p>
                    <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-start">
                      <Link
                        href={`/blog/${hubSlugRu}`}
                        className="alt-font border-b border-current pb-0.5 text-[12px] font-semibold uppercase tracking-[0.5px] text-pofo-heading transition-colors hover:text-deep-pink"
                      >
                        {isRu ? 'Открыть (RU)' : 'Ghid RU'}
                      </Link>
                      <Link
                        href={`/ro/blog/${hubSlugRo}`}
                        className="alt-font border-b border-current pb-0.5 text-[12px] font-semibold uppercase tracking-[0.5px] text-pofo-heading transition-colors hover:text-deep-pink"
                      >
                        {isRu ? 'Ghid RO' : 'Deschide (RO)'}
                      </Link>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </section>
        ) : null}

        <SectionHeading as="h2" title={listTitle} separator className="mb-12 md:mb-[70px]" />
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">{empty}</p>
        ) : (
          /* Pofo blog-grid (blog-post-style3) */
          <ul className="grid list-none gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => {
              const href = isRu ? `/blog/${post.slugRu}` : `/ro/blog/${post.slugRo}`;
              const t = isRu ? post.titleRu : post.titleRo;
              const ex = isRu ? post.excerptRu : post.excerptRo;
              const d = isRu ? post.publishedAt : post.publishedAt;
              const cover = getBlogClusterImage(post.clusterId);
              return (
                <SectionReveal as="li" key={post.id} delay={REVEAL_DELAYS[i % 3]}>
                  <Link href={href} className="group flex h-full flex-col bg-pofo-light-gray text-center sm:text-left">
                    {cover ? (
                      <span className="relative block aspect-[16/10] overflow-hidden bg-muted">
                        <Image
                          src={cover}
                          alt=""
                          fill
                          sizes={CARD_IMAGE_SIZES}
                          loading={i < 3 ? 'eager' : 'lazy'}
                          className="object-cover"
                        />
                        <span
                          aria-hidden
                          className="absolute inset-0 flex items-center justify-center bg-black/50 text-[48px] font-light leading-none text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          <span className="translate-y-3 transition-transform duration-300 group-hover:translate-y-0 motion-reduce:translate-y-0">+</span>
                        </span>
                      </span>
                    ) : null}
                    <span className="flex flex-1 flex-col p-5 md:p-10">
                      <span className="alt-font block text-[16px] font-medium leading-[23px] text-pofo-heading transition-colors group-hover:text-deep-pink">
                        {t.replace(' | Meddera', '')}
                      </span>
                      <p className="mt-4 text-[14px] leading-[24px] text-muted-foreground">{ex}</p>
                      <span aria-hidden className="mt-auto block pt-5">
                        <span className="block h-px w-full bg-[#dbdbdb] dark:bg-pofo-line" />
                      </span>
                      <time dateTime={d} className="alt-font mt-5 block text-[11px] uppercase leading-[14px] tracking-[0.5px] text-pofo-medium-gray">
                        {d}
                      </time>
                    </span>
                  </Link>
                </SectionReveal>
              );
            })}
          </ul>
        )}

        {maxPage > 1 ? (
          <nav className="mt-[65px] flex justify-center" aria-label={isRu ? 'Страницы' : 'Pagini'}>
            <div className="inline-flex border border-border bg-background">
              {page > 1 ? (
                <Link
                  href={page === 2 ? base : `${base}/page/${page - 1}`}
                  className={pageCellClass}
                >
                  <ArrowLeft aria-hidden className="hidden size-3.5 md:inline-block" />
                  {isRu ? 'Назад' : 'Înapoi'}
                </Link>
              ) : null}
              <span className="alt-font inline-flex items-center border-l border-border bg-pofo-light-gray px-[18px] text-[12px] font-medium uppercase leading-[40px] text-pofo-medium-gray first:border-l-0">
                {isRu ? 'Стр.' : 'Pag.'}
                {' '}
                {page}
                {' / '}
                {maxPage}
              </span>
              {page < maxPage ? (
                <Link
                  href={`${base}/page/${page + 1}`}
                  className={pageCellClass}
                >
                  {isRu ? 'Вперёд' : 'Înainte'}
                  <ArrowRight aria-hidden className="hidden size-3.5 md:inline-block" />
                </Link>
              ) : null}
            </div>
          </nav>
        ) : null}
      </div>
    </>
  );
}
