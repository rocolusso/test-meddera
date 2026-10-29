'use client';

import { useEffect, useRef, useState } from 'react';

import { GOOGLE_MAPS_BROWSER_KEY, GOOGLE_PLACE_ID } from '@/lib/google-reviews/config';

type Props = { locale: 'ru' | 'ro' };

type GoogleWindow = Window & {
  google?: { maps?: { importLibrary?: (name: string) => Promise<unknown> } };
};

/** Added once per page: later blocks on the same page reuse it. */
let loader: Promise<void> | null = null;

/** Google calls window.gm_authFailure when it refuses the key (wrong referrer, API not enabled, no billing). */
const authFailListeners = new Set<() => void>();

/** Why the block is hidden: shown in the console (always) and on the page (development only). */
const IMPORT_TIMEOUT_MS = 10000;
const IS_DEV = process.env.NODE_ENV !== 'production';

function loadMaps(locale: 'ru' | 'ro'): Promise<void> {
  if (loader) return loader;
  loader = new Promise<void>((resolve, reject) => {
    const params = new URLSearchParams({
      key: GOOGLE_MAPS_BROWSER_KEY,
      v: 'weekly',
      loading: 'async',
      language: locale,
    });
    (window as Window & { gm_authFailure?: () => void }).gm_authFailure = () => {
      authFailListeners.forEach((fn) => fn());
    };
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loader = null;
      reject(new Error('the Google Maps script did not load (blocked by the browser or network, or the key is malformed)'));
    };
    document.head.appendChild(script);
  });
  return loader;
}

/**
 * The Place Details Element of Google (Places UI Kit) with only the rating and the reviews in it. Google draws
 * everything inside, we only choose which content elements to put in. The Google script is loaded when the
 * block comes close to the screen, not before: a visit that never scrolls this far costs no request and no
 * quota. If anything fails (script blocked, key refused, quota used up) the block hides itself.
 */
export default function GooglePlaceDetails({ locale }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'idle' | 'loading' | 'ready' | 'failed'>('idle');
  const [reason, setReason] = useState('');

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !GOOGLE_MAPS_BROWSER_KEY || !GOOGLE_PLACE_ID) {
      const why = 'NEXT_PUBLIC_GOOGLE_MAPS_KEY or NEXT_PUBLIC_GOOGLE_PLACE_ID is empty (restart the dev server after changing .env.local)';
      // eslint-disable-next-line no-console
      console.warn(`[google-reviews] block hidden: ${why}`);
      setReason(why);
      setState('failed');
      return undefined;
    }
    let cancelled = false;
    const fail = (why: string) => {
      if (cancelled) return;
      // eslint-disable-next-line no-console
      console.warn(`[google-reviews] block hidden: ${why}`);
      setReason(why);
      setState('failed');
    };
    const onAuthFail = () =>
      fail('Google refused the key: check the HTTP referrers of the key (add http://localhost:3000/* for local work), that the "Places UI Kit" and "Maps JavaScript API" are enabled, and that billing is on');
    authFailListeners.add(onAuthFail);

    const start = async () => {
      setState('loading');
      try {
        await loadMaps(locale);
        const maps = (window as GoogleWindow).google?.maps;
        if (!maps?.importLibrary) throw new Error('google.maps.importLibrary is missing after the script loaded');
        await Promise.race([
          maps.importLibrary('places'),
          new Promise((_, reject) => {
            window.setTimeout(() => reject(new Error('the "places" library did not load in 10 s (usually a refused key or a disabled API)')), IMPORT_TIMEOUT_MS);
          }),
        ]);
        if (cancelled) return;

        // only the content we want: the place, its rating and its reviews
        const details = document.createElement('gmp-place-details');
        const request = document.createElement('gmp-place-details-place-request');
        request.setAttribute('place', GOOGLE_PLACE_ID);
        details.append(request, document.createElement('gmp-place-rating'), document.createElement('gmp-place-reviews'));
        details.addEventListener('gmp-load', () => {
          if (!cancelled) setState('ready');
        });
        host.replaceChildren(details);
      } catch (e) {
        fail(e instanceof Error ? e.message : 'unknown error');
      }
    };

    if (typeof IntersectionObserver === 'undefined') {
      void start();
      return () => {
        cancelled = true;
        authFailListeners.delete(onAuthFail);
      };
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          void start();
        }
      },
      { rootMargin: '400px 0px' },
    );
    observer.observe(host);
    return () => {
      cancelled = true;
      authFailListeners.delete(onAuthFail);
      observer.disconnect();
    };
  }, [locale]);

  // The block is useless without the element: hide it together with its text, not just the element.
  useEffect(() => {
    if (state !== 'failed' || IS_DEV) return undefined;
    let el: HTMLElement | null = wrapRef.current?.parentElement ?? null;
    while (el) {
      if (el.matches('[data-google-reviews]')) el.style.display = 'none';
      el = el.parentElement;
    }
    return undefined;
  }, [state]);

  if (state === 'failed') {
    // In development the block stays on the page with the reason, so a missing block is never a mystery.
    // In production it hides (the effect above).
    if (IS_DEV) {
      return (
        <div ref={wrapRef} className="gr__wrap" role="note" style={{ border: '1px dashed #d33', padding: 12, fontSize: 13, color: '#d33' }}>
          Google reviews (dev only): 
          {' '}
          {reason || 'failed'}
        </div>
      );
    }
    return <div ref={wrapRef} hidden />;
  }

  return (
    <div ref={wrapRef} className="gr__wrap">
      <div
        ref={hostRef}
        className="gr__host"
        data-gr-state={state}
        aria-busy={state !== 'ready'}
        aria-label={locale === 'ru' ? 'Отзывы из Google' : 'Recenzii din Google'}
      />
      <a
        className="gr__google"
        href={`https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {locale === 'ru' ? 'Все отзывы на Google' : 'Toate recenziile pe Google'}
      </a>
    </div>
  );
}
