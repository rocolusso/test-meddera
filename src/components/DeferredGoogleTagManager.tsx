'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GTM_ID = 'GTM-KFCP3D5F';

/**
 * GTM after window load (lazyOnload) and after requestIdleCallback — reduces overlap with main-thread work vs loading immediately after load.
 */
export default function DeferredGoogleTagManager() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId: number | undefined;
    let fallbackId: number | undefined;

    const run = () => setReady(true);

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(run, { timeout: 2500 });
    } else {
      fallbackId = window.setTimeout(run, 2500);
    }

    return () => {
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
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        data-ntpc="GTM"
      />
    </>
  );
}
