import React, { Suspense } from 'react';
import type { Metadata } from 'next';

import FooterNew from '@/components/new-ui/FooterNew';
import HeaderNew from '@/components/new-ui/HeaderNew';
import SearchResultsView from '@/components/search/SearchResultsView';
import { SEARCH_STRINGS } from '@/lib/search/strings';

export const metadata: Metadata = {
  title: 'Căutare pe site | Meddera',
  robots: { index: false, follow: false },
};

export default function SearchPageRo() {
  const t = SEARCH_STRINGS.ro;
  return (
    <>
      <HeaderNew locale="ro" />
      <main className="border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        <div className="pofo-container py-10 md:py-14">
          <h1 className="alt-font text-balance text-[24px] font-semibold uppercase leading-[30px] text-pofo-heading md:text-[28px] md:leading-[34px]">
            {t.title}
          </h1>
          <p className="mb-6 mt-2 text-[15px] text-pofo-text">{t.pageIntro}</p>
          <Suspense fallback={<div className="min-h-[12rem]" aria-hidden />}>
            <SearchResultsView locale="ro" />
          </Suspense>
        </div>
      </main>
      <FooterNew locale="ro" />
    </>
  );
}
