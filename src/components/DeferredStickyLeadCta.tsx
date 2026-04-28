'use client';

// import { useEffect, useState } from 'react';

import StickyLeadCta from '@/components/StickyLeadCta';

/**
 * Delays sticky lead CTA mount until browser idle.
 */
export default function DeferredStickyLeadCta() {
  // const [ready, setReady] = useState(false);
  //
  // useEffect(() => {
  //   let idleId: number | undefined;
  //   let fallbackId: number | undefined;
  //
  //   const run = () => setReady(true);
  //
  //   if (typeof window.requestIdleCallback === 'function') {
  //     idleId = window.requestIdleCallback(run, { timeout: 3200 });
  //   } else {
  //     fallbackId = window.setTimeout(run, 3200);
  //   }
  //
  //   return () => {
  //     if (idleId != null && typeof window.cancelIdleCallback === 'function') {
  //       window.cancelIdleCallback(idleId);
  //     }
  //     if (fallbackId != null) {
  //       window.clearTimeout(fallbackId);
  //     }
  //   };
  // }, []);
  //
  // if (!ready) {
  //   return null;
  // }

  return <StickyLeadCta />;
}
