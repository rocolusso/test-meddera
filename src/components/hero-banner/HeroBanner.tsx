import React, { Fragment } from 'react';
import Image from 'next/image';

import { HERO_BANNER_COPY, type HeroBannerLocale } from '@/lib/hero-banner/copy';
import { LIPS_BANNER_COPY } from '@/lib/hero-banner/lips-copy';

import doctorPhoto from '../../../public/assets/img/hero-doctor.jpg';

import HeroBannerMotion from './HeroBannerMotion';

import './hero-banner.css';

/** Source id of the banner button in GA4 (`cta_source`). Must be in LEAD_QUIZ_SOURCES. */
export const HERO_BANNER_SOURCE = 'hero_banner';

/** Same for the banner of the lip enlargement pages. */
export const LIPS_BANNER_SOURCE = 'lips_banner';

/** Text with *accent* parts and line breaks. The breaks only apply on wide screens. */
function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={line}>
          {i > 0 ? (
            <>
              <br className="hb__br" />
              {' '}
            </>
          ) : null}
          {line.split('*').map((part, j) => (j % 2 === 1 ? <em key={part}>{part}</em> : part))}
        </Fragment>
      ))}
    </>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9.5l4 4L15 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg width="30" height="16" viewBox="0 0 30 16" fill="none" aria-hidden="true">
      <path d="M2 2l13 12L28 2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Animated banner above the "About" block of the home pages. Server component: the text is real
 * HTML, the animation is CSS only (transform and opacity), the height is fixed per breakpoint in
 * the stylesheet, so nothing moves while it loads. The only script is HeroBannerMotion (pause
 * off screen). The button opens the lead quiz through `data-open-quiz`, like other server-rendered
 * buttons. It has no heading of its own: the page h1 lives in the "About" block.
 *
 * variant="lips": the same banner with the texts of the lip enlargement pages, its own source for
 * GA4 and Telegram and a lower height (class hb--lips), because it stands above a page and not in
 * place of its first screen. The home variant renders exactly what it always did.
 */
export default function HeroBanner({ locale, variant = 'home' }: { locale: HeroBannerLocale; variant?: 'home' | 'lips' }) {
  const lips = variant === 'lips';
  const t = (lips ? LIPS_BANNER_COPY : HERO_BANNER_COPY)[locale];

  return (
    <section data-hero-banner aria-label={t.label} className={lips ? 'hb hb--lips' : 'hb'}>
      <div className="hb__glow" aria-hidden="true" />
      <div className="hb__in">
        <p className="hb__sr">{t.thesis}</p>
        <span className="hb__tag" aria-hidden="true">
          <b />
          {t.tag}
        </span>

        <div className="hb__slot">
          <div className="hb__sc hb__sc--1" aria-hidden="true">
            <p className="hb__h">
              <Lines lines={t.scene1.title} />
            </p>
            <p className="hb__sub">{t.scene1.sub}</p>
          </div>

          <div className="hb__sc hb__sc--2" aria-hidden="true">
            <p className="hb__h">
              <Lines lines={t.scene2.title} />
            </p>
          </div>

          <div className="hb__sc hb__sc--3 hb__sc--thesis" aria-hidden="true">
            <p className="hb__h hb__h--big">
              <Lines lines={t.scene3.title} />
            </p>
            <span className="hb__bar" />
            <p className="hb__sub">{t.scene3.sub}</p>
          </div>

          <div className="hb__sc hb__sc--4" aria-hidden="true">
            <p className="hb__h hb__h--big">
              <Lines lines={t.scene4.title} />
            </p>
            <p className="hb__note">
              <Lines lines={t.scene4.note} />
            </p>
          </div>

          <div className="hb__sc hb__sc--5" aria-hidden="true">
            <div className="hb__steps">
              {t.scene5.steps.map((step) => (
                <span key={step} className="hb__step">
                  <i>
                    <Check />
                  </i>
                  {step}
                </span>
              ))}
            </div>
            <p className="hb__h hb__h--mid">
              <Lines lines={t.scene5.title} />
            </p>
          </div>

          <div className="hb__sc hb__sc--6 hb__sc--cta">
            <p className="hb__h hb__h--name" aria-hidden="true">
              {t.scene6.name}
            </p>
            <p className="hb__note hb__note--role" aria-hidden="true">
              {t.scene6.role}
            </p>
            <button
              type="button"
              className="hb__cta"
              data-open-quiz
              data-cta-source={lips ? LIPS_BANNER_SOURCE : HERO_BANNER_SOURCE}
            >
              {t.scene6.cta}
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hb__circ" aria-hidden="true">
          <span className="hb__ring" />
          <svg className="hb__dash" viewBox="0 0 340 340" fill="none">
            <circle cx="170" cy="170" r="164" stroke="#ff214f" strokeWidth="3" strokeDasharray="2 14" strokeLinecap="round" />
          </svg>
          <Image
            src={doctorPhoto}
            alt={t.photoAlt}
            priority
            fetchPriority="high"
            quality={75}
            sizes="(min-width: 1100px) 300px, (min-width: 768px) 220px, 202px"
            className="hb__photo"
          />
          {t.plates.map((plate, i) => (
            <span key={plate} className={`hb__plate hb__plate--${i + 1}`}>
              <span>{plate}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="hb__prog" aria-hidden="true">
        <i />
      </div>
      <div className="hb__chev" aria-hidden="true">
        <Chevron />
        <Chevron />
        <Chevron />
        <span>{t.scroll}</span>
      </div>
      <HeroBannerMotion />
    </section>
  );
}
