'use client';

import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

/**
 * Subtle scroll-in; disabled when the user prefers reduced motion.
 */
function SectionReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
      { rootMargin: '80px 0px 120px 0px', threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default SectionReveal;
