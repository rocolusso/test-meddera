'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

import { isEnabled } from '@/lib/env-flags';

const GTM_ID = 'GTM-KFCP3D5F';

/**
 * GTM after window load (lazyOnload) + first interaction.
 *
 * Execution mode is selected at build time via NEXT_PUBLIC_GTM_USE_PARTYTOWN:
 *   - unset / "1" / "true" / "on" → loaded via Partytown (worker, TBT-friendly,
 *     but Tag Assistant / GTM Preview Mode cannot inspect window globals).
 *   - "0" / "false" / "off"       → loaded on the main thread so QA tools work.
 * Switching the variable requires a re-deploy.
 */
const USE_PARTYTOWN = isEnabled(process.env.NEXT_PUBLIC_GTM_USE_PARTYTOWN);

export default function DeferredGoogleTagManager() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
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
      // eslint-disable-next-line no-console
      console.info('[GTM] mode:', USE_PARTYTOWN ? 'partytown (worker)' : 'main thread');
      setReady(true);
    };

    interactionHandler = () => run();
    window.addEventListener('pointerdown', interactionHandler, true);
    window.addEventListener('keydown', interactionHandler, true);
    window.addEventListener('touchstart', interactionHandler, true);

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(run, { timeout: 3200 });
    } else {
      fallbackId = window.setTimeout(run, 3200);
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

  if (!ready) {
    return null;
  }

  return (
    <>
      <Script
        id="_next-gtm-init"
        strategy="lazyOnload"
        type={USE_PARTYTOWN ? 'text/partytown' : undefined}
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
        type={USE_PARTYTOWN ? 'text/partytown' : undefined}
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        data-ntpc="GTM"
      />
    </>
  );
}
