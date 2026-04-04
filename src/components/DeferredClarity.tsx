'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

type Props = {
  nonce?: string;
};

const CLARITY_BOOTSTRAP = `
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "w2ch4v2j05");
`;

/**
 * Loads Microsoft Clarity after the browser is idle (or timeout), so it does not compete with LCP/TBT.
 */
export default function DeferredClarity({ nonce }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId: number | undefined;
    let fallbackId: ReturnType<typeof setTimeout> | undefined;

    const run = () => setReady(true);

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(run, { timeout: 4000 });
    } else {
      fallbackId = window.setTimeout(run, 4000);
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
    <Script
      id="microsoft-clarity"
      strategy="lazyOnload"
      nonce={nonce}
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: CLARITY_BOOTSTRAP }}
    />
  );
}
