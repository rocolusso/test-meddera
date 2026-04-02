import React from 'react';
import type { Metadata } from 'next';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import { BlogIndexView } from '@/components/blog/BlogIndexView';
import { ORIGIN } from '@/blog-data/registry';

export const metadata: Metadata = {
  title: 'Blog | Meddera',
  description: 'Articole și ghiduri — clinica Meddera din Bălți.',
  alternates: {
    canonical: `${ORIGIN}/ro/blog`,
    languages: {
      ru: `${ORIGIN}/blog`,
      ro: `${ORIGIN}/ro/blog`,
      'x-default': `${ORIGIN}/blog`,
    },
  },
  openGraph: {
    title: 'Blog | Meddera',
    url: `${ORIGIN}/ro/blog`,
    type: 'website',
    locale: 'ro_MD',
  },
};

export default function RoBlogIndexPage() {
  return (
    <>
      <HeaderNew locale="ro" />
      <main className="bg-white min-h-[50vh]">
        <BlogIndexView locale="ro" page={1} />
      </main>
      <FooterNew locale="ro" />
    </>
  );
}
