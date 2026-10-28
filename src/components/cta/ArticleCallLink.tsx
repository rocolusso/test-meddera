'use client';

import { useId, type ReactNode } from 'react';

import { CLINIC_TEL_HREF } from '@/lib/cta/keys';

import ReceptionDot, { hasReceptionDot } from './ReceptionDot';
import { useReceptionIndicator } from './useReceptionIndicator';

type Props = {
  locale: 'ru' | 'ro';
  /** Value of data-cta-source, e.g. `article_card_call`. */
  ctaSource: string;
  /** Value of data-cta-procedure. */
  procedure: string;
  className: string;
  children: ReactNode;
};

/**
 * Phone link of the call-to-action card (ArticleCta) with the reception dot in its corner. A client
 * component only because of the dot: the card itself stays a server component. The click is counted
 * by TelClickTracker from the data-cta-* attributes, exactly like the other call buttons. The dot
 * does not move anything (it is positioned absolutely), and it appears right after hydration when the
 * clinic-hours logic is on, or is already in the HTML (always green) when it is off.
 */
export default function ArticleCallLink({ locale, ctaSource, procedure, className, children }: Props) {
  const reception = useReceptionIndicator();
  const hoursId = useId();

  return (
    <a
      href={CLINIC_TEL_HREF}
      aria-describedby={hasReceptionDot(reception) ? hoursId : undefined}
      data-reception={reception ?? undefined}
      data-cta-event="phone_click_simple1"
      data-cta-source={ctaSource}
      data-cta-procedure={procedure}
      className={`relative ${className}`}
    >
      {children}
      <ReceptionDot state={reception} locale={locale} hoursId={hoursId} className="right-1 top-1" />
    </a>
  );
}
