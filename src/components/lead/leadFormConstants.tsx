import { sendGa4Event } from '@/lib/ga4-worker-client';

export type Locale = 'ru' | 'ro';
/** The only form of the site. The server still accepts 'consultation' from pages cached before it was removed. */
export type FormType = 'appointment';

export interface QuizQuestion {
  key: string;
  prompt: Record<Locale, string>;
  options: Record<Locale, readonly string[]>;
}

/**
 * Label of the "book online" button. Lives here (not in leadFormCopy) because the button is on every page;
 * the quiz questions and modal texts stay in leadFormCopy.ts and load only with the modal.
 */
export const CTA_APPOINTMENT_LABEL = {
  ru: 'Записаться онлайн',
  ro: 'Programare online',
} as const satisfies Record<Locale, string>;

export function getLocaleFromPath(pathname: string | null | undefined): Locale {
  if (!pathname) return 'ru';
  return pathname === '/ro' || pathname.startsWith('/ro/') ? 'ro' : 'ru';
}

/** Quiz opened: a funnel step, not a conversion. `cta_source` tells which button it was. */
export function pushLeadCtaEvent(
  label: string,
  extra: { source?: string | null; procedure?: string | null } = {},
) {
  if (typeof window === 'undefined') return;
  sendGa4Event('lead_sticky_cta_click', {
    button_name: label,
    event_label: 'sticky_lead',
    ...(extra.source ? { cta_source: extra.source } : {}),
    ...(extra.procedure ? { procedure: extra.procedure } : {}),
  });
}
