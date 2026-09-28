'use client';

import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type Animation = 'fade' | 'fade-up' | 'fade-left' | 'fade-right';
type Delay = 0 | 200 | 400;

const ANIMATION_CLASS: Record<Animation, string> = {
  fade: 'animate-fade-in',
  'fade-up': 'animate-fade-in-up',
  'fade-left': 'animate-fade-in-left',
  'fade-right': 'animate-fade-in-right',
};

/**
 * Pofo-like scroll reveal (replacement for WOW.js + animate.css) without dependencies.
 * Do NOT wrap above-the-fold / LCP elements. Disabled for prefers-reduced-motion.
 */
function SectionReveal({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  as = 'div',
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: Animation;
  delay?: Delay;
  as?: 'div' | 'li';
  /** Render visible without animation (use for above-the-fold / LCP content). */
  immediate?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    const el = ref.current;
    if (!el || immediate) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [immediate]);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn(
        'motion-safe-reveal',
        immediate ? null : visible ? ANIMATION_CLASS[animation] : 'opacity-0',
        className,
      )}
      style={visible && delay && !immediate ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export default SectionReveal;
