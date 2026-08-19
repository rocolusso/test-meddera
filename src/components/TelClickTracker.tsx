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

        sendGa4Event('phone_click_simple1', {
          button_name: 'phone_click_url',
          event_label: `click_btn${phone}`,
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
