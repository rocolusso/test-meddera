'use client';

import React from 'react';

import LazyGoogleMapIframe from '@/components/LazyGoogleMapIframe';

function LazyMap({ locale }: { locale: 'ru' | 'ro' }) {
  return (
    <div id="lazy-map">
      <div className="map-container mx-auto flex justify-center">
        <div className="mx-auto mt-10">
          <div className="mapouter">
            <div className="gmap_canvas">
              <LazyGoogleMapIframe
                width={3840}
                height={450}
                locale={locale}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LazyMap;
