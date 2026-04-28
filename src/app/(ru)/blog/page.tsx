import React from 'react';
import type { Metadata } from 'next';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import { BlogIndexView } from '@/components/blog/BlogIndexView';
import BlogIndexSeoContent from '@/components/new-ui/BlogIndexSeoContent';
import { blogSocialMetadata } from '@/lib/site-og';
import { webPageJsonLd } from '@/lib/jsonld/web-page';
import { ORIGIN } from '@/blog-data/registry';

const blogIndexTitle = 'Блог клиники Meddera в Бельцах';
const blogIndexDescription =
  'Статьи и гиды клиники Meddera в Бельцах: косметология, дерматология и эстетические процедуры. Полезные материалы для пациентов перед консультацией.';

const blogIndexUrl = `${ORIGIN}/blog`;
const blogIndexMetaTitle = `${blogIndexTitle} | Meddera`;

const blogIndexJsonLd = webPageJsonLd({
  pageUrl: blogIndexUrl,
  pageType: 'CollectionPage',
  name: blogIndexMetaTitle,
  description: blogIndexDescription,
  inLanguage: 'ru-MD',
  breadcrumbItems: [
    { name: 'Главная', item: `${ORIGIN}/` },
    { name: 'Блог', item: blogIndexUrl },
  ],
});

export const metadata: Metadata = {
  title: blogIndexMetaTitle,
  description: blogIndexDescription,
  alternates: {
    canonical: blogIndexUrl,
    languages: {
      ru: `${ORIGIN}/blog`,
      ro: `${ORIGIN}/ro/blog`,
      'x-default': `${ORIGIN}/blog`,
    },
  },
  ...blogSocialMetadata({
    title: blogIndexMetaTitle,
    description: blogIndexDescription,
    url: blogIndexUrl,
    locale: 'ru_MD',
    type: 'website',
  }),
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd) }}
      />
      <HeaderNew locale="ru" />
      <main className="min-h-[50vh] bg-background">
        <div className="bg-white">
          <BlogIndexView locale="ru" page={1} />
        </div>
        <BlogIndexSeoContent locale="ru" page={1} />
      </main>
      <FooterNew locale="ru" />
    </>
  );
}
