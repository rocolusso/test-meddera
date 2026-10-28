'use client';

import { useEffect } from 'react';

/**
 * Pauses the banner animation while the banner is off screen or the tab is hidden, so it costs
 * nothing once the visitor has scrolled past. Without JavaScript the animation simply keeps
 * running; the banner does not depend on this component. It renders nothing.
 */
export default function HeroBannerMotion() {
  useEffect(() => {
    const banner = document.querySelector<HTMLElement>('[data-hero-banner]');
    if (!banner) return undefined;

    let inView = true;
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
