'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import { sendGa4Event } from '@/lib/ga4-worker-client';

/**
 * Server-side page view log. A beacon: it must reach the server even when the visitor moves on at once, so it is not
 * tied to the effect and is never aborted.
 */
function sendServerPageView(route: string) {
  fetch('/api/track', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      event: 'page_view',
      route,
    }),
  }).catch(() => {});
}

export function TrackPageView() {
  const pathname = usePathname();

  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    if (lastTracked.current === pathname) return;

    lastTracked.current = pathname;

    sendServerPageView(pathname);

    // A 404 page marks itself (NotFoundView), so its page_view is not classified by the URL as a real page.
    const notFound = document.querySelector('[data-page-not-found]') !== null;
    sendGa4Event('page_view', {
      page_location: window.location.href,
      page_referrer: document.referrer,
      page_title: document.title,
      ...(notFound ? { page_type: 'not_found', content_slug: '' } : {}),
    });
  }, [pathname]);

  return null;
}
