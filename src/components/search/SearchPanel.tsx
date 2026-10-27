'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useSiteSearch } from '@/hooks/useSiteSearch';
import { SEARCH_PATH, SEARCH_STRINGS } from '@/lib/search/strings';
import type { SearchLocale } from '@/lib/search/types';

import SearchIcon from './SearchIcon';
import SearchResultsList from './SearchResultsList';

const PANEL_LIMIT = 8;

type Props = {
  locale: SearchLocale;
  onClose: () => void;
  /** Element that gets focus back when the panel closes. Defaults to the one focused on open. */
  returnFocusTo?: () => HTMLElement | null;
};

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function SearchPanel({ locale, onClose, returnFocusTo }: Props) {
  const t = SEARCH_STRINGS[locale];
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnRef = useRef(returnFocusTo);
  useEffect(() => {
    returnRef.current = returnFocusTo;
  });
  const listboxId = useId();

  const [query, setQuery] = useState('');
  const [active, setActive] = useState(-1);
  const { status, data, retry } = useSiteSearch(query, locale, PANEL_LIMIT);
  const results = data?.results ?? [];
  const trimmed = query.trim();
  const listVisible = results.length > 0 && status !== 'idle';

  // Native modal dialog: focus trap, inert page behind it and Esc come from the browser.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (!dialog.open) dialog.showModal();
    inputRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
      const target = returnRef.current?.() ?? opener;
      if (target && target.isConnected) target.focus();
    };
  }, []);

  useEffect(() => {
    setActive(-1);
  }, [data]);

  useEffect(() => {
    if (active < 0) return;
    document.getElementById(`${listboxId}-opt-${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [active, listboxId]);

  const goTo = (href: string) => {
    onClose();
    router.push(href);
  };

  const resultsPageHref = `${SEARCH_PATH[locale]}?q=${encodeURIComponent(trimmed)}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selected = active >= 0 ? results[active] : undefined;
    if (selected) {
      goTo(selected.url);
    } else if (trimmed.length >= 2) {
      goTo(resultsPageHref);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // A search input would clear its text on the first Esc; the panel should simply close.
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }
    if (results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i <= 0 ? results.length - 1 : i - 1));
    }
  };

  let message: React.ReactNode = null;
  if (status === 'idle') message = t.hint;
  else if (status === 'loading' && results.length === 0) message = t.loading;
  else if (status === 'empty') message = t.empty;
  else if (status === 'error') {
    message = (
      <>
        {t.error}
        {' '}
        <button type="button" onClick={retry} className="font-semibold text-deep-pink underline">
          {t.retry}
        </button>
      </>
    );
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={t.title}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-x-0 top-0 m-0 mx-auto mb-auto max-h-[100dvh] w-full max-w-none overflow-hidden border-0 bg-background p-0 text-pofo-heading shadow-header backdrop:bg-black/50 sm:mt-[8dvh] sm:max-h-[80dvh] sm:max-w-2xl sm:border sm:border-border"
    >
      <div className="flex max-h-[inherit] flex-col">
        <form role="search" onSubmit={onSubmit} className="flex shrink-0 items-center gap-2 border-b border-border px-4 py-2">
          <SearchIcon className="size-5 shrink-0 text-pofo-text" />
          <input
            ref={inputRef}
            type="search"
            name="q"
            role="combobox"
            aria-label={t.placeholder}
            aria-expanded={listVisible}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={active >= 0 ? `${listboxId}-opt-${active}` : undefined}
            enterKeyHint="search"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            maxLength={64}
            placeholder={t.placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            className="h-11 min-w-0 flex-1 appearance-none bg-transparent text-[16px] text-pofo-heading outline-none placeholder:text-pofo-text/70 [&::-webkit-search-cancel-button]:hidden"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="inline-flex size-10 shrink-0 items-center justify-center text-pofo-heading transition-colors hover:text-deep-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <CloseIcon className="size-5" />
          </button>
        </form>

        <div className="min-h-0 overflow-y-auto overscroll-contain">
          <p role="status" aria-live="polite" className={message ? 'px-4 py-4 text-[14px] text-pofo-text' : 'sr-only'}>
            {message ?? (status === 'results' ? t.shown(results.length, data?.total ?? results.length) : '')}
          </p>
          {listVisible ? (
            <div className={status === 'loading' ? 'opacity-60 transition-opacity' : 'transition-opacity'}>
              <SearchResultsList
                results={results}
                locale={locale}
                listboxId={listboxId}
                activeIndex={active}
                onNavigate={onClose}
              />
            </div>
          ) : null}
          {status === 'results' ? (
            <a
              href={resultsPageHref}
              onClick={(e) => {
                e.preventDefault();
                goTo(resultsPageHref);
              }}
              className="alt-font block border-t border-border px-4 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.5px] text-pofo-heading hover:text-deep-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
            >
              {t.allResults}
            </a>
          ) : null}
        </div>
      </div>
    </dialog>
  );
}
