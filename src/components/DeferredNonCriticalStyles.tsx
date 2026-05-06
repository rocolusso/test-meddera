'use client';

import { useEffect } from 'react';

const NON_CRITICAL_ID = 'non-critical-css';

export default function DeferredNonCriticalStyles() {
  useEffect(() => {
    if (document.getElementById(NON_CRITICAL_ID)) return;

    const link = document.createElement('link');
    link.id = NON_CRITICAL_ID;
    link.rel = 'stylesheet';
    link.href = '/styles/non-critical.css';
    document.head.appendChild(link);
  }, []);

  return null;
}
