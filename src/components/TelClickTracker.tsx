'use client';

import { useEffect } from 'react';

export default function TelClickTracker() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a[href^='tel:']") as HTMLAnchorElement | null;

      if (anchor) {
        const phone = anchor.getAttribute('href')?.replace('tel:', '');

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'phone_click_simple1',
          'button_name': 'phone_click_url',
          'event_label': `click_btn${phone}`
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
