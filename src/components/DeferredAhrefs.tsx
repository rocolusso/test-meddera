'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const AHREFS_KEY = 'rXIslMFNaqfd12QEhlizeQ';

/**
 * Loads Ahrefs analytics after browser idle to reduce contention with initial page work.
 */
export default function DeferredAhrefs() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId: number | undefined;
    let fallbackId: number | undefined;

    const run = () => setReady(true);

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(run, { timeout: 5000 });
    } else {
      fallbackId = window.setTimeout(run, 5000);
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
      id="ahrefs-analytics"
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={AHREFS_KEY}
      strategy="lazyOnload"
    />
  );
}
