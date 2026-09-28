import React from 'react';
import Link from 'next/link';

import DeferredHeaderMobileControls from '@/components/DeferredHeaderMobileControls';
import HeaderScrollProgress from '@/components/new-ui/HeaderScrollProgress';
import NavigationLinks from '@/components/new-ui/NavigationLinks';

const LOGO_SRC = '/assets/img/pintea_logo.svg';
/** Same logo with the dark-gray lettering switched to white (dark theme). */
const LOGO_LIGHT_SRC = '/assets/img/pintea_logo_light.svg';

function HeaderNew({ locale }: { locale: string }) {
  const logoAlt = locale === 'ro' ? 'Meddera — logo clinica' : 'Meddera — логотип клиники';
  return (
    <>
      <HeaderScrollProgress locale={locale} />
      {/* Pofo "header-light" in its sticky state: solid white bar + soft 35px shadow. */}
      <header className="!fixed inset-x-0 top-0 z-50 w-full bg-background pt-[env(safe-area-inset-top,0px)] shadow-header isolate dark:shadow-[0_0_35px_rgba(0,0,0,0.6)]">
        <div className="pofo-container relative z-10">
          <div className="flex min-h-[5.25rem] w-full min-w-0 items-center justify-between gap-2 sm:min-h-20 sm:gap-4">
            <Link
              href={locale === 'ro' ? '/ro' : '/'}
              className="relative z-[1] min-w-0 max-w-[min(148px,40vw)] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px]"
            >
              <div className="flex min-h-[20px] items-center">
                {/* Native <img> for SVG: bypasses next/image optimizer (no benefit for vector assets), */}
                {/* dropping a small chunk of JS from the critical path. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOGO_SRC}
                  alt={logoAlt}
                  width={300}
                  height={68}
                  decoding="async"
                  fetchPriority="high"
                  className="block h-auto w-full dark:hidden"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOGO_LIGHT_SRC}
                  alt={logoAlt}
                  width={300}
                  height={68}
                  decoding="async"
                  className="hidden h-auto w-full dark:block"
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
        className="shrink-0 [height:calc(5.25rem+env(safe-area-inset-top,0px))] sm:[height:calc(5rem+env(safe-area-inset-top,0px))]"
      />
    </>
  );
}

export default HeaderNew;
