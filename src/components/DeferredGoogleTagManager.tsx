'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

import { ensureGtagShim, getGtmId } from '@/lib/ga4-transport';

/** If the visitor does nothing at all, GTM still loads after this long. */
const GTM_FALLBACK_MS = 15000;
/** A scroll counts as a user action only when the page moved at least this far from where it opened. */
const SCROLL_THRESHOLD_PX = 40;

/**
 * GTM loads on the first user action (touch, click, key, wheel, scroll), or after GTM_FALLBACK_MS as a safety net.
 * It does NOT load on browser idle: PageSpeed never touches the page, and idle fires inside its measurement window,
 * which cost about 14 points of mobile Performance (97 to 83, gtag.js 199 KiB + gtm.js 126 KiB).
 * The container id comes from NEXT_PUBLIC_GTM_ID. The layout renders this component only when isGtmEnabled().
 * window.gtag exists from the first render, so events fired before gtm.js arrives wait in dataLayer and are not lost.
 */
export default function DeferredGoogleTagManager() {
  const [ready, setReady] = useState(false);
  const gtmId = getGtmId();

  useEffect(() => {
    ensureGtagShim();
    const startY = window.scrollY;
    let timerId: number | undefined;
    let removeListeners: (() => void) | undefined;

    const run = () => {
      removeListeners?.();
      removeListeners = undefined;
      if (timerId != null) window.clearTimeout(timerId);
      timerId = undefined;
      setReady(true);
    };

    const onScroll = () => {
      if (Math.abs(window.scrollY - startY) >= SCROLL_THRESHOLD_PX) run();
    };

    const options = { capture: true, passive: true } as const;
    window.addEventListener('pointerdown', run, options);
    window.addEventListener('keydown', run, options);
    window.addEventListener('touchstart', run, options);
    window.addEventListener('wheel', run, options);
    window.addEventListener('scroll', onScroll, options);
    removeListeners = () => {
      window.removeEventListener('pointerdown', run, options);
      window.removeEventListener('keydown', run, options);
      window.removeEventListener('touchstart', run, options);
      window.removeEventListener('wheel', run, options);
      window.removeEventListener('scroll', onScroll, options);
    };

    timerId = window.setTimeout(run, GTM_FALLBACK_MS);

    return () => {
      removeListeners?.();
      if (timerId != null) window.clearTimeout(timerId);
    };
  }, []);

  if (!ready || !gtmId) {
    return null;
  }

  return (
    <>
      <Script
        id="_next-gtm-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      })(window,'dataLayer');`,
        }}
      />
      <Script
        id="_next-gtm"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
        data-ntpc="GTM"
      />
    </>
  );
}
