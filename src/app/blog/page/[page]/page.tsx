import React from 'react';
import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import { BlogIndexView } from '@/components/blog/BlogIndexView';
import BlogIndexSeoContent from '@/components/new-ui/BlogIndexSeoContent';
import { blogSocialMetadata } from '@/lib/site-og';
import { webPageJsonLd } from '@/lib/jsonld/web-page';
import { getMaxIndexPage, ORIGIN } from '@/blog-data/registry';

type Props = { params: Promise<{ page: string }> };

export async function generateStaticParams() {
  const max = getMaxIndexPage();
  if (max < 2) return [];
  return Array.from({ length: max - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page: pageParam } = await params;
  const n = parseInt(pageParam, 10);
  if (Number.isNaN(n) || n < 2) {
    return {};
  }
  const max = getMaxIndexPage();
  if (n > max) {
    return {};
  }
  const canonical = `${ORIGIN}/blog/page/${n}`;
  const description = `Статьи и гиды клиники Meddera в Бельцах — страница ${n}. Косметология и дерматология; материалы для пациентов, которые рассматривают процедуры в Бельцах.`;
  return {
    title: `Блог — страница ${n} | Meddera`,
    description,
    alternates: {
      canonical,
      languages: {
        ru: canonical,
        ro: `${ORIGIN}/ro/blog/page/${n}`,
        'x-default': `${ORIGIN}/blog/page/${n}`,
      },
    },
    robots: n > max ? { index: false } : undefined,
    ...blogSocialMetadata({
      title: `Блог — страница ${n} | Meddera`,
      description,
      url: canonical,
      locale: 'ru_MD',
      type: 'website',
    }),
  };
}

export default async function BlogIndexPaginatedPage({ params }: Props) {
  const { page: pageParam } = await params;
  const page = parseInt(pageParam, 10);
  if (Number.isNaN(page) || page < 2) {
    permanentRedirect('/blog');
  }
  const max = getMaxIndexPage();
  if (page > max) {
    notFound();
  }

  const canonical = `${ORIGIN}/blog/page/${page}`;
  const metaTitle = `Блог — страница ${page} | Meddera`;
  const metaDescription = `Статьи и гиды клиники Meddera в Бельцах — страница ${page}. Косметология и дерматология; материалы для пациентов, которые рассматривают процедуры в Бельцах.`;
  const paginatedJsonLd = webPageJsonLd({
    pageUrl: canonical,
    pageType: 'CollectionPage',
    name: metaTitle,
    description: metaDescription,
    inLanguage: 'ru-MD',
    breadcrumbItems: [
      { name: 'Главная', item: `${ORIGIN}/` },
      { name: 'Блог', item: `${ORIGIN}/blog` },
      { name: `Страница ${page}`, item: canonical },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paginatedJsonLd) }}
      />
      <HeaderNew locale="ru" />
      <main className="min-h-[50vh] bg-background">
        <div className="bg-white">
          <BlogIndexView locale="ru" page={page} />
        </div>
        <BlogIndexSeoContent locale="ru" page={page} />
      </main>
      <FooterNew locale="ru" />
    </>
  );
}
