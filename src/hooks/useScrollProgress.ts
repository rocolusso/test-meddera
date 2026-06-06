import { useEffect, useState } from 'react';

function computeScrollProgress(): number {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 0) return 0;
  return Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100));
}

const LERP = 0.2;
const EPSILON = 0.05;

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let displayed = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tick = () => {
      const target = computeScrollProgress();
      const delta = target - displayed;

      if (reduceMotion || Math.abs(delta) <= EPSILON) {
        displayed = target;
      } else {
        displayed += delta * LERP;
      }

      setProgress(displayed);

      if (!reduceMotion && Math.abs(target - displayed) > EPSILON) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    const kick = () => {
      if (rafId === 0) {
        rafId = requestAnimationFrame(tick);
      }
    };

    kick();

    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick);

    return () => {
      if (rafId !== 0) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', kick);
      window.removeEventListener('resize', kick);
    };
  }, []);

  return progress;
}
