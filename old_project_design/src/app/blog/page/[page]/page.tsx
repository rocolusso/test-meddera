import React from 'react';
import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import { BlogIndexView } from '@/components/blog/BlogIndexView';
import { blogSocialMetadata } from '@/lib/site-og';
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

  return (
    <>
      <HeaderNew locale="ru" />
      <main className="bg-white min-h-[50vh]">
        <BlogIndexView locale="ru" page={page} />
      </main>
      <FooterNew locale="ru" />
    </>
  );
}
