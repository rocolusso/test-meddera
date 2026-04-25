'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const CONSENT_KEY = 'cookies-consent-accepted';

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

const CookiesPolicy = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = React.useState(false);
  const locale = React.useMemo(() => getLocaleFromPathname(pathname), [pathname]);

  React.useEffect(() => {
    const accepted = localStorage.getItem(CONSENT_KEY) === 'true';
    setIsVisible(!accepted);
  }, []);

  const onAccept = React.useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'true');
    setIsVisible(false);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-black/90 text-white backdrop-blur-sm">
      <div className="mx-auto  flex max-w-7xl items-center  gap-3 px-4 py-3 md:px-6">
        <p className="text-sm leading-5">{COPY[locale].message}</p>
        <button
          type="button"
          onClick={onAccept}
          className="shrink-0 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
        >
          {COPY[locale].accept}
        </button>
      </div>
    </div>
  );
};

export default CookiesPolicy;
