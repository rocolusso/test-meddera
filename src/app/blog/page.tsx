import React from 'react';
import type { Metadata } from 'next';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import { BlogIndexView } from '@/components/blog/BlogIndexView';
import { ORIGIN } from '@/blog-data/registry';

export const metadata: Metadata = {
  title: 'Блог | Meddera',
  description: 'Статьи и гиды клиники Meddera в Бельцах: косметология и дерматология.',
  alternates: {
    canonical: `${ORIGIN}/blog`,
    languages: {
      ru: `${ORIGIN}/blog`,
      ro: `${ORIGIN}/ro/blog`,
      'x-default': `${ORIGIN}/blog`,
    },
  },
  openGraph: {
    title: 'Блог | Meddera',
    url: `${ORIGIN}/blog`,
    type: 'website',
    locale: 'ru_MD',
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <HeaderNew locale="ru" />
      <main className="bg-white min-h-[50vh]">
        <BlogIndexView locale="ru" page={1} />
      </main>
      <FooterNew locale="ru" />
    </>
  );
}
