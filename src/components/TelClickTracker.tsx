'use client';

import { useEffect } from 'react';

import { sendGa4Event } from '@/lib/ga4-worker-client';

export default function TelClickTracker() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a[href^='tel:']") as HTMLAnchorElement | null;

      if (anchor) {
        const phone = anchor.getAttribute('href')?.replace('tel:', '');
        // Links that name their own event/source (data-cta-*) are tracked as that event;
        // any other tel: link keeps the original phone_click_simple1 event.
        const eventName = anchor.dataset.ctaEvent || 'phone_click_simple1';
        const ctaSource = anchor.dataset.ctaSource || 'inline_tel';
        const procedure = anchor.dataset.ctaProcedure;

        sendGa4Event(eventName, {
          button_name: 'phone_click_url',
          event_label: `click_btn${phone}`,
          cta_source: ctaSource,
          ...(procedure ? { procedure } : {}),
        });
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return null;
}
