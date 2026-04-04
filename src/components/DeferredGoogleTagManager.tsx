'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GTM_ID = 'GTM-KFCP3D5F';

type Props = {
  /** From CSP proxy (x-nonce); required for strict script-src with nonce + strict-dynamic. */
  nonce?: string;
};

/**
 * GTM after window load (lazyOnload) and after requestIdleCallback — reduces overlap with main-thread work vs loading immediately after load.
 */
export default function DeferredGoogleTagManager({ nonce }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId: number | undefined;
    let fallbackId: ReturnType<typeof setTimeout> | undefined;

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
        nonce={nonce}
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
        nonce={nonce}
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        data-ntpc="GTM"
      />
    </>
  );
}
