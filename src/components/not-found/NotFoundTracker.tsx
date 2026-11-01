'use client';

import { useEffect } from 'react';

import { sendGa4Event } from '@/lib/ga4-worker-client';

/**
 * GA4 event `page_not_found` with the missing address and where the visitor came from (PLAN 404L-01).
 * The page_view of this page gets page_type=not_found in TrackPageView (it reads the data-page-not-found marker).
 */
export default function NotFoundTracker() {
  useEffect(() => {
    sendGa4Event('page_not_found', {
      page_type: 'not_found',
      missing_path: `${window.location.pathname}${window.location.search}`.slice(0, 200),
      page_referrer: document.referrer.slice(0, 300),
    });
  }, []);

  return null;
}
