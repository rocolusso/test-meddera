'use client';

import { useSyncExternalStore } from 'react';

import { isCtaKey, isLeadQuizSource, type CtaKey, type LeadQuizSource } from '@/lib/cta/keys';

import { pushLeadCtaEvent, type FormType } from './leadFormConstants';

/** `unknown` is for a trigger whose data-cta-source is missing or not in the allowlist (it shows up in GA4 as a defect). */
export type LeadQuizOpenSource = LeadQuizSource | 'unknown';

export type LeadQuizState = {
  open: boolean;
  formType: FormType;
  source: LeadQuizOpenSource | null;
  procedure: CtaKey | null;
};

const CLOSED: LeadQuizState = { open: false, formType: 'appointment', source: null, procedure: null };

/**
 * Procedure the current page is about (set by a lips page, see LeadQuizPageTopic). A button without a
 * procedure of its own (the bottom panel, the floating "Записаться онлайн") opens the quiz of this topic.
 */
let pageTopic: CtaKey | null = null;

export function setLeadQuizPageTopic(topic: CtaKey | null): void {
  pageTopic = topic;
}

/** Read-only access to the page topic, for a trigger that has no card with a procedure to read it from (the scroll teaser). */
export function getLeadQuizPageTopic(): CtaKey | null {
  return pageTopic;
}

let state: LeadQuizState = CLOSED;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getLeadQuizState(): LeadQuizState {
  return state;
}

/**
 * The only way to open the quiz. One call = one `lead_sticky_cta_click` event.
 * Buttons in server-rendered markup use `data-open-quiz` instead (see LeadQuizHost).
 */
export function openLeadQuiz(options: {
  source: LeadQuizOpenSource;
  procedure?: CtaKey | string | null;
}): void {
  // Already open: a second trigger must not count as another click.
  if (state.open) return;
  const formType: FormType = 'appointment';
  const source = options.source === 'unknown' || isLeadQuizSource(options.source) ? options.source : 'unknown';
  const procedure = isCtaKey(options.procedure) ? options.procedure : pageTopic;

  pushLeadCtaEvent(formType, { source, procedure });
  state = { open: true, formType, source, procedure };
  emit();
}

export function closeLeadQuiz(): void {
  if (!state.open) return;
  state = CLOSED;
  emit();
}

export function useLeadQuizState(): LeadQuizState {
  return useSyncExternalStore(subscribe, getLeadQuizState, () => CLOSED);
}
