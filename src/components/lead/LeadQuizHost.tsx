'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import { isCtaKey, isLeadQuizSource } from '@/lib/cta/keys';
import { useOverlayLock } from '@/lib/overlay-lock';

import { QUIZ, getLocaleFromPath } from './leadFormConstants';
import { closeLeadQuiz, openLeadQuiz, useLeadQuizState } from './lead-quiz-store';

const LeadQuizModal = dynamic(() => import('@/components/lead/LeadQuizModal'), {
  ssr: false,
  loading: () => null,
});

/**
 * The single place where the lead quiz lives. It listens for clicks on any element with
 * `data-open-quiz` (+ `data-cta-source`, optional `data-cta-procedure`), so cards rendered
 * on the server need no client code of their own. Also owns Esc and returning focus.
 */
export default function LeadQuizHost() {
  const pathname = usePathname() ?? '/';
  const locale = getLocaleFromPath(pathname);
  const { open, formType, source, procedure } = useLeadQuizState();
  const openerRef = useRef<HTMLElement | null>(null);

  useOverlayLock(open);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-open-quiz]') : null;
      if (!target) return;
      event.preventDefault();
      openerRef.current = target;
      const rawSource = target.dataset.ctaSource;
      openLeadQuiz({
        source: isLeadQuizSource(rawSource) ? rawSource : 'unknown',
        procedure: isCtaKey(target.dataset.ctaProcedure) ? target.dataset.ctaProcedure : null,
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    if (!openerRef.current && document.activeElement instanceof HTMLElement && document.activeElement !== document.body) {
      openerRef.current = document.activeElement;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLeadQuiz();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      const opener = openerRef.current;
      openerRef.current = null;
      if (opener && opener.isConnected) opener.focus({ preventScroll: true });
    };
  }, [open]);

  // A quiz left open must not follow the visitor to another page.
  useEffect(() => {
    closeLeadQuiz();
  }, [pathname]);

  if (!open) return null;

  return (
    <LeadQuizModal
      locale={locale}
      formType={formType}
      questions={QUIZ[formType]}
      pathname={pathname}
      source={source}
      procedure={procedure}
      onClose={closeLeadQuiz}
    />
  );
}
