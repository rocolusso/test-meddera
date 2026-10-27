import { CTA_CALL_LABEL, CLINIC_TEL_HREF } from '@/lib/cta/keys';
import { ctaButtonLabel, type CtaEntry, type CtaLocale } from '@/lib/cta/registry';

import DoctorPhoto from './DoctorPhoto';
import PhoneIcon from './PhoneIcon';

type Props = {
  entry: CtaEntry;
  locale: CtaLocale;
  /** Where the card stands: the end of an article or the end of a hub page. */
  source: 'article_card' | 'hub_card';
};

/**
 * Call-to-action card at the end of an article or hub: the doctor's photo, a short text for the
 * procedure, a button that opens the lead quiz and a phone link.
 *
 * A server component with no client code of its own: the quiz opens through the delegated
 * `[data-open-quiz]` handler (LeadQuizHost), the call is counted by TelClickTracker from the
 * data-cta-* attributes. The title is a paragraph, not a heading, so the page outline does not change.
 */
export default function ArticleCta({ entry, locale, source }: Props) {
  return (
    <div
      data-cta={source}
      data-procedure={entry.key}
      className="my-10 flex flex-col gap-5 border-l-2 border-deep-pink bg-pofo-light-gray p-6 sm:flex-row sm:items-start md:p-8"
    >
      <DoctorPhoto size={64} className="size-16 border-2 border-white shadow-md" />
      <div className="min-w-0 flex-1">
        <p className="alt-font mb-2 text-[18px] font-semibold leading-[26px] text-pofo-heading">{entry.cardTitle[locale]}</p>
        <p className="mb-5 text-[15px] leading-[26px] text-muted-foreground">{entry.cardText[locale]}</p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            data-open-quiz
            data-cta-source={source}
            data-cta-procedure={entry.key}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-6 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition active:scale-95"
          >
            {ctaButtonLabel(entry, locale)}
          </button>
          <a
            href={CLINIC_TEL_HREF}
            data-cta-event="phone_click_simple1"
            data-cta-source={`${source}_call`}
            data-cta-procedure={entry.key}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-pofo-heading transition hover:border-[#00aa2d] hover:text-[#00aa2d] active:scale-95"
          >
            <PhoneIcon className="size-4" />
            {CTA_CALL_LABEL[locale]}
          </a>
        </div>
      </div>
    </div>
  );
}
