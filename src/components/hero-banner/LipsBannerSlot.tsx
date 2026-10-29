import LeadQuizPageTopic from '@/components/lead/LeadQuizPageTopic';
import { isLipsBannerEnabled } from '@/lib/hero-banner/config';
import type { HeroBannerLocale } from '@/lib/hero-banner/copy';

import HeroBanner from './HeroBanner';

/**
 * Put between the header and `<main>` of every lip enlargement page (the service page and the blog
 * pages about lips). Outside `<main>` on purpose: the banner text must not become part of the page
 * content, which is protected (see scripts/verify-protected.mjs).
 *
 * Always tells the lead quiz that the page is about lips (the buttons of the page then open the lips
 * quiz); shows the banner itself only when LIPS_BANNER_ENABLED=true.
 */
export default function LipsBannerSlot({ locale }: { locale: HeroBannerLocale }) {
  return (
    <>
      <LeadQuizPageTopic procedure="lips" />
      {isLipsBannerEnabled() ? <HeroBanner locale={locale} variant="lips" /> : null}
    </>
  );
}
