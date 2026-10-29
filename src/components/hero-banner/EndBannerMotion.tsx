'use client';

import { useEffect } from 'react';

/**
 * Pauses the animation of the banner at the end of the lip pages while it is off screen or the tab is
 * hidden. Without JavaScript the animation simply keeps running. Renders nothing. It looks only for
 * `[data-end-banner]`, so it does not touch the top banner of the same page.
 */
export default function EndBannerMotion() {
  useEffect(() => {
    const banner = document.querySelector<HTMLElement>('[data-end-banner]');
    if (!banner) return undefined;

    let inView = false;
    const apply = () => {
      banner.setAttribute('data-paused', inView && !document.hidden ? 'false' : 'true');
    };

    const observer = new IntersectionObserver((entries) => {
      const last = entries[entries.length - 1];
      if (last) {
        inView = last.isIntersecting;
        apply();
      }
    });
    observer.observe(banner);
    document.addEventListener('visibilitychange', apply);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', apply);
      banner.removeAttribute('data-paused');
    };
  }, []);

  return null;
}
