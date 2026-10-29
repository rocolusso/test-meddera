import { isLipsEndBannerEnabled } from '@/lib/hero-banner/config';
import type { HeroBannerLocale } from '@/lib/hero-banner/copy';

import LipsEndBanner from './LipsEndBanner';

/**
 * The closing banner of the lip enlargement pages. Shows it only when LIPS_END_BANNER_ENABLED=true. It
 * does not set the topic of the lead quiz: the slot at the top of the same page already does.
 *
 * `placement="page"` (default): after `<main>`, before the contacts block of the service page. Outside
 * `<main>` there, so its text is not part of the protected text of the service page.
 * `placement="inline"`: inside the text of a hub (before the list of articles) and of an article (after
 * the "Запись на консультацию" section). Its text is then part of the main text of those pages.
 */
export default function LipsEndBannerSlot({ locale, placement = 'page' }: { locale: HeroBannerLocale; placement?: 'page' | 'inline' }) {
  return isLipsEndBannerEnabled() ? <LipsEndBanner locale={locale} placement={placement} /> : null;
}
