'use client';

import React, { useEffect, useRef, useState } from 'react';

import { MAP_EMBED_URL } from '@/lib/google-map-embed';

const LOADING_LABEL: Record<'ru' | 'ro', string> = {
  ru: 'Загрузка…',
  ro: 'Se încarcă…',
};

type LazyGoogleMapIframeProps = {
  title?: string;
  width?: number | string;
  height?: number;
  className?: string;
  /** RU / RO copy for loading state */
  locale?: 'ru' | 'ro';
};

function LoadingOverlay({
  height,
  widthStyle,
  label,
}: {
  height: number;
  widthStyle: React.CSSProperties['width'];
  label: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 bg-gray-100 text-gray-600"
      style={{
        width: widthStyle,
        height,
        minHeight: height,
      }}
      role="status"
      aria-live="polite"
    >
      <span
        className="inline-block size-10 rounded-full border-[3px] border-gray-200 border-t-green-600 animate-spin"
        aria-hidden
      />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

export default function LazyGoogleMapIframe({
  title = 'contact map',
  width = '100%',
  height = 450,
  className = 'max-w-[100%] gmap_iframe',
  locale = 'ru',
}: LazyGoogleMapIframeProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const loadingLabel = LOADING_LABEL[locale === 'ro' ? 'ro' : 'ru'];
  const widthStyle: React.CSSProperties['width'] = typeof width === 'number' ? width : '100%';

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
      {!src ? (
        <LoadingOverlay
          height={height}
          widthStyle={widthStyle}
          label={loadingLabel}
        />
      ) : (
        <div
          className="relative w-full"
          style={{ minHeight: height }}
        >
          <iframe
            frameBorder={0}
            scrolling="no"
            title={title}
            className={`${className} ${!iframeLoaded ? 'opacity-0 pointer-events-none' : ''}`}
            width={width}
            height={height}
            src={src}
            loading="lazy"
            onLoad={() => setIframeLoaded(true)}
          />
          {!iframeLoaded && (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100/95"
              aria-hidden
            >
              <div className="flex flex-col items-center gap-3 text-gray-600">
                <span
                  className="inline-block size-10 rounded-full border-[3px] border-gray-200 border-t-green-600 animate-spin"
                  aria-hidden
                />
                <span className="text-sm font-medium">{loadingLabel}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
