import React from 'react';
import type { Metadata } from 'next';

import RootShell from '@/components/RootShell';

import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://meddera.md'),
};

export default function RoRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="ro">{children}</RootShell>;
}
