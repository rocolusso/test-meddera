import React from 'react';

import { ContentArticleBody } from '@/components/new-ui/ContentPageShell';

import GoogleReviewsBlock, { REVIEWS_BLOCK_SOURCE } from './GoogleReviewsBlock';
import SeoSection from './SeoSection';
import roCopy from './copy/ro.json';
import ruCopy from './copy/ru.json';

type Section = { h2: string; p: string[]; list?: string[] };
export type ReviewsCopy = {
  meta: { title: string; description: string };
  h1: string;
  intro: string[];
  sections: Section[];
  faq: { h2: string; items: { q: string; a: string }[] };
  cta: { h2: string; p: string; button: string };
  readMore: { expand: string; collapse: string };
};

export const REVIEWS_COPY: Record<'ru' | 'ro', ReviewsCopy> = { ru: ruCopy, ro: roCopy };

/**
 * The reviews page (/otzyvy, /ro/recenzii): h1, the Google block, the booking button, then the whole text in
 * SeoSection (lead paragraph visible, the rest under "Read more"). The text is in copy/ru.json and copy/ro.json,
 * which scripts/reviews-text-metrics.mjs measures (volume, key frequency). One h1 on the page.
 */
export default function ReviewsPageContent({ locale }: { locale: 'ru' | 'ro' }) {
  const c = REVIEWS_COPY[locale];

  return (
    <ContentArticleBody className="!pt-[40px] md:!pt-[60px]">
      <h1>{c.h1}</h1>

      <GoogleReviewsBlock locale={locale} variant="page" />

      <div className="flex justify-center">
        <button
          type="button"
          data-open-quiz
          data-cta-source={REVIEWS_BLOCK_SOURCE}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-8 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition active:scale-95"
        >
          {c.cta.button}
        </button>
      </div>

      <SeoSection copy={c} />
    </ContentArticleBody>
  );
}
