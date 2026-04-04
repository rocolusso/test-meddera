'use client';

import React, { useEffect, useRef, useState } from 'react';

import { MAP_EMBED_URL } from '@/lib/google-map-embed';
import { cn } from '@/lib/utils';

const LOADING_LABEL: Record<'ru' | 'ro', string> = {
  ru: 'Загрузка…',
  ro: 'Se încarcă…',
};

type LazyGoogleMapIframeProps = {
  title?: string;
  /** @deprecated Ignored — map is always fluid width. Kept for ad pages compatibility. */
  width?: number | string;
  /** Approximate height on large screens; map uses responsive clamp. */
  height?: number;
  className?: string;
  /** Extra classes for the outer map frame (aspect / radius). */
  frameClassName?: string;
  /** RU / RO copy for loading state */
  locale?: 'ru' | 'ro';
};

function LoadingOverlay({
  label,
  className,
  style,
}: {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 bg-muted text-muted-foreground',
        className,
      )}
      style={style}
      role="status"
      aria-live="polite"
    >
      <span
        className="inline-block size-10 rounded-full border-[3px] border-border border-t-brand-gold animate-spin"
        aria-hidden
      />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

const MAP_FRAME_CLASS =
  'relative w-full overflow-hidden rounded-none bg-muted/40 shadow-inner ring-1 ring-border/30 sm:rounded-2xl min-h-[240px]';

export default function LazyGoogleMapIframe({
  title = 'contact map',
  height = 450,
  className,
  frameClassName,
  locale = 'ru',
}: LazyGoogleMapIframeProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const loadingLabel = LOADING_LABEL[locale === 'ro' ? 'ro' : 'ru'];

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

  const maxH = Math.min(560, Math.max(260, height));
  const frameStyle: React.CSSProperties = {
    height: `clamp(260px, 52vw, ${maxH}px)`,
  };

  const frameClasses = cn(MAP_FRAME_CLASS, frameClassName);
  const iframeClasses = cn(
    'absolute inset-0 block h-full w-full border-0',
    !iframeLoaded && 'pointer-events-none opacity-0',
    className,
  );

  return (
    <div ref={wrapRef} className="w-full">
      {!src ? (
        <LoadingOverlay label={loadingLabel} className={frameClasses} style={frameStyle} />
      ) : (
        <div className={frameClasses} style={frameStyle}>
          <iframe
            title={title}
            className={iframeClasses}
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            onLoad={() => setIframeLoaded(true)}
          />
          {!iframeLoaded && (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center bg-muted/95"
              aria-hidden
            >
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <span
                  className="inline-block size-10 rounded-full border-[3px] border-border border-t-brand-gold animate-spin"
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
