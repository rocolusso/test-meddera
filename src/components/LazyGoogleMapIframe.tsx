'use client';

import React, { useEffect, useRef, useState } from 'react';

import { MAP_EMBED_URL } from '@/lib/google-map-embed';

type LazyGoogleMapIframeProps = {
  title?: string;
  width?: number | string;
  height?: number;
  className?: string;
};

export default function LazyGoogleMapIframe({
  title = 'contact map',
  width = '100%',
  height = 450,
  className = 'max-w-[100%] gmap_iframe',
}: LazyGoogleMapIframeProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc(MAP_EMBED_URL);
          observer.disconnect();
        }
      },
      { rootMargin: '240px', threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="w-full">
      {src ? (
        <iframe
          frameBorder={0}
          scrolling="no"
          title={title}
          className={className}
          width={width}
          height={height}
          src={src}
          loading="lazy"
        />
      ) : (
        <div
          className={`${className} bg-gray-200`}
          style={{
            width: typeof width === 'number' ? width : '100%',
            height,
            minHeight: height,
          }}
          aria-hidden
        />
      )}
    </div>
  );
}
