'use client';

import { useEffect, useState } from 'react';

import BurgerMenu from '@/components/BurgerMenu';
import ThemeToggle from '@/components/new-ui/ThemeToggle';

type Props = { locale: string };

/**
 * Defers mounting burger + theme toggle until browser idle to reduce early main-thread work.
 */
export default function DeferredHeaderMobileControls({ locale }: Props) {
  const [ready, setReady] = useState(false);
  const loc = locale === 'ro' ? 'ro' : 'ru';

  useEffect(() => {
    let idleId: number | undefined;
    let fallbackId: number | undefined;

    const run = () => setReady(true);

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(run, { timeout: 2500 });
    } else {
      fallbackId = window.setTimeout(run, 2500);
    }

    return () => {
      if (idleId != null && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      }
      if (fallbackId != null) {
        window.clearTimeout(fallbackId);
      }
    };
  }, []);

  if (!ready) {
    return (
      <div
        className="relative z-[101] flex shrink-0 items-center gap-2 sm:gap-2.5"
        aria-busy="true"
        aria-label={loc === 'ru' ? 'Загрузка панели' : 'Se încarcă panoul'}
      >
        <div
          className="size-12 shrink-0 rounded-full border border-border bg-background/80 sm:size-10"
          aria-hidden
        />
        <div className="flex size-12 shrink-0 items-center justify-center sm:hidden" aria-hidden />
      </div>
    );
  }

  return (
    <div className="relative z-[101] flex shrink-0 items-center gap-2 sm:gap-2.5">
      <ThemeToggle locale={loc} />
      <BurgerMenu locale={locale} />
    </div>
  );
}
