import { Corinthia } from 'next/font/google';

/** Certificate titles only; self-hosted by Next with font-display: swap (no fonts.googleapis.com on /cert). */
export const fontCorinthia = Corinthia({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});
