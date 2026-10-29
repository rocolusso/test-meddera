import React from 'react';

import type { HeroBannerLocale } from '@/lib/hero-banner/copy';
import { LIPS_END_BANNER_COPY } from '@/lib/hero-banner/lips-end-copy';

import EndBannerMotion from './EndBannerMotion';

import './lips-end-banner.css';

/** Source id of the button in GA4 (`cta_source`) and in Telegram. Must be in LEAD_QUIZ_SOURCES. */
export const LIPS_END_BANNER_SOURCE = 'lips_end_banner';

/**
 * Banner at the end of a lip enlargement page: "will lip enlargement suit you?", five questions of
 * the quiz passing one by one in a card, and a button that is always on screen. Server component:
 * the text is real HTML, the animation is CSS only (transform and opacity), the height is fixed per
 * breakpoint. The only script is EndBannerMotion (pause off screen). The button opens the lead quiz
 * through `data-open-quiz`; the page already tells the quiz it is about lips.
 * No headings, so the headings of the page stay as they are wherever it stands.
 *
 * `placement="page"` (default): a block of its own outside `<main>` (the service page).
 * `placement="inline"`: inside the text of a hub or an article, between two sections; it breaks out of
 * the narrow text column to the full width of the window (see `.eb--inline`).
 */
export default function LipsEndBanner({ locale, placement = 'page' }: { locale: HeroBannerLocale; placement?: 'page' | 'inline' }) {
  const t = LIPS_END_BANNER_COPY[locale];
  const total = t.questions.length;

  return (
    <section data-end-banner aria-label={t.label} className={placement === 'inline' ? 'eb eb--inline' : 'eb'}>
      <div className="eb__glow" aria-hidden="true" />
      <div className="eb__in">
        <div className="eb__main">
          <p className="eb__title">{t.title}</p>
          <p className="eb__sub">{t.sub}</p>
          <div className="eb__act">
            <button
              type="button"
              className="eb__cta"
              data-open-quiz
              data-cta-source={LIPS_END_BANNER_SOURCE}
              data-cta-procedure="lips"
            >
              {t.cta}
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="eb__note">{t.note}</span>
          </div>
        </div>

        <div className="eb__card">
          <div className="eb__top" aria-hidden="true">
            <span className="eb__cnt">
              {t.questions.map((q, i) => (
                <span key={q.key} className="eb__c" style={{ '--n': i } as React.CSSProperties}>
                  {`${i + 1} ${t.of} ${total}`}
                </span>
              ))}
            </span>
            <span className="eb__dots">
              {t.questions.map((q, i) => (
                <i key={q.key} className={`eb__dot eb__dot--${i}`} />
              ))}
            </span>
          </div>
          <div className="eb__qs">
            {t.questions.map((q, i) => (
              <p key={q.key} className="eb__q" style={{ '--n': i } as React.CSSProperties}>
                {q.text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <EndBannerMotion />
    </section>
  );
}
