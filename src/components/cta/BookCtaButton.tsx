'use client';

import { openLeadQuiz } from '@/components/lead/lead-quiz-store';
import { TEXT, type Locale } from '@/components/lead/leadFormConstants';
import type { LeadQuizSource } from '@/lib/cta/keys';

import { CtaAnimationStyles } from './cta-styles';
import DoctorPhoto from './DoctorPhoto';
import { useReceptionIndicator } from './useReceptionIndicator';

type Props = {
  locale: Locale;
  /**
   * 'pill': desktop, with the doctor's round photo, floats up and down.
   * 'dock': mobile bottom row, fixed 56 px tall (same as the call button) and does not float,
   * so both buttons stay on one line; the photo is rendered by BottomDock above it.
   */
  variant: 'pill' | 'dock';
  source: LeadQuizSource;
  id?: string;
};

/** The pink "Записаться онлайн" button: opens the lead quiz. */
export default function BookCtaButton({ locale, variant, source, id }: Props) {
  const pill = variant === 'pill';
  const reception = useReceptionIndicator();

  return (
    <>
      <button
        type="button"
        id={id}
        data-reception={reception === 'closed' ? 'closed' : undefined}
        onClick={() => openLeadQuiz({ source })}
        className={`
          primary-cta-shine-loop
          ${pill ? 'primary-cta-button' : ''}
          group relative overflow-hidden
          rounded-full font-semibold text-white
          bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600
          shadow-lg shadow-pink-500/30
          transition-all duration-300 ease-out
          hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50
          active:scale-95
          ${pill ? 'flex items-center py-1.5 pl-1.5 pr-5 text-xs sm:text-sm' : 'flex h-14 shrink-0 items-center justify-center px-6 text-sm'}
        `}
      >
        <span aria-hidden className="pointer-events-none absolute inset-0 z-[1] overflow-hidden rounded-full">
          <span className="primary-cta-shine-sweep" />
        </span>
        <span className="absolute inset-0 z-[2] bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
        <span className="absolute -left-10 top-0 z-[2] h-full w-10 rotate-12 bg-white/30 opacity-0 blur-md group-hover:animate-shine group-hover:opacity-100" />

        <span className="relative z-10 flex items-center gap-2.5">
          {pill ? (
            <DoctorPhoto size={48} className="size-12 border-2 border-white/80" />
          ) : (
            <span aria-hidden>💉</span>
          )}
          <span>{TEXT[locale].ctaAppointment}</span>
        </span>
      </button>
      <CtaAnimationStyles />
    </>
  );
}
