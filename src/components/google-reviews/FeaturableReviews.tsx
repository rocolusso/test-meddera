'use client';

import React, { useEffect, useState } from 'react';
import { ReactGoogleReviews, type ReactGoogleReview } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';

export type FeaturableReviewsProps = {
  locale: 'ru' | 'ro';
  reviews: ReactGoogleReview[];
  totalReviewCount: number;
  averageRating: number;
  /** Link to the clinic card on Google Maps; '' hides the link of the badge. */
  cardUrl: string;
};

const COPY = {
  ru: {
    badge: 'Рейтинг Google',
    sub: (n: number) => `На основе ${n} ${n % 10 === 1 && n % 100 !== 11 ? 'отзыва' : 'отзывов'}`,
    intl: 'ru',
  },
  ro: {
    badge: 'Rating Google',
    sub: (n: number) => (n === 1 ? 'Pe baza unei recenzii' : `Pe baza a ${n} recenzii`),
    intl: 'ro',
  },
} as const;

/**
 * Cards per row by window width. react-slick (inside the library) applies its responsive table only after the
 * window crosses a breakpoint, never for the width the page loads at, so on a phone it would show three cramped
 * cards at first. We choose the number ourselves and remount the carousel when it changes; the table of the
 * library gives the same numbers for the breakpoints it knows (1 up to 640px, 2 up to 768px).
 */
function itemsFor(width: number): number {
  if (width <= 640) return 1;
  if (width < 1024) return 2;
  return 3;
}

/**
 * No cutting of the text (maxCharacters is far above the 4096 characters Google allows): the library cuts with
 * /[^a-zA-Z0-9]+$/, which removes every Cyrillic letter at the end and leaves just "..." for a long review.
 */

/** "1 год назад" instead of the library default ("1 лет назад" in the widget, English in the library). */
function relativeDate(date: Date, intl: string): string {
  const rtf = new Intl.RelativeTimeFormat(intl, { numeric: 'always' });
  const days = Math.round((date.getTime() - Date.now()) / 86400000);
  const abs = Math.abs(days);
  if (abs < 1) return rtf.format(0, 'day');
  if (abs < 7) return rtf.format(days, 'day');
  if (abs < 30) return rtf.format(Math.round(days / 7), 'week');
  if (abs < 365) return rtf.format(Math.round(days / 30), 'month');
  return rtf.format(Math.round(days / 365), 'year');
}

/**
 * Carousel and rating badge of the reviews. Loaded lazily by FeaturableReviewsLazy (never in the first
 * screen bundle). The reviews are in Russian (the originals), also on the Romanian page, hence lang="ru".
 */
export default function FeaturableReviews({ locale, reviews, totalReviewCount, averageRating, cardUrl }: FeaturableReviewsProps) {
  const t = COPY[locale];
  const [items, setItems] = useState(() => itemsFor(typeof window === 'undefined' ? 1280 : window.innerWidth));
  useEffect(() => {
    const onResize = () => setItems(itemsFor(window.innerWidth));
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const common = {
    reviews,
    totalReviewCount,
    averageRating,
    theme: 'light' as const,
    logoVariant: 'icon' as const,
    nameDisplay: 'firstAndLastInitials' as const,
    accessibility: true,
  };

  return (
    <div className="gr__wrap" lang="ru" data-gr-ready>
      <ReactGoogleReviews
        {...common}
        layout="badge"
        profileUrl={cardUrl || undefined}
        badgeLabel={t.badge}
        badgeSubheadingFormatter={t.sub}
      />
      <div className="gr__carousel">
        <ReactGoogleReviews
          key={items}
          {...common}
          layout="carousel"
          carouselAutoplay={false}
          showDots
          maxItems={items}
          maxCharacters={10000}
          dateDisplay="relative"
          getRelativeDate={(d: Date) => relativeDate(d, t.intl)}
        />
      </div>
    </div>
  );
}
