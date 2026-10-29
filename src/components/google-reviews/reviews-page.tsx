import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import HeaderNew from '@/components/new-ui/HeaderNew';
import { isGoogleReviewsEnabled, REVIEWS_PATH } from '@/lib/google-reviews/config';
import { webPageJsonLd } from '@/lib/jsonld/web-page';
import { blogSocialMetadata } from '@/lib/site-og';

import ReviewsPageContent, { REVIEWS_COPY } from './ReviewsPageContent';

const ORIGIN = 'https://meddera.md';
const URLS = { ru: `${ORIGIN}${REVIEWS_PATH.ru}`, ro: `${ORIGIN}${REVIEWS_PATH.ro}` } as const;

export function reviewsMetadata(locale: 'ru' | 'ro'): Metadata {
  const { title, description } = REVIEWS_COPY[locale].meta;
  const canonical = URLS[locale];
  return {
    icons: { icon: '/favicon.ico' },
    alternates: {
      canonical,
      languages: { ru: URLS.ru, ro: URLS.ro, 'x-default': URLS.ru },
    },
    title,
    description,
    ...blogSocialMetadata({
      title,
      description,
      url: canonical,
      locale: locale === 'ru' ? 'ru_MD' : 'ro_MD',
      type: 'website',
      imageUrl: `${ORIGIN}/assets/img/about_2k.jpg`,
      imageAlt: title,
      imageWidth: 1200,
      imageHeight: 630,
    }),
  };
}

/**
 * The reviews page. A page of text with the Google block inside it; it exists only while
 * GOOGLE_REVIEWS_ENABLED=true (otherwise 404, and proxy.ts does not list the path). JSON-LD is a plain
 * WebPage with breadcrumbs: no Review or AggregateRating, because reviews of a business by itself are not
 * eligible for review stars and Google's terms do not allow storing its reviews.
 */
export default function ReviewsPage({ locale }: { locale: 'ru' | 'ro' }) {
  if (!isGoogleReviewsEnabled()) notFound();

  const { title, description } = REVIEWS_COPY[locale].meta;
  const jsonLd = webPageJsonLd({
    pageUrl: URLS[locale],
    name: title,
    description,
    inLanguage: locale === 'ru' ? 'ru-MD' : 'ro-MD',
    breadcrumbItems: [
      locale === 'ru'
        ? { name: 'Главная', item: `${ORIGIN}/` }
        : { name: 'Acasă', item: `${ORIGIN}/ro` },
      { name: locale === 'ru' ? 'Отзывы' : 'Recenzii', item: URLS[locale] },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderNew locale={locale} />
      <main className="bg-background">
        <ReviewsPageContent locale={locale} />
      </main>
      {locale === 'ru' ? <ContactsDynamicWrapperRu /> : <ContactsDynamicWrapperRo />}
      <FooterNew locale={locale} />
    </>
  );
}
