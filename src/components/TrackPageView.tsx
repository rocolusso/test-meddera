'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function TrackPageView() {
  const pathname = usePathname();

  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    if (lastTracked.current === pathname) return;

    lastTracked.current = pathname;

    fetch('/api/track', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        event: 'page_view',
        route: pathname,
      }),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
