'use client';

import React, { useEffect, useRef } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { getAlternateLocalePath } from '@/lib/locale-switch';

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 8h14M5 12h14M5 16h14" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function BurgerMenu({ locale }: { locale: string }) {
  const [open, setOpen] = React.useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const loc = locale === 'ru' ? 'ru' : 'ro';
  const localeSwitchHref = getAlternateLocalePath(pathname ?? '/', loc);

  const go = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      const el = wrapRef.current;
      const target = e.target as Node | null;
      if (el && target && !el.contains(target)) setOpen(false);
    };
    document.addEventListener('pointerdown', close, true);
    return () => document.removeEventListener('pointerdown', close, true);
  }, [open]);

  return (
    <div ref={wrapRef} className="relative z-10 sm:hidden">
      <button
        type="button"
        aria-label="burger-btn-trigger"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-12 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-2xl border border-border bg-background text-foreground shadow-sm transition-colors hover:border-ring hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
      >
        <MenuIcon className="size-7" />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-[200] w-[min(100vw-1.5rem,18rem)] rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-lg"
        >
          {locale === 'ru' ? (
            <>
              <button
                type="button"
                role="menuitem"
                className="flex w-full cursor-pointer rounded-lg px-2 py-0 text-left focus:bg-accent focus:outline-none"
                onClick={() => go('/')}
              >
                <span className="flex w-full items-center justify-between gap-3 py-2.5 pl-1 pr-1">
                  <span className="text-sm font-medium tracking-tight">Главная</span>
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                </span>
              </button>
              <button
                type="button"
                role="menuitem"
                className="flex w-full cursor-pointer rounded-lg px-2 py-0 text-left focus:bg-accent focus:outline-none"
                onClick={() => go('/about')}
              >
                <span className="flex w-full items-center justify-between gap-3 py-2.5 pl-1 pr-1">
                  <span className="text-sm font-medium tracking-tight">Обо мне</span>
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                </span>
              </button>
              <button
                type="button"
                role="menuitem"
                className="flex w-full cursor-pointer rounded-lg px-2 py-0 text-left focus:bg-accent focus:outline-none"
                onClick={() => go('/services')}
              >
                <span className="flex w-full items-center justify-between gap-3 py-2.5 pl-1 pr-1">
                  <span className="text-sm font-medium tracking-tight">Услуги</span>
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                </span>
              </button>
              <button
                type="button"
                role="menuitem"
                className="flex w-full cursor-pointer rounded-lg px-2 py-0 text-left focus:bg-accent focus:outline-none"
                onClick={() => go('/blog')}
              >
                <span className="flex w-full items-center justify-between gap-3 py-2.5 pl-1 pr-1">
                  <span className="text-sm font-medium tracking-tight">Блог</span>
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                </span>
              </button>
              <button
                type="button"
                role="menuitem"
                className="flex w-full cursor-pointer rounded-lg px-2 py-0 text-left focus:bg-accent focus:outline-none"
                onClick={() => go('/contacts')}
              >
                <span className="flex w-full items-center justify-between gap-3 py-2.5 pl-1 pr-1">
                  <span className="text-sm font-medium tracking-tight">Контакты</span>
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                </span>
              </button>
              <div className="my-1.5 h-px bg-border" aria-hidden />
              <Link
                href={localeSwitchHref}
                role="menuitem"
                className="flex w-full items-center justify-center rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm font-semibold tracking-wider text-foreground transition-colors hover:border-ring hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                RO
              </Link>
            </>
          ) : (
            <>
              <button
                type="button"
                role="menuitem"
                className="flex w-full cursor-pointer rounded-lg px-2 py-0 text-left focus:bg-accent focus:outline-none"
                onClick={() => go('/ro')}
              >
                <span className="flex w-full items-center justify-between gap-3 py-2.5 pl-1 pr-1">
                  <span className="text-sm font-medium tracking-tight">Acasă</span>
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                </span>
              </button>
              <button
                type="button"
                role="menuitem"
                className="flex w-full cursor-pointer rounded-lg px-2 py-0 text-left focus:bg-accent focus:outline-none"
                onClick={() => go('/ro/about')}
              >
                <span className="flex w-full items-center justify-between gap-3 py-2.5 pl-1 pr-1">
                  <span className="text-sm font-medium tracking-tight">Despre mine</span>
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                </span>
              </button>
              <button
                type="button"
                role="menuitem"
                className="flex w-full cursor-pointer rounded-lg px-2 py-0 text-left focus:bg-accent focus:outline-none"
                onClick={() => go('/ro/services')}
              >
                <span className="flex w-full items-center justify-between gap-3 py-2.5 pl-1 pr-1">
                  <span className="text-sm font-medium tracking-tight">Servicii</span>
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                </span>
              </button>
              <button
                type="button"
                role="menuitem"
                className="flex w-full cursor-pointer rounded-lg px-2 py-0 text-left focus:bg-accent focus:outline-none"
                onClick={() => go('/ro/blog')}
              >
                <span className="flex w-full items-center justify-between gap-3 py-2.5 pl-1 pr-1">
                  <span className="text-sm font-medium tracking-tight">Blog</span>
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                </span>
              </button>
              <button
                type="button"
                role="menuitem"
                className="flex w-full cursor-pointer rounded-lg px-2 py-0 text-left focus:bg-accent focus:outline-none"
                onClick={() => go('/ro/contacts')}
              >
                <span className="flex w-full items-center justify-between gap-3 py-2.5 pl-1 pr-1">
                  <span className="text-sm font-medium tracking-tight">Contacte</span>
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                </span>
              </button>
              <div className="my-1.5 h-px bg-border" aria-hidden />
              <Link
                href={localeSwitchHref}
                role="menuitem"
                className="flex w-full items-center justify-center rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm font-semibold tracking-wider text-foreground transition-colors hover:border-ring hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                RU
              </Link>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default BurgerMenu;
