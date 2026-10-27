'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';

import { getLocaleFromPath } from '@/components/lead/leadFormConstants';
import { isAnyOverlayOpen, subscribeOverlayLock } from '@/lib/overlay-lock';

/** The cue fades out once the page has moved more than this, and returns only at the very top. */
const HIDE_AFTER_PX = 24;
const SHOW_BELOW_PX = 2;
const SHOW_DELAY_MS = 800;
/** A page that barely exceeds the window has nothing to invite the visitor to scroll to. */
const MIN_EXTRA_HEIGHT_PX = 120;

const LABEL = { ru: 'Листайте', ro: 'Derulați' } as const;

function useOverlayOpen(): boolean {
  return useSyncExternalStore(subscribeOverlayLock, isAnyOverlayOpen, () => false);
}

function isSearchPath(pathname: string): boolean {
  return /^\/(ro\/)?search(\/|$)/.test(pathname);
}

/**
 * A quiet "scroll down" hint at the bottom centre of the first screen: three chevrons flash one
 * after another. It appears 0.8 s after the page loads, fades out on the first real scroll and comes
 * back only when the visitor returns to the very top. It is decorative (aria-hidden, no pointer
 * events), sends nothing to GA4, and stays away from /ads, /search, pages that fit the window and
 * any open overlay. It sits above the bottom dock, whose height is published as --bottom-dock-h.
 */
export default function ScrollCue() {
  const pathname = usePathname() ?? '/';
  const overlayOpen = useOverlayOpen();
  const excluded = pathname.startsWith('/ads') || isSearchPath(pathname);
  const [ready, setReady] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [tall, setTall] = useState(false);

  useEffect(() => {
    if (excluded) return undefined;
    setReady(false);
    // Reloaded or opened by an anchor in the middle of a page: the visitor is already scrolling.
    setAtTop(window.scrollY <= HIDE_AFTER_PX);

    const timer = window.setTimeout(() => setReady(true), SHOW_DELAY_MS);

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        setAtTop((prev) => (prev ? y <= HIDE_AFTER_PX : y <= SHOW_BELOW_PX));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const measure = () => {
      const doc = document.documentElement;
      setTall(doc.scrollHeight - window.innerHeight >= MIN_EXTRA_HEIGHT_PX);
    };
    measure();
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure);
    observer?.observe(document.body);
    window.addEventListener('resize', measure);

    return () => {
      window.clearTimeout(timer);
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      observer?.disconnect();
    };
  }, [pathname, excluded]);

  if (excluded || !ready) return null;

  const locale = getLocaleFromPath(pathname);
  const visible = atTop && tall && !overlayOpen;

  return (
    <div
      aria-hidden="true"
      data-scroll-cue
      data-visible={visible ? 'true' : 'false'}
      className="scroll-cue pointer-events-none fixed left-1/2 z-[900] flex flex-col items-center text-foreground bottom-[calc(var(--bottom-dock-h,0px)+14px)] md:bottom-[calc(var(--bottom-dock-h,0px)+30px)]"
    >
      <span className="scroll-cue__chevrons flex flex-col items-center">
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            className="scroll-cue__chevron -mt-1.5 first:mt-0"
            width="30"
            height="16"
            viewBox="0 0 30 16"
            fill="none"
            style={{ animationDelay: `${i * 0.2}s`, opacity: 0.35 + i * 0.3 }}
          >
            <path d="M2 2l13 12L28 2" stroke="var(--accent-text)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ))}
      </span>
      <span className="mt-3 whitespace-nowrap text-[10px] font-semibold uppercase leading-3 tracking-[0.16em]">{LABEL[locale]}</span>
    </div>
  );
}
