import React from 'react';
import type { Metadata, Viewport } from 'next';

import './developer.css';

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
  return (
    <html lang="ru">
      <head>
        <link rel="preload" href="/assets/fonts/developer/geist-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/developer/geist-cyrillic-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
