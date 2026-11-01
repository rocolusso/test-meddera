'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

import { ensureGtagShim, getGtmId } from '@/lib/ga4-transport';

/**
 * GTM after window load (lazyOnload) and after requestIdleCallback, to keep it off the critical path (PageSpeed).
 * The container id comes from NEXT_PUBLIC_GTM_ID. The layout renders this component only when isGtmEnabled().
 * window.gtag exists from the first render, so events fired before gtm.js arrives wait in dataLayer and are not lost.
 */
export default function DeferredGoogleTagManager() {
  const [ready, setReady] = useState(false);
  const gtmId = getGtmId();

  useEffect(() => {
    ensureGtagShim();
    let idleId: number | undefined;
    let fallbackId: number | undefined;
    let interactionHandler: (() => void) | undefined;

    const cleanupInteraction = () => {
      if (!interactionHandler) return;
      window.removeEventListener('pointerdown', interactionHandler, true);
      window.removeEventListener('keydown', interactionHandler, true);
      window.removeEventListener('touchstart', interactionHandler, true);
      interactionHandler = undefined;
    };

    const run = () => {
      cleanupInteraction();
      setReady(true);
    };

    interactionHandler = () => run();
    window.addEventListener('pointerdown', interactionHandler, true);
    window.addEventListener('keydown', interactionHandler, true);
    window.addEventListener('touchstart', interactionHandler, true);

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(run, { timeout: 3400 });
    } else {
      fallbackId = window.setTimeout(run, 3400);
    }

    return () => {
      cleanupInteraction();
      if (idleId != null && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      }
      if (fallbackId != null) {
        window.clearTimeout(fallbackId);
      }
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
