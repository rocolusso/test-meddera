'use client';

import { useEffect, useState } from 'react';
import FloatingCallButton from '@/components/FloatingCallButton';

/**
 * Delays floating call CTA until browser idle to keep initial main-thread work lower.
 */
export default function DeferredFloatingCallButton() {
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

  return <FloatingCallButton />;
}
