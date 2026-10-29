import Link from 'next/link';
import LocaleSwitchLink from '@/components/new-ui/LocaleSwitchLink';
import SearchTrigger from '@/components/search/SearchTrigger';
import { isGoogleReviewsEnabled } from '@/lib/google-reviews/config';
import { getNavLinks, toNavLocale } from '@/lib/nav-links';
import { SEARCH_UI_ENABLED } from '@/lib/search/config';

/** Pofo menu link: Montserrat, 12px, uppercase, 600, pink on hover. */
const navLinkClass = [
  'alt-font inline-flex items-center py-1.5 text-[11px] font-semibold uppercase leading-5 tracking-[0.015em] text-pofo-heading transition-colors duration-200 md:text-[12px]',
  'hover:text-deep-pink',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
].join(' ');

/** With the sixth link ("Отзывы") the row needs tighter gaps and, below md, a 10px font to stay on one line. */
const GAPS_FIVE = 'gap-x-3 md:gap-x-4 lg:gap-x-8';
const GAPS_SIX = 'gap-x-2 md:gap-x-3 lg:gap-x-8';

function NavigationLinks({ locale }: { locale: string }) {
  const loc = toNavLocale(locale);
  const withReviews = isGoogleReviewsEnabled();

  return (
    <div className={`hidden min-w-0 flex-1 items-center justify-end sm:flex ${withReviews ? 'gap-2 lg:gap-5' : 'gap-3 lg:gap-5'}`}>
      <nav className={`flex flex-wrap items-center justify-end gap-y-1 ${withReviews ? GAPS_SIX : GAPS_FIVE}`} aria-label="Main">
        {getNavLinks(withReviews).map((item) => (
          <Link key={item.key} href={item.href[loc]} className={withReviews ? `${navLinkClass} max-md:text-[10px]` : navLinkClass}>
            {item.label[loc]}
          </Link>
        ))}
      </nav>
      {SEARCH_UI_ENABLED ? (
        <SearchTrigger
          locale={loc}
          className="inline-flex size-9 shrink-0 cursor-pointer items-center justify-center border border-border text-pofo-heading transition-colors hover:border-deep-pink hover:text-deep-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      ) : null}
      <LocaleSwitchLink
        locale={loc}
        className="alt-font inline-flex h-9 min-w-9 shrink-0 items-center justify-center border border-border px-2 text-[11px] font-semibold uppercase tracking-[1px] text-pofo-heading transition-colors hover:border-deep-pink hover:text-deep-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        ariaLabel="locale-btn"
      />
    </div>
  );
}

export default NavigationLinks;
