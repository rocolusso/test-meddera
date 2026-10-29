'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { getLocaleFromPath } from '@/components/lead/leadFormConstants';
import { getLeadQuizPageTopic } from '@/components/lead/lead-quiz-store';
import { isCtaKey, type CtaKey } from '@/lib/cta/keys';
import {
  TEASER_MIN_VISIBLE_MS,
  TEASER_SCROLL_RATIO,
  isTeaserRoute,
  markTeaserShown,
  teaserAllowedByStorage,
  teaserAllowedForCountry,
} from '@/lib/cta/teaser-state';
import { isAnyOverlayOpen } from '@/lib/overlay-lock';

const TeaserCard = dynamic(() => import('./TeaserCard'), { ssr: false, loading: () => null });

const TICK_MS = 1000;
/** A tick longer than this (sleeping laptop, frozen tab) does not count as time spent on the page. */
const MAX_TICK_MS = 1500;
const GEO_TIMEOUT_MS = 3000;

/** '' = unknown. A failed or slow lookup must not decide against showing the teaser. */
async function fetchCountry(): Promise<string> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), GEO_TIMEOUT_MS);
  try {
    const res = await fetch('/api/geo', { cache: 'no-store', signal: controller.signal });
    if (!res.ok) return '';
    const data = (await res.json()) as { country?: unknown };
    return typeof data.country === 'string' ? data.country : '';
  } catch {
    return '';
  } finally {
    window.clearTimeout(timer);
  }
}

type Shown = { path: string; procedure: CtaKey | null };

/**
 * Decides when the scroll teaser appears on an article or a service page. It shows once the visitor
 * has scrolled past 60% of the page's main content, has spent 8 s on it with the tab in front, and
 * nothing else is open. The conditions are in docs/PLAN-CONV-01.md (C7). The card is a separate
 * lazy chunk, so a page where the teaser never shows loads only this host.
 */
export default function ScrollTeaserHost() {
  const pathname = usePathname() ?? '/';
  const locale = getLocaleFromPath(pathname);
  const [shown, setShown] = useState<Shown | null>(null);

  useEffect(() => {
    if (!isTeaserRoute(pathname)) return undefined;
    if (navigator.webdriver) return undefined;
    if (!teaserAllowedByStorage()) return undefined;

    let cancelled = false;
    let reached = false;
    let scrolled = window.scrollY > 0;
    let visibleMs = 0;
    let last = Date.now();
    let country: string | null = null;
    let checking = false;

    const main = document.querySelector('main') ?? document.body;

    // Invisible marker at 60% of the main content height, watched by an IntersectionObserver.
    const marker = document.createElement('div');
    marker.setAttribute('aria-hidden', 'true');
    marker.dataset.teaserMarker = '';
    marker.style.cssText = 'position:absolute;left:0;width:1px;height:1px;opacity:0;pointer-events:none;';
    document.body.appendChild(marker);

    const placeMarker = () => {
      const rect = main.getBoundingClientRect();
      const wanted = Math.round(rect.top + window.scrollY + rect.height * TEASER_SCROLL_RATIO);
      marker.style.top = `${wanted}px`;
      // body may be positioned or have a margin: correct by what was actually measured
      const actual = marker.getBoundingClientRect().top + window.scrollY;
      if (Math.abs(actual - wanted) > 1) marker.style.top = `${wanted + (wanted - Math.round(actual))}px`;
    };
    placeMarker();

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        // in view, or already above the viewport after a quick scroll
        if ((entry.isIntersecting || entry.boundingClientRect.top < 0) && scrolled) reached = true;
      }
    });
    observer.observe(marker);

    const onScroll = () => {
      scrolled = true;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Content (images, lazy blocks) changes the height: keep the marker at 60%.
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(placeMarker);
    resizeObserver?.observe(main);
    window.addEventListener('resize', placeMarker);

    const canShowNow = () =>
      document.visibilityState === 'visible' && !isAnyOverlayOpen() && teaserAllowedByStorage();

    const tryShow = async () => {
      checking = true;
      if (country === null) country = await fetchCountry();
      if (cancelled) return;
      if (!teaserAllowedForCountry(country)) {
        window.clearInterval(timer);
        return;
      }
      checking = false;
      // the visitor may have opened the menu or switched tabs during the lookup: next tick decides
      if (!canShowNow()) return;
      window.clearInterval(timer);
      const card = document.querySelector<HTMLElement>('[data-cta][data-procedure]');
      markTeaserShown();
      // No card on the page (the lip pages show the closing banner instead): fall back to the page topic.
      const cardProcedure = card?.dataset.procedure;
      setShown({
        path: pathname,
        procedure: isCtaKey(cardProcedure) ? cardProcedure : getLeadQuizPageTopic(),
      });
    };

    const timer = window.setInterval(() => {
      const now = Date.now();
      if (document.visibilityState === 'visible') visibleMs += Math.min(now - last, MAX_TICK_MS);
      last = now;
      if (reached && visibleMs >= TEASER_MIN_VISIBLE_MS && !checking && canShowNow()) {
        void tryShow();
      }
    }, TICK_MS);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', placeMarker);
      resizeObserver?.disconnect();
      observer.disconnect();
      marker.remove();
    };
  }, [pathname]);

  if (!shown || shown.path !== pathname) return null;
  return <TeaserCard pathname={pathname} locale={locale} procedure={shown.procedure} onHide={() => setShown(null)} />;
}
