import React from 'react';
import type { Metadata } from 'next';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import { BlogIndexView } from '@/components/blog/BlogIndexView';
import { blogSocialMetadata } from '@/lib/site-og';
import { ORIGIN } from '@/blog-data/registry';

const roBlogIndexTitle = 'Blog — articole și ghiduri Meddera Bălți';
const roBlogIndexDescription =
  'Articole și ghiduri de la clinica Meddera din Bălți: dermatologie, cosmetologie și proceduri estetice. Informații utile pentru pacienți înainte de consultație.';

export const metadata: Metadata = {
  title: `${roBlogIndexTitle} | Meddera`,
  description: roBlogIndexDescription,
  alternates: {
    canonical: `${ORIGIN}/ro/blog`,
    languages: {
      ru: `${ORIGIN}/blog`,
      ro: `${ORIGIN}/ro/blog`,
      'x-default': `${ORIGIN}/blog`,
    },
  },
  ...blogSocialMetadata({
    title: `${roBlogIndexTitle} | Meddera`,
    description: roBlogIndexDescription,
    url: `${ORIGIN}/ro/blog`,
    locale: 'ro_MD',
    type: 'website',
  }),
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
