'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

import type { FeaturableReviewsProps } from './FeaturableReviews';

/** The carousel library (react-slick, emotion) is a separate chunk, requested only when the block is near the screen. */
const FeaturableReviews = dynamic(() => import('./FeaturableReviews'), {
  ssr: false,
  // the placeholder stays while the chunk loads, so the height of the block never collapses to zero in between
  loading: () => <div className="gr__ph" aria-hidden />,
});

/**
 * Renders a placeholder of fixed height first, then the carousel once the block is within 400px of the
 * viewport, so the library does not weigh on the first screen and the page does not jump.
 */
export default function FeaturableReviewsLazy(props: FeaturableReviewsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="gr__lazy">
      {near ? <FeaturableReviews {...props} /> : <div className="gr__ph" aria-hidden />}
    </div>
  );
}
