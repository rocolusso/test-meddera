import React from 'react';
import Link from 'next/link';

import {
  getFeaturableWidgetId,
  isGoogleReviewsEnabled,
  REVIEWS_PATH,
} from '@/lib/google-reviews/config';
import { getFeaturableReviews } from '@/lib/google-reviews/featurable';

import FeaturableReviewsLazy from './FeaturableReviewsLazy';

import './google-reviews.css';

/** Source id of the button in GA4 (`cta_source`) and in Telegram. Must be in LEAD_QUIZ_SOURCES. */
export const REVIEWS_BLOCK_SOURCE = 'reviews_block';

const IS_DEV = process.env.NODE_ENV !== 'production';

const COPY = {
  ru: {
    label: 'Отзывы пациентов из Google',
    title: 'Отзывы пациентов из Google',
    sub: 'Отзывы из карточки клиники в Google в том виде, в каком их оставили пациенты. Мы ничего не правим.',
    cta: 'Записаться на консультацию',
    all: 'Страница с отзывами',
    note: '',
  },
  ro: {
    label: 'Recenziile pacienților din Google',
    title: 'Recenziile pacienților din Google',
    sub: 'Recenziile din cardul clinicii pe Google, exact așa cum le-au lăsat pacienții. Noi nu modificăm nimic.',
    cta: 'Programare la consultație',
    all: 'Pagina cu recenzii',
    note: 'Recenzii în limba originală (rusă)',
  },
} as const;

/**
 * Google reviews: rating badge and carousel of the reviews (from Featurable, read on the server), and next to
 * them a button to book. Shows nothing unless GOOGLE_REVIEWS_ENABLED=true, FEATURABLE_WIDGET_ID is set and the
 * API answered with reviews; when it fails the reason goes to the build log (and, in development only, to the
 * page). `variant="home"`: text, buttons and the reviews side by side; `variant="page"`: only the reviews,
 * inside the text of the reviews page. The title is a paragraph, not a heading, so the headings of the page
 * stay as they are.
 */
export default async function GoogleReviewsBlock({ locale, variant }: { locale: 'ru' | 'ro'; variant: 'home' | 'page' }) {
  if (!isGoogleReviewsEnabled() || !getFeaturableWidgetId()) return null;
  const t = COPY[locale];

  const result = await getFeaturableReviews();
  if (!result.data) {
    console.warn(`[google-reviews] block hidden: ${result.reason}`);
    if (!IS_DEV) return null;
    // In development the block stays on the page with the reason, so a missing block is never a mystery.
    return (
      <section data-google-reviews aria-label={t.label} className={`gr gr--${variant}`}>
        <div className="gr__in" role="note" style={{ border: '1px dashed #d33', padding: 12, fontSize: 13, color: '#d33' }}>
          Google reviews (dev only): 
          {' '}
          {result.reason}
        </div>
      </section>
    );
  }

  return (
    <section data-google-reviews aria-label={t.label} className={`gr gr--${variant}`}>
      <div className="gr__in">
        {variant === 'home' ? (
          <div className="gr__text">
            <p className="gr__title alt-font">{t.title}</p>
            <p className="gr__sub">{t.sub}</p>
            <div className="gr__act">
              <button
                type="button"
                className="gr__cta"
                data-open-quiz
                data-cta-source={REVIEWS_BLOCK_SOURCE}
              >
                {t.cta}
              </button>
              <Link href={REVIEWS_PATH[locale]} className="gr__all">
                {t.all}
              </Link>
            </div>
          </div>
        ) : null}
        <div className="gr__col">
          <FeaturableReviewsLazy
            locale={locale}
            reviews={result.data.reviews}
            totalReviewCount={result.data.totalReviewCount}
            averageRating={result.data.averageRating}
          />
          {t.note ? <p className="gr__note">{t.note}</p> : null}
        </div>
      </div>
    </section>
  );
}
