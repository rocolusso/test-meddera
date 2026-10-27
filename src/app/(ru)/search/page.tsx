import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import FooterNew from '@/components/new-ui/FooterNew';
import HeaderNew from '@/components/new-ui/HeaderNew';
import SearchResultsView from '@/components/search/SearchResultsView';
import { SEARCH_UI_ENABLED } from '@/lib/search/config';
import { isSearchServerEnabled, warnOnSearchFlagMismatch } from '@/lib/search/server-config';
import { SEARCH_STRINGS } from '@/lib/search/strings';

export const metadata: Metadata = {
  title: 'Поиск по сайту | Meddera',
  robots: { index: false, follow: false },
};

export default function SearchPage() {
  warnOnSearchFlagMismatch();
  if (!SEARCH_UI_ENABLED || !isSearchServerEnabled()) notFound();

  const t = SEARCH_STRINGS.ru;
  return (
    <>
      <HeaderNew locale="ru" />
      <main className="border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        <div className="pofo-container pb-10 pt-[25px] md:pb-14">
          <h1 className="alt-font text-balance text-[24px] font-semibold uppercase leading-[30px] text-pofo-heading md:text-[28px] md:leading-[34px]">
            {t.title}
          </h1>
          <p className="mb-6 mt-2 text-[15px] text-pofo-text">{t.pageIntro}</p>
          <Suspense fallback={<div className="min-h-[12rem]" aria-hidden />}>
            <SearchResultsView locale="ru" />
          </Suspense>
        </div>
      </main>
      <FooterNew locale="ru" />
    </>
  );
}
