import React from 'react';
import Link from 'next/link';

import DeferredHeaderMobileControls from '@/components/DeferredHeaderMobileControls';
import NavigationLinks from '@/components/new-ui/NavigationLinks';

const LOGO_SRC = '/assets/img/pintea_logo.svg';

function HeaderNew({ locale }: { locale: string }) {
  return (
    <>
      <header className="!fixed inset-x-0 top-0 z-50 w-full border-b border-border/90 pt-[env(safe-area-inset-top,0px)] isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-background/95 sm:bg-background/92 sm:backdrop-blur-md sm:supports-[backdrop-filter]:bg-background/85"
        />
        <div className="relative z-10 container mx-auto max-w-6xl px-3 sm:px-5 lg:px-6">
          <div className="flex min-h-[5.25rem] w-full min-w-0 items-center justify-between gap-2 py-4 sm:min-h-16 sm:gap-4 sm:py-4">
            <Link
              href={locale === 'ro' ? '/ro' : '/'}
              className="relative z-[1] min-w-0 max-w-[min(148px,40vw)] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:max-w-[220px] lg:max-w-[300px]"
            >
              <div className="flex min-h-[20px] items-center">
                {/* Native <img> for SVG: bypasses next/image optimizer (no benefit for vector assets), */}
                {/* dropping a small chunk of JS from the critical path. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOGO_SRC}
                  alt={locale === 'ro' ? 'Meddera — logo clinica' : 'Meddera — логотип клиники'}
                  width={300}
                  height={68}
                  decoding="async"
                  fetchPriority="high"
                  className="block h-auto w-full"
                />
              </div>
            </Link>

            <div className="flex min-w-0 items-center max-sm:flex-initial max-sm:justify-end gap-1.5 sm:flex-1 sm:justify-end sm:gap-3">
              <NavigationLinks locale={locale} />
              <DeferredHeaderMobileControls locale={locale} />
            </div>
          </div>
        </div>
      </header>
      <div
        aria-hidden
        className="shrink-0 [height:calc(5.25rem+env(safe-area-inset-top,0px))] sm:[height:calc(4rem+env(safe-area-inset-top,0px))]"
      />
    </>
  );
}

export default HeaderNew;
