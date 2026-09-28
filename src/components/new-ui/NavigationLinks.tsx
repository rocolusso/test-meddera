import Link from 'next/link';
import LocaleSwitchLink from '@/components/new-ui/LocaleSwitchLink';
import { NAV_LINKS, toNavLocale } from '@/lib/nav-links';

/** Pofo menu link: Montserrat, 12px, uppercase, 600, pink on hover. */
const navLinkClass = [
  'alt-font inline-flex items-center py-1.5 text-[11px] font-semibold uppercase leading-5 tracking-[0.015em] text-pofo-heading transition-colors duration-200 md:text-[12px]',
  'hover:text-deep-pink',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
].join(' ');

function NavigationLinks({ locale }: { locale: string }) {
  const loc = toNavLocale(locale);

  return (
    <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 sm:flex md:gap-5">
      <nav className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 md:gap-x-5 lg:gap-x-8" aria-label="Main">
        {NAV_LINKS.map((item) => (
          <Link key={item.key} href={item.href[loc]} className={navLinkClass}>
            {item.label[loc]}
          </Link>
        ))}
      </nav>
      <LocaleSwitchLink
        locale={loc}
        className="alt-font inline-flex h-9 min-w-9 shrink-0 items-center justify-center border border-border px-2 text-[11px] font-semibold uppercase tracking-[1px] text-pofo-heading transition-colors hover:border-deep-pink hover:text-deep-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        ariaLabel="locale-btn"
      />
    </div>
  );
}

export default NavigationLinks;
