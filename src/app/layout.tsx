import React from 'react';

import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content="ru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="rXIslMFNaqfd12QEhlizeQ" async />
      </head>
      <GoogleAnalytics />
      <Analytics />
      <SpeedInsights />
      <body>
        {children}
      </body>
    </html>
  );
}
