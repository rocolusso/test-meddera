'use client';

import { useId, useState } from 'react';
import type { ReactNode } from 'react';

type ReadMoreProps = {
  /** Full content: always in the server-rendered HTML, so crawlers see it whether it is collapsed or not. */
  children: ReactNode;
  /** Collapsed height in pixels. */
  maxHeight?: number;
  /** CSS colour the fade-out gradient blends into: the background of the section. */
  fadeColor?: string;
  expandLabel: string;
  collapseLabel: string;
  className?: string;
};

/**
 * "Read more" collapse: only clips visually (max-height + overflow), never display:none or unmounting, so the
 * whole text is in the initial HTML on every render. Only the visible height changes on click.
 * Ported from the vezu.md project. Keep the lead paragraph outside of it so it is always visible.
 */
export default function ReadMore({
  children,
  maxHeight = 400,
  fadeColor = 'var(--background)',
  expandLabel,
  collapseLabel,
  className,
}: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();

  return (
    <div className={className} data-read-more data-expanded={expanded}>
      <div
        id={contentId}
        data-read-more-content
        className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out motion-reduce:transition-none"
        style={{ maxHeight: expanded ? 'none' : `${maxHeight}px` }}
      >
        {children}

        {!expanded && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
            style={{ background: `linear-gradient(to bottom, transparent, ${fadeColor})` }}
          />
        )}
      </div>

      <div className="relative mt-2 flex justify-center">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={() => setExpanded((v) => !v)}
          className="alt-font cursor-pointer px-4 py-2 text-sm font-semibold text-accent-text underline underline-offset-4 transition-colors hover:no-underline md:text-base"
        >
          {expanded ? collapseLabel : expandLabel}
        </button>
      </div>
    </div>
  );
}
