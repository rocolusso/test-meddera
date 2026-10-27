'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import { acceptCookies, useCookieConsent } from '@/lib/cookie-consent';

type Locale = 'ru' | 'ro';

function getLocaleFromPathname(pathname: string | null): Locale {
  if (!pathname) {
    return 'ru';
  }
  const normalizedPath = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
  const isRoLocale =
    normalizedPath === '/ro' ||
    normalizedPath.startsWith('/ro/') ||
    (normalizedPath.length > 1 && normalizedPath.endsWith('/ro'));
  return isRoLocale ? 'ro' : 'ru';
}

const COPY = {
  ru: {
    message: 'Мы используем cookie, чтобы сайт работал корректно и был удобнее для вас.',
    accept: 'Принять',
  },
  ro: {
    message: 'Folosim cookie-uri pentru ca site-ul sa functioneze corect si sa fie mai comod pentru tine.',
    accept: 'Accepta',
  },
} as const;

/**
 * Cookie notice. It no longer positions itself: BottomDock puts it under the
 * call buttons, so the buttons move down by themselves once it is accepted.
 */
const CookiesPolicy = () => {
  const pathname = usePathname();
  const consent = useCookieConsent();
  const locale = React.useMemo(() => getLocaleFromPathname(pathname), [pathname]);

  if (consent !== 'pending') {
    return null;
  }

  return (
    <div className="border-t border-white/15 bg-black/90 text-white backdrop-blur-sm" data-cookie-banner>
      <div className="mx-auto  flex max-w-7xl items-center  gap-3 px-4 py-3 md:px-6">
        <p className="text-sm leading-5">{COPY[locale].message}</p>
        <button
          type="button"
          onClick={acceptCookies}
          className="shrink-0 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
        >
          {COPY[locale].accept}
        </button>
      </div>
    </div>
  );
};

export default CookiesPolicy;
