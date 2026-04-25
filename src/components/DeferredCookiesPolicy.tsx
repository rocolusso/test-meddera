'use client';

import { useEffect, useState } from 'react';
import CookiesPolicy from '@/components/CookiesPolicy';

/**
 * Delays cookies banner mount until browser idle to reduce early main-thread work.
 */
export default function DeferredCookiesPolicy() {
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

  return <CookiesPolicy />;
}
