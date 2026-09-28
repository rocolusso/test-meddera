'use client';

import { useEffect, useState } from 'react';

import BurgerMenu from '@/components/BurgerMenu';
import LocaleSwitchLink from '@/components/new-ui/LocaleSwitchLink';
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
      idleId = window.requestIdleCallback(run, { timeout: 50 });
    } else {
      fallbackId = window.setTimeout(run, 50);
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
    const loadingMsg = loc === 'ru' ? 'Загрузка панели' : 'Se încarcă panoul';
    return (
      <div className="relative z-[101] flex shrink-0 items-center gap-2 sm:gap-2.5" role="status" aria-live="polite">
        <span className="sr-only">{loadingMsg}</span>
        {/* Same footprint as the mobile language switch (no layout shift). */}
        <div className="size-10 shrink-0 sm:hidden" aria-hidden />
        <div
          className="size-12 shrink-0 sm:size-10"
          aria-hidden
        />
        <div className="flex size-12 shrink-0 items-center justify-center sm:hidden" aria-hidden />
      </div>
    );
  }

  return (
    <div className="relative z-[101] flex shrink-0 items-center gap-2 sm:gap-2.5">
      {/* Mobile only: on sm+ the switch lives in NavigationLinks. */}
      <LocaleSwitchLink
        locale={loc}
        className="alt-font inline-flex size-10 shrink-0 touch-manipulation items-center justify-center border border-border text-[12px] font-semibold uppercase tracking-[1px] text-pofo-heading transition-colors hover:border-deep-pink hover:text-deep-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:hidden"
        ariaLabel={loc === 'ru' ? 'Limba română' : 'Русский язык'}
      />
      <ThemeToggle locale={loc} />
      <BurgerMenu locale={locale} />
    </div>
  );
}
