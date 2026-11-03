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
import { JsonLd } from '@/components/JsonLd';

interface Props { params: Promise<{ page: string }> }

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
  const canonical = `${ORIGIN}/ro/blog/page/${n}`;
  const description = `Articole și ghiduri Meddera, Bălți — pagina ${n}. Dermatologie și cosmetologie: informații pentru pacienți care se pregătesc pentru consultație.`;
  return {
    title: `Blog — articole și ghiduri Meddera Bălți, pagina ${n}`,
    description,
    alternates: {
      canonical,
      languages: {
        ru: `${ORIGIN}/blog/page/${n}`,
        ro: canonical,
        'x-default': `${ORIGIN}/blog/page/${n}`,
      },
    },
    ...blogSocialMetadata({
      title: `Blog — articole și ghiduri Meddera Bălți, pagina ${n}`,
      description,
      url: canonical,
      locale: 'ro_MD',
      type: 'website',
    }),
  };
}

export default async function RoBlogIndexPaginatedPage({ params }: Props) {
  const { page: pageParam } = await params;
  // Only "/page/1" is a real alias of the blog list; any other number or text out of range is a 404 (PLAN 404L-01).
  if (pageParam === '1') {
    permanentRedirect('/ro/blog');
  }
  const page = /^[0-9]+$/.test(pageParam) ? parseInt(pageParam, 10) : NaN;
  const max = getMaxIndexPage();
  if (Number.isNaN(page) || page < 2 || page > max) {
    notFound();
  }

  const canonical = `${ORIGIN}/ro/blog/page/${page}`;
  const metaTitle = `Blog — articole și ghiduri Meddera Bălți, pagina ${page}`;
  const metaDescription = `Articole și ghiduri Meddera, Bălți — pagina ${page}. Dermatologie și cosmetologie: informații pentru pacienți care se pregătesc pentru consultație.`;
  const paginatedJsonLd = webPageJsonLd({
    pageUrl: canonical,
    pageType: 'CollectionPage',
    includeBlog: true,
    name: metaTitle,
    description: metaDescription,
    inLanguage: 'ro-MD',
    breadcrumbItems: [
      { name: 'Acasă', item: `${ORIGIN}/ro` },
      { name: 'Blog', item: `${ORIGIN}/ro/blog` },
      { name: `Pagina ${page}`, item: canonical },
    ],
  });

  return (
    <>
      <JsonLd data={paginatedJsonLd} />
      <HeaderNew locale="ro" />
      <main className="min-h-[50vh] bg-background">
        <div className="bg-background">
          <BlogIndexView locale="ro" page={page} />
        </div>
        <BlogIndexSeoContent locale="ro" page={page} />
      </main>
      <FooterNew locale="ro" />
    </>
  );
}
