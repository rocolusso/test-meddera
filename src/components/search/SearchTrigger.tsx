'use client';

import React, { useState } from 'react';

import { SEARCH_STRINGS } from '@/lib/search/strings';
import type { SearchLocale } from '@/lib/search/types';

import { LazySearchPanel, preloadSearchPanel } from './LazySearchPanel';
import SearchIcon from './SearchIcon';

type Props = { locale: SearchLocale; className: string };

export default function SearchTrigger({ locale, className }: Props) {
  const [open, setOpen] = useState(false);
  const label = SEARCH_STRINGS[locale].open;

  return (
    <>
      <button
        type="button"
        aria-label={label}
        aria-haspopup="dialog"
        aria-expanded={open}
        onPointerEnter={preloadSearchPanel}
        onFocus={preloadSearchPanel}
        onClick={() => setOpen(true)}
        className={className}
      >
        <SearchIcon className="size-4" />
      </button>
      {open ? <LazySearchPanel locale={locale} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
