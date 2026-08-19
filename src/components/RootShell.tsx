import React from 'react';

import DeferredAhrefs from '@/components/DeferredAhrefs';
import DeferredClarity from '@/components/DeferredClarity';
import DeferredCookiesPolicy from '@/components/DeferredCookiesPolicy';
import DeferredFacebookPixel from '@/components/DeferredFacebookPixel';
import DeferredPlerdy from '@/components/DeferredPlerdy';
import DeferredTelClickTracker from '@/components/DeferredTelClickTracker';
import DeferredVercelInsights from '@/components/DeferredVercelInsights';
import { FacebookPixelNoScript } from '@/components/FacebookPixel';
import FacebookPixelPageViewTracker from '@/components/FacebookPixelPageViewTracker';
import RouteAwareOverlays from '@/components/RouteAwareOverlays';
import { isEnabled } from '@/lib/env-flags';
import { getThemeBootstrapScript } from '@/lib/theme-inline-script';
import { TrackPageView } from '@/components/TrackPageView';

const ORIGIN = 'https://meddera.md';

const CLINIC_ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: 'Strada Stefan Cel Mare 13',
  addressLocality: 'Bălți',
  postalCode: 'MD-3100',
  addressCountry: 'MD',
};

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id': `${ORIGIN}/#physician`,
      name: 'Дерматолог Бельци Екатерина Пынтя',
      image: `${ORIGIN}/assets/img/about_2k.jpg`,
      url: `${ORIGIN}/`,
      telephone: '+373-68-550-030',
      address: CLINIC_ADDRESS,
      medicalSpecialty: 'https://schema.org/Dermatology',
    },
    {
      '@type': 'MedicalClinic',
      '@id': `${ORIGIN}/#clinic`,
      name: 'Meddera Beauty Clinic',
      image: `${ORIGIN}/assets/img/img_contacts.jpg`,
      url: `${ORIGIN}/`,
      telephone: '+373-68-550-030',
      priceRange: '$$',
      address: CLINIC_ADDRESS,
    },
  ],
};

const isVercel = process.env.VERCEL === '1';
const isProductionDeployment =
  process.env.NODE_ENV === 'production' &&
  (isVercel ? process.env.VERCEL_ENV === 'production' : true);

/**
 * Shared <html><body> shell used by both RU and RO root layouts. Must NOT call
 * `headers()` or any other dynamic API — that would force every nested route
 * back into dynamic SSR. Locale is hardcoded by the route group that wraps it.
 */
export default function RootShell({
  locale,
  children,
}: {
  locale: 'ru' | 'ro';
  children: React.ReactNode;
}) {
  const enablePlerdy = isProductionDeployment;
  const enableClarity =
    isProductionDeployment && isEnabled(process.env.NEXT_PUBLIC_ENABLE_CLARITY);
  const enableAhrefs =
    isProductionDeployment && isEnabled(process.env.NEXT_PUBLIC_ENABLE_AHREFS);
  const showVercelInsights = isVercel && process.env.VERCEL_ENV === 'production';

  return (
    <html
      lang={locale}
      style={{ overflowX: 'hidden' }}
      suppressHydrationWarning
    >
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head suppressHydrationWarning>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: getThemeBootstrapScript() }}
        />
        {enablePlerdy ? <link rel="dns-prefetch" href="https://a.plerdy.com" /> : null}
        {enableClarity ? <link rel="dns-prefetch" href="https://www.clarity.ms" /> : null}
        <link rel="dns-prefetch" href="https://www.google.com" />
        {enableAhrefs ? <link rel="dns-prefetch" href="https://analytics.ahrefs.com" /> : null}
        {enablePlerdy ? <link rel="preconnect" href="https://a.plerdy.com" crossOrigin="" /> : null}
        {enableClarity ? <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="" /> : null}
        {enableAhrefs ? <link rel="preconnect" href="https://analytics.ahrefs.com" crossOrigin="" /> : null}
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <meta name="facebook-domain-verification" content="h3mpdqam7srb44jwnvq9khpw1d3bku" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        <FacebookPixelNoScript />
        <React.Suspense fallback={null}>
          <FacebookPixelPageViewTracker />
        </React.Suspense>
        <TrackPageView />
        {children}
        {showVercelInsights ? <DeferredVercelInsights /> : null}
        {enableClarity ? <DeferredClarity /> : null}
        {enableAhrefs ? <DeferredAhrefs /> : null}
        <RouteAwareOverlays />
        <DeferredCookiesPolicy />
        <DeferredTelClickTracker />
        <DeferredFacebookPixel />
        {enablePlerdy ? <DeferredPlerdy /> : null}
      </body>
    </html>
  );
}
