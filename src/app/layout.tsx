import React from 'react';

import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

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
      </head>
      <GoogleAnalytics />
      <body>
        {children}
      </body>
    </html>
  );
}
