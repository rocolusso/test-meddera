'use client';

import { useEffect, useRef, useState } from 'react';

import { openLeadQuiz } from '@/components/lead/lead-quiz-store';
import { sendGa4Event } from '@/lib/ga4-worker-client';
import { CTA_ENTRIES, ctaButtonLabel, ctaForPathname, type CtaKey, type CtaLocale } from '@/lib/cta/registry';
import { pauseTeaser } from '@/lib/cta/teaser-state';
import { isAnyOverlayOpen } from '@/lib/overlay-lock';

import DoctorPhoto from './DoctorPhoto';

const SOURCE = 'teaser_scroll60';

const UI = {
  ru: { region: 'Предложение записаться', close: 'Закрыть' },
  ro: { region: 'Ofertă de programare', close: 'Închide' },
} as const;

type Props = {
  pathname: string;
  locale: CtaLocale;
  /** Key of the card at the end of the article or hub, when the page has one. */
  procedure: CtaKey | null;
  onHide: () => void;
};

/**
 * The scroll teaser: the doctor's photo, one sentence for the procedure of the page and a button
 * that opens the lead quiz. Phones: above the bottom dock. Desktop: above the left "Записаться онлайн" pill.
 * Closing or clicking pauses the teaser for 7 days; an overlay opening on top hides it without a pause.
 */
export default function TeaserCard({ pathname, locale, procedure, onHide }: Props) {
  const entry = ctaForPathname(pathname) ?? (procedure ? CTA_ENTRIES[procedure] : CTA_ENTRIES.consultation);
  const ui = UI[locale];
  const [visible, setVisible] = useState(false);
  const viewSent = useRef(false);

  useEffect(() => {
    if (viewSent.current) return;
    viewSent.current = true;
    sendGa4Event('cta_teaser_view', { cta_source: SOURCE, procedure: entry.key, scroll_pct: 60 });
  }, [entry.key]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const dismiss = () => {
    sendGa4Event('cta_teaser_dismiss', { cta_source: SOURCE, procedure: entry.key });
    pauseTeaser();
    onHide();
  };

  useEffect(() => {
    // the menu, search or quiz opened on top: the teaser steps aside (no pause, it counts as shown)
    const watcher = window.setInterval(() => {
      if (isAnyOverlayOpen()) onHide();
    }, 250);
    const onKeyDown = (event: KeyboardEvent) => {
      // Esc closes only the top layer: while something else is open it is not ours
      if (event.key === 'Escape' && !isAnyOverlayOpen()) dismiss();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearInterval(watcher);
      window.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const open = () => {
    sendGa4Event('cta_teaser_click', { cta_source: SOURCE, procedure: entry.key });
    pauseTeaser();
    onHide();
    openLeadQuiz({ source: SOURCE, procedure: entry.key });
  };

  return (
    <div
      role="region"
      aria-label={ui.region}
      data-scroll-teaser
      data-procedure={entry.key}
      className={`fixed inset-x-4 bottom-[calc(var(--bottom-dock-h,0px)+84px)] z-[990] flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-xl transition duration-300 motion-reduce:transition-none md:inset-x-auto md:bottom-44 md:left-6 md:w-[360px] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      }`}
    >
      <DoctorPhoto size={48} className="size-12 border-2 border-white shadow-md" />
      <div className="min-w-0 flex-1">
        <p className="mb-3 pr-8 text-[15px] leading-[22px] text-pofo-heading">{entry.teaser[locale]}</p>
        <button
          type="button"
          onClick={open}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-5 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition active:scale-95"
        >
          {ctaButtonLabel(entry, locale)}
        </button>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label={ui.close}
        className="absolute right-1 top-1 inline-flex size-11 items-center justify-center rounded-full text-muted-foreground transition hover:text-pofo-heading"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
}
