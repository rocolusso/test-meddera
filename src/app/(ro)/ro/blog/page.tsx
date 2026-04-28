import React from 'react';
import type { Metadata } from 'next';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import { BlogIndexView } from '@/components/blog/BlogIndexView';
import BlogIndexSeoContent from '@/components/new-ui/BlogIndexSeoContent';
import { blogSocialMetadata } from '@/lib/site-og';
import { webPageJsonLd } from '@/lib/jsonld/web-page';
import { ORIGIN } from '@/blog-data/registry';

const roBlogIndexTitle = 'Blog — articole și ghiduri Meddera Bălți';
const roBlogIndexDescription =
  'Articole și ghiduri de la clinica Meddera din Bălți: dermatologie, cosmetologie și proceduri estetice. Informații utile pentru pacienți înainte de consultație.';

const roBlogIndexUrl = `${ORIGIN}/ro/blog`;
const roBlogIndexMetaTitle = `${roBlogIndexTitle} | Meddera`;

const roBlogIndexJsonLd = webPageJsonLd({
  pageUrl: roBlogIndexUrl,
  pageType: 'CollectionPage',
  name: roBlogIndexMetaTitle,
  description: roBlogIndexDescription,
  inLanguage: 'ro-MD',
  breadcrumbItems: [
    { name: 'Acasă', item: `${ORIGIN}/ro` },
    { name: 'Blog', item: roBlogIndexUrl },
  ],
});

export const metadata: Metadata = {
  title: roBlogIndexMetaTitle,
  description: roBlogIndexDescription,
  alternates: {
    canonical: roBlogIndexUrl,
    languages: {
      ru: `${ORIGIN}/blog`,
      ro: `${ORIGIN}/ro/blog`,
      'x-default': `${ORIGIN}/blog`,
    },
  },
  ...blogSocialMetadata({
    title: roBlogIndexMetaTitle,
    description: roBlogIndexDescription,
    url: roBlogIndexUrl,
    locale: 'ro_MD',
    type: 'website',
  }),
};

export default function RoBlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roBlogIndexJsonLd) }}
      />
      <HeaderNew locale="ro" />
      <main className="min-h-[50vh] bg-background">
        <div className="bg-white">
          <BlogIndexView locale="ro" page={1} />
        </div>
        <BlogIndexSeoContent locale="ro" page={1} />
      </main>
      <FooterNew locale="ro" />
    </>
  );
}
