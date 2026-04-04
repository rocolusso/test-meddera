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
  const canonical = `${ORIGIN}/ro/blog/page/${n}`;
  const description = `Articole și ghiduri Meddera, Bălți — pagina ${n}. Dermatologie și cosmetologie: informații pentru pacienți care se pregătesc pentru consultație.`;
  return {
    title: `Blog — pagina ${n} | Meddera`,
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
      title: `Blog — pagina ${n} | Meddera`,
      description,
      url: canonical,
      locale: 'ro_MD',
      type: 'website',
    }),
  };
}

export default async function RoBlogIndexPaginatedPage({ params }: Props) {
  const { page: pageParam } = await params;
  const page = parseInt(pageParam, 10);
  if (Number.isNaN(page) || page < 2) {
    permanentRedirect('/ro/blog');
  }
  const max = getMaxIndexPage();
  if (page > max) {
    notFound();
  }

  return (
    <>
      <HeaderNew locale="ro" />
      <main className="bg-white min-h-[50vh]">
        <BlogIndexView locale="ro" page={page} />
      </main>
      <FooterNew locale="ro" />
    </>
  );
}
