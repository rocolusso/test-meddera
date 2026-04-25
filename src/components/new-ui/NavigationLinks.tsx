import Link from 'next/link';
const navBtnClass = [
  'inline-flex h-10 items-center justify-center rounded-full border border-border bg-transparent px-4',
  'text-sm font-medium text-foreground transition-colors',
  'hover:bg-accent hover:text-accent-foreground',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
].join(' ');

function NavigationLinks({ locale }: { locale: string }) {
  const isRu = locale === 'ru';
  const localeSwitchHref = isRu ? '/ro' : '/';

  return (
    <div className="hidden min-w-0 flex-1 items-center justify-end gap-2 sm:flex md:gap-3">
      <nav className="flex flex-wrap items-center justify-end gap-1.5 md:gap-2" aria-label="Main">
        <Link href={isRu ? '/' : '/ro'} className={navBtnClass}>
          {isRu ? 'Главная' : 'Acasă'}
        </Link>
        <Link href={isRu ? '/about' : '/ro/about'} className={navBtnClass}>
          {isRu ? 'Обо мне' : 'Despre mine'}
        </Link>
        <Link href={isRu ? '/services' : '/ro/services'} className={navBtnClass}>
          {isRu ? 'Услуги' : 'Servicii'}
        </Link>
        <Link href={isRu ? '/blog' : '/ro/blog'} className={navBtnClass}>
          {isRu ? 'Блог' : 'Blog'}
        </Link>
        <Link href={isRu ? '/contacts' : '/ro/contacts'} className={navBtnClass}>
          {isRu ? 'Контакты' : 'Contacte'}
        </Link>
      </nav>
      <Link
        href={localeSwitchHref}
        className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-border px-3.5 text-xs font-semibold tracking-wider text-foreground transition-colors hover:border-ring hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="locale-btn"
      >
        {isRu ? 'RO' : 'RU'}
      </Link>
    </div>
  );
}

export default NavigationLinks;
