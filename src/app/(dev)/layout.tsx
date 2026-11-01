import React from 'react';
import type { Metadata, Viewport } from 'next';

import './developer.css';
import DeferredGoogleTagManager from '@/components/DeferredGoogleTagManager';
import { isGtmEnabled } from '@/lib/ga4-transport';

export const metadata: Metadata = {
  metadataBase: new URL('https://meddera.md'),
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
};

/**
 * Own root layout for /developer: no clinic header, footer, floating buttons or marketing pixels.
 * The page language is switched on the client (document.documentElement.lang).
 */
export default function DeveloperRootLayout({ children }: { children: React.ReactNode }) {
  const enableGtm = isGtmEnabled();
  return (
    <html lang="ru">
      <head>
        {enableGtm ? <link rel="dns-prefetch" href="https://www.googletagmanager.com" /> : null}
        <link rel="preload" href="/assets/fonts/developer/geist-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/developer/geist-cyrillic-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        {enableGtm ? <DeferredGoogleTagManager /> : null}
      </body>
    </html>
  );
}
