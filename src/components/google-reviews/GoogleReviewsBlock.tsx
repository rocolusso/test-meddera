import React from 'react';
import Link from 'next/link';

import {
  GOOGLE_MAPS_BROWSER_KEY,
  GOOGLE_PLACE_ID,
  isGoogleReviewsEnabled,
  REVIEWS_PATH,
} from '@/lib/google-reviews/config';

import GooglePlaceDetails from './GooglePlaceDetails';

import './google-reviews.css';

/** Source id of the button in GA4 (`cta_source`) and in Telegram. Must be in LEAD_QUIZ_SOURCES. */
export const REVIEWS_BLOCK_SOURCE = 'reviews_block';

const COPY = {
  ru: {
    label: 'Отзывы пациентов из Google',
    title: 'Отзывы пациентов из Google',
    sub: 'Рейтинг и отзывы показывает сам Google из карточки клиники. Мы их не редактируем и не отбираем.',
    cta: 'Записаться на консультацию',
    all: 'Страница с отзывами',
  },
  ro: {
    label: 'Recenziile pacienților din Google',
    title: 'Recenziile pacienților din Google',
    sub: 'Ratingul și recenziile sunt afișate de Google din cardul clinicii. Noi nu le editem și nu le selectăm.',
    cta: 'Programare la consultație',
    all: 'Pagina cu recenzii',
  },
} as const;

/**
 * Google reviews: the element of Google with the rating and the reviews, and next to it a button to book. Shows
 * nothing unless GOOGLE_REVIEWS_ENABLED=true and the key and the Place ID are set. `variant="home"`: text, buttons and the element side by side;
 * `variant="page"`: only the element, inside the text of the reviews page. The title is a paragraph, not a
 * heading, so the headings of the page stay as they are.
 */
export default function GoogleReviewsBlock({ locale, variant }: { locale: 'ru' | 'ro'; variant: 'home' | 'page' }) {
  // no key or Place ID: nothing to show, so no empty block either
  if (!isGoogleReviewsEnabled() || !GOOGLE_MAPS_BROWSER_KEY || !GOOGLE_PLACE_ID) return null;
  const t = COPY[locale];

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
        <GooglePlaceDetails locale={locale} />
      </div>
    </section>
  );
}
