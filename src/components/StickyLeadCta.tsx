'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import {
  QUIZ,
  TEXT,
  getLocaleFromPath,
  pushLeadCtaEvent,
  type FormType,
} from '@/components/lead/leadFormConstants';

const LeadQuizModal = dynamic(() => import('@/components/lead/LeadQuizModal'), {
  ssr: false,
  loading: () => null,
});

export default function StickyLeadCta() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = TEXT[locale];

  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('appointment');

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const questions = QUIZ[formType];

  return (
    <>
      <div className="fixed bottom-24 left-4 z-[1000] flex flex-col gap-3 sm:left-6">

        {/* PRIMARY CTA */}
        <button
          onClick={() => {
            pushLeadCtaEvent('appointment');
            setFormType('appointment');
            setOpen(true);
          }}
          id={'primaryCta'}
          type="button"
          className="
            primary-cta-shine-loop
            group relative overflow-hidden
            rounded-full px-5 py-3
            text-xs sm:text-sm font-semibold
            text-white
            bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600
            shadow-lg shadow-pink-500/30

            transition-all duration-300 ease-out

            hover:scale-105
            hover:shadow-xl hover:shadow-pink-500/50

            active:scale-95

            animate-[float_4s_ease-in-out_infinite]
          "
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] overflow-hidden rounded-full"
          >
            <span className="primary-cta-shine-sweep" />
          </span>

          <span
            className="
              absolute inset-0 z-[2]
              bg-white/10 opacity-0
              group-hover:opacity-100
              transition duration-300
            "
          />

          <span
            className="
              absolute -left-10 top-0 z-[2] h-full w-10
              rotate-12 bg-white/30 blur-md
              opacity-0 group-hover:opacity-100
              group-hover:animate-shine
            "
          />

          <span className="relative z-10 flex items-center gap-2">
            💉
            {' '}
            {t.ctaAppointment}
          </span>
        </button>

        {/* SECONDARY CTA */}
        <button
          onClick={() => {
            pushLeadCtaEvent('consultation');
            setFormType('consultation');
            setOpen(true);
          }}
          className="
            group relative overflow-hidden
            rounded-full px-5 py-3
            text-xs sm:text-sm font-semibold

            bg-white text-gray-900
            border border-gray-200

            shadow-md

            transition-all duration-300

            hover:scale-105
            hover:bg-gray-50
            hover:shadow-lg

            active:scale-95

            animate-[float_5s_ease-in-out_infinite]
          "
        >
          <span className="relative z-10 flex items-center gap-2">
            💬
            {' '}
            {t.ctaConsultation}
          </span>
        </button>
      </div>

      {open && (
        <LeadQuizModal
          locale={locale}
          formType={formType}
          questions={questions}
          pathname={pathname}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
