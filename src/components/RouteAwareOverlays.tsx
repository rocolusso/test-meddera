'use client';

import { usePathname } from 'next/navigation';

import DeferredFloatingCallButton from '@/components/DeferredFloatingCallButton';
import DeferredStickyLeadCta from '@/components/DeferredStickyLeadCta';

/**
 * FloatingCallButton + StickyLeadCta were previously gated server-side by
 * reading `x-pathname` from middleware. With multi-root layouts that header
 * read forced every page into dynamic rendering. We now decide on the client
 * via usePathname, which keeps the App Router runtime in play but does NOT
 * mark the route as dynamic SSR.
 */
export default function RouteAwareOverlays() {
  const pathname = usePathname() ?? '/';
  const onAds = pathname.startsWith('/ads');
  if (onAds) return null;
  return (
    <>
      <DeferredFloatingCallButton />
      <DeferredStickyLeadCta />
    </>
  );
}
