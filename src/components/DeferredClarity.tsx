'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

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
export default function DeferredClarity() {
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
      setReady(true);
    };

    interactionHandler = () => run();
    window.addEventListener('pointerdown', interactionHandler, true);
    window.addEventListener('keydown', interactionHandler, true);
    window.addEventListener('touchstart', interactionHandler, true);

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(run, { timeout: 12000 });
    } else {
      fallbackId = window.setTimeout(run, 12000);
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
    <Script
      id="microsoft-clarity"
      strategy="lazyOnload"
      type="text/partytown"
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: CLARITY_BOOTSTRAP }}
    />
  );
}
