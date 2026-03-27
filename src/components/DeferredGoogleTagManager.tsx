'use client';

import Script from 'next/script';

const GTM_ID = 'GTM-KFCP3D5F';

type Props = {
  /** From CSP proxy (x-nonce); required for strict script-src with nonce + strict-dynamic. */
  nonce?: string;
};

/**
 * Same behaviour as @next/third-parties/google GoogleTagManager, but scripts use
 * strategy="lazyOnload" so GTM/gtag load after window load (smaller main-thread cost, better PSI).
 */
export default function DeferredGoogleTagManager({ nonce }: Props) {
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
