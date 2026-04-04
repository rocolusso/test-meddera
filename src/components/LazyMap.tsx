'use client';

import React from 'react';

import LazyGoogleMapIframe from '@/components/LazyGoogleMapIframe';

function LazyMap({ locale }: { locale: 'ru' | 'ro' }) {
  return (
    <div className="w-full border-t border-border bg-muted/20" id="lazy-map">
      <div className="w-full pb-16 pt-10 sm:pb-20">
        <LazyGoogleMapIframe height={480} locale={locale} />
      </div>
    </div>
  );
}

export default LazyMap;
