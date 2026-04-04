'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

import { THEME_STORAGE_KEY } from '@/lib/theme-inline-script';
import { cn } from '@/lib/utils';

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
        <Sun className="size-6 sm:size-5" aria-hidden />
      ) : (
        <Moon className="size-6 sm:size-5" aria-hidden />
      )}
    </button>
  );
}

export default ThemeToggle;
