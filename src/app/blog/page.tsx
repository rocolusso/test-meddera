import React from 'react';
import type { Metadata } from 'next';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import { BlogIndexView } from '@/components/blog/BlogIndexView';
import { blogSocialMetadata } from '@/lib/site-og';
import { ORIGIN } from '@/blog-data/registry';

const blogIndexTitle = 'Блог клиники Meddera в Бельцах';
const blogIndexDescription =
  'Статьи и гиды клиники Meddera в Бельцах: косметология, дерматология и эстетические процедуры. Полезные материалы для пациентов перед консультацией.';

export const metadata: Metadata = {
  title: `${blogIndexTitle} | Meddera`,
  description: blogIndexDescription,
  alternates: {
    canonical: `${ORIGIN}/blog`,
    languages: {
      ru: `${ORIGIN}/blog`,
      ro: `${ORIGIN}/ro/blog`,
      'x-default': `${ORIGIN}/blog`,
    },
  },
  ...blogSocialMetadata({
    title: `${blogIndexTitle} | Meddera`,
    description: blogIndexDescription,
    url: `${ORIGIN}/blog`,
    locale: 'ru_MD',
    type: 'website',
  }),
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
