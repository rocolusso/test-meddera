/**
 * Shared Pofo-style class names for contact forms (Сontacts, СontactsLips, LeadQuizModal).
 * Presentation only — no logic lives here.
 */

/** Pofo "big-input": square, 1px border, generous padding, dark border on focus. */
export function contactFieldClass(hasError: boolean): string {
  return [
    'mt-2 w-full rounded-none border bg-background px-5 py-[13px] text-[14px] leading-[24px] text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none sm:px-[25px]',
    hasError
      ? 'border-red-600 focus:border-red-600 dark:border-red-500'
      : 'border-input focus:border-pofo-heading',
  ].join(' ');
}

export const contactFieldErrorClass = 'mt-1.5 text-sm text-red-600 dark:text-red-400';

export const contactAlertErrorClass =
  'mb-5 border-l-2 border-red-600 bg-red-50 p-4 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-100';

export const contactAlertSuccessClass =
  'mb-5 border-l-2 border-green-600 bg-green-50 p-4 text-sm text-green-800 dark:bg-green-950/40 dark:text-green-100';

/** Pofo icon-round: pink circle with white glyph. */
export const contactIconRoundClass =
  'mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-deep-pink text-white sm:mt-0';

export const contactCardTitleClass =
  'alt-font text-center text-[20px] font-semibold leading-[28px] text-pofo-heading';
