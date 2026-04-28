'use client';

import React, { useEffect, useRef, useState } from 'react';

import { THEME_STORAGE_KEY } from '@/lib/theme-inline-script';
import { cn } from '@/lib/utils';

function SunIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
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
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

type Locale = 'ru' | 'ro';

function ThemeToggle({ locale }: { locale: Locale }) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const lastToggleAt = useRef(0);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const now = Date.now();
    if (now - lastToggleAt.current < 400) return;
    lastToggleAt.current = now;

    const nextDark = !document.documentElement.classList.contains('dark');
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_STORAGE_KEY, 'light');
    }
    setIsDark(nextDark);
  };

  const ariaLabel =
    locale === 'ru'
      ? isDark
        ? 'Включить светлую тему'
        : 'Включить тёмную тему'
      : isDark
        ? 'Activează tema deschisă'
        : 'Activează tema întunecată';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ariaLabel}
      className={cn(
        'relative z-10 flex size-12 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-full border border-border sm:size-10',
        'bg-background/80 text-foreground transition-colors duration-200',
        'hover:border-ring hover:text-brand-gold',
        'pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      )}
    >
      {!mounted ? (
        <span className="size-6 sm:size-5" aria-hidden />
      ) : isDark ? (
        <SunIcon className="size-6 sm:size-5" />
      ) : (
        <MoonIcon className="size-6 sm:size-5" />
      )}
    </button>
  );
}

export default ThemeToggle;
