'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import BookCtaButton from '@/components/cta/BookCtaButton';
import DoctorPhoto from '@/components/cta/DoctorPhoto';
import PhoneIcon from '@/components/cta/PhoneIcon';
import CookiesPolicy from '@/components/CookiesPolicy';
import { openLeadQuiz } from '@/components/lead/lead-quiz-store';
import { getLocaleFromPath } from '@/components/lead/leadFormConstants';
import { CLINIC_TEL_HREF, CTA_CALL_LABEL } from '@/lib/cta/keys';
import { useCookieConsent } from '@/lib/cookie-consent';

/**
 * One fixed container at the bottom of the screen. On phones it holds one transparent row: the pink
 * "Записаться онлайн" on the left (doctor's photo above it) and the round green call button on the
 * right, both 56 px tall on one line, with the cookie notice under them (the row sits right above
 * it). Without the notice the buttons stand 25 px above the bottom edge of the screen. When the notice is
 * accepted it leaves the container and the row drops to the bottom edge by itself. The container
 * ignores pointer events, only the buttons and the notice take them, so the gaps stay tappable.
 * On wider screens only the notice lives here (the buttons float elsewhere, see StickyLeadCta
 * and FloatingCallButton). /ads gets no buttons.
 *
 * The container's height is published as --bottom-dock-h; globals.css uses it to keep the end
 * of the page above the dock on phones.
 */
export default function BottomDock() {
  const pathname = usePathname() ?? '/';
  const locale = getLocaleFromPath(pathname);
  const onAds = pathname.startsWith('/ads');
  const consent = useCookieConsent();
  const showBanner = consent === 'pending';
  const visible = !onAds || showBanner;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!visible || !el) return undefined;
    const root = document.documentElement;
    const publish = () => root.style.setProperty('--bottom-dock-h', `${Math.ceil(el.getBoundingClientRect().height)}px`);
    publish();
    if (typeof ResizeObserver === 'undefined') {
      return () => root.style.removeProperty('--bottom-dock-h');
    }
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    return () => {
      observer.disconnect();
      root.style.removeProperty('--bottom-dock-h');
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      id="bottom-dock"
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-[1000] ${showBanner ? 'pb-[env(safe-area-inset-bottom)]' : ''}`}
    >
      {!onAds ? (
        <div
          className={`relative flex items-center justify-between px-4 pt-2 md:hidden ${showBanner ? 'pb-2' : 'pb-[25px]'}`}
          data-dock-buttons
        >
          <div className="pointer-events-auto relative">
            {/* The photo sits above the button; it is decoration, a tap on it opens the same quiz. */}
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              onClick={() => openLeadQuiz({ source: 'dock_book' })}
              className="absolute bottom-full left-3 mb-2 rounded-full shadow-lg shadow-black/25"
              data-dock-photo
            >
              <DoctorPhoto size={64} className="size-16 border-[3px] border-white" />
              <span className="absolute bottom-0.5 right-0.5 size-3.5 rounded-full border-2 border-white bg-[#00aa2d]" />
            </button>
            <BookCtaButton locale={locale} variant="dock" source="dock_book" id="dockBookCta" />
          </div>
          <a
            href={CLINIC_TEL_HREF}
            id="dockCallCta"
            aria-label={CTA_CALL_LABEL[locale]}
            data-cta-event="phone_click_fixed_1"
            data-cta-source="dock_call"
            className="dock-call pointer-events-auto flex size-14 shrink-0 items-center justify-center rounded-full bg-[#00aa2d] text-white shadow-lg shadow-green-600/30 transition active:scale-95"
          >
            <PhoneIcon className="size-6" />
          </a>
        </div>
      ) : null}
      <div className="pointer-events-auto">
        <CookiesPolicy />
      </div>
    </div>
  );
}
