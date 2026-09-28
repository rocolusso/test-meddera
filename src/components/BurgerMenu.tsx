'use client';

import React, { useEffect, useRef } from 'react';

import { useRouter } from 'next/navigation';

import { NAV_LINKS } from '@/lib/nav-links';

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
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

const itemClass =
  'flex w-full cursor-pointer items-center justify-between gap-3 border-b border-pofo-line px-5 py-3.5 text-left alt-font text-[12px] font-semibold uppercase tracking-[0.5px] text-white transition-colors hover:text-deep-pink focus:text-deep-pink focus:outline-none';

function BurgerMenu({ locale }: { locale: string }) {
  const [open, setOpen] = React.useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const loc = locale === 'ru' ? 'ru' : 'ro';

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
        className="inline-flex size-12 shrink-0 cursor-pointer touch-manipulation items-center justify-center text-pofo-heading transition-colors hover:text-deep-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <MenuIcon className="size-7" />
      </button>

      {open ? (
        <div
          role="menu"
          className="fixed inset-x-0 top-[calc(5.25rem+env(safe-area-inset-top,0px))] z-[200] max-h-[calc(100dvh-5.25rem)] overflow-y-auto bg-[#232323] pb-1 shadow-header animate-fade-in [animation-duration:0.25s]"
        >
          {NAV_LINKS.map((item) => (
            <button
              key={item.key}
              type="button"
              role="menuitem"
              className={itemClass}
              onClick={() => go(item.href[loc])}
            >
              <span>{item.label[loc]}</span>
              <ChevronRightIcon className="size-4 shrink-0 opacity-60" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default BurgerMenu;
