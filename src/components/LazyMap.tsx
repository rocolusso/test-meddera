'use client';

import React from 'react';

import LazyGoogleMapIframe from '@/components/LazyGoogleMapIframe';

function LazyMap({ locale }: { locale: 'ru' | 'ro' }) {
  return (
    <div className="w-full" id="lazy-map">
      <LazyGoogleMapIframe
        height={480}
        locale={locale}
        frameClassName="rounded-none sm:rounded-none shadow-none ring-0"
      />
    </div>
  );
}

export default LazyMap;
