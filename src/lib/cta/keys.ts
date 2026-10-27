/**
 * Keys and allowlists of the call-to-action system, without any texts.
 * The quiz store and host are in the main bundle of every page and import only this file;
 * the texts (registry.ts) are loaded together with the lazy quiz modal.
 */

export const CTA_KEYS = [
  'botox',
  'lips',
  'bio',
  'fillers',
  'meso',
  'peeling',
  'derm',
  'acne',
  'pigment',
  'meso_hair',
  'consultation',
] as const;

export type CtaKey = (typeof CTA_KEYS)[number];

export function isCtaKey(value: unknown): value is CtaKey {
  return typeof value === 'string' && (CTA_KEYS as readonly string[]).includes(value);
}

/** Places a quiz can be opened from. The server accepts only these values. */
export const LEAD_QUIZ_SOURCES = [
  'float_book',
  'float_consult',
  'dock_book',
  'article_card',
  'hub_card',
  'teaser_scroll60',
] as const;

export type LeadQuizSource = (typeof LEAD_QUIZ_SOURCES)[number];

export function isLeadQuizSource(value: unknown): value is LeadQuizSource {
  return typeof value === 'string' && (LEAD_QUIZ_SOURCES as readonly string[]).includes(value);
}
