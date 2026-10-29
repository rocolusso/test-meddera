'use client';

import { useEffect } from 'react';

import type { CtaKey } from '@/lib/cta/keys';

import { setLeadQuizPageTopic } from './lead-quiz-store';

/**
 * Tells the lead quiz which procedure the page is about, so that the buttons without a procedure of
 * their own (the floating and the bottom "Записаться онлайн") open the quiz of that procedure.
 * Renders nothing. The topic is dropped when the visitor leaves the page.
 */
export default function LeadQuizPageTopic({ procedure }: { procedure: CtaKey }) {
  useEffect(() => {
    setLeadQuizPageTopic(procedure);
    return () => setLeadQuizPageTopic(null);
  }, [procedure]);
  return null;
}
