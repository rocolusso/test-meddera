/**
 * Pofo (blog-post-layout-01) class names for blog article / hub bodies.
 * Presentation only; content and structure live in the *Body.tsx files.
 */
const metaBase = 'alt-font text-[12px] uppercase leading-5 tracking-[0.5px] text-pofo-medium-gray';

export const blogUi = {
  breadcrumbs: `${metaBase} mb-6`,
  crumbLink: 'underline decoration-border underline-offset-4 transition-colors hover:text-accent-text',
  crumbCurrent: 'text-pofo-heading',
  meta: `${metaBase} mb-2`,
  h1: 'alt-font mb-6 text-balance text-[28px] font-semibold leading-[36px] text-pofo-heading md:text-[36px] md:leading-[44px]',
  h1Loose: 'alt-font mb-8 text-balance text-[28px] font-semibold leading-[36px] text-pofo-heading md:text-[36px] md:leading-[44px]',
  h2: 'alt-font mb-4 text-[22px] font-semibold leading-[30px] text-pofo-heading md:text-[24px] md:leading-[32px]',
  h2Tight: 'alt-font mb-3 text-[22px] font-semibold leading-[30px] text-pofo-heading md:text-[24px] md:leading-[32px]',
  h2Small: 'alt-font mb-4 text-[20px] font-semibold leading-[28px] text-pofo-heading',
  boxTitle: 'alt-font mb-3 text-[16px] font-semibold leading-[24px] text-pofo-heading',
  boxTitleTight: 'alt-font mb-2 text-[16px] font-semibold leading-[24px] text-pofo-heading',
  p: 'text-muted-foreground',
  pMb4: 'mb-4 text-muted-foreground',
  pMb4Last: 'mb-4 text-muted-foreground last:mb-0',
  pMb6: 'mb-6 text-muted-foreground',
  pMb10: 'mb-10 text-muted-foreground',
  small: 'text-[14px] leading-[24px] text-muted-foreground',
  smallMb3: 'mb-3 text-[14px] leading-[24px] text-muted-foreground',
  /** Bullets come from ContentArticleBody (Pofo pink dash). */
  ul: 'mb-4 space-y-2.5 text-muted-foreground',
  ol: 'mb-4 list-decimal space-y-3 pl-6 text-muted-foreground marker:font-semibold marker:text-deep-pink',
  link: 'font-medium text-accent-text underline decoration-deep-pink/40 underline-offset-4 transition-colors hover:text-pofo-heading',
  linkStrong: 'text-pofo-heading underline decoration-border underline-offset-4 transition-colors hover:text-accent-text',
  /** Informational disclaimer (was yellow box). */
  disclaimerBox: 'mb-8 border-l-2 border-deep-pink bg-pofo-light-gray px-5 py-4',
  /** "Medical review" / E-E-A-T box. */
  reviewBox: 'mb-8 border-l-2 border-deep-pink bg-pofo-light-gray p-6 md:p-8',
  ctaBox: 'mt-12 border-t-2 border-deep-pink bg-pofo-light-gray p-6 md:p-8',
  /** Pofo btn-dark-gray. */
  backButton:
    'alt-font inline-block border-2 border-[#232323] bg-[#232323] px-[34px] py-[9px] text-[12px] font-semibold uppercase leading-[25px] tracking-[0.5px] text-white transition-colors duration-300 hover:bg-transparent hover:text-pofo-heading dark:border-white/25 dark:bg-white/10 dark:hover:bg-transparent',
  footerDisclaimer: 'border-t border-border pt-6 text-[13px] leading-[22px] text-pofo-medium-gray',
} as const;
