import React from 'react';

type Props = { text: string; ranges: number[] };

/** Wraps the [start, end] ranges of `text` in <mark>. Plain React nodes, no raw HTML. */
export default function Highlighted({ text, ranges }: Props) {
  if (ranges.length === 0) return <>{text}</>;
  const nodes: React.ReactNode[] = [];
  let pos = 0;
  for (let i = 0; i + 1 < ranges.length; i += 2) {
    const start = ranges[i];
    const end = ranges[i + 1];
    if (start >= pos && end <= text.length && end > start) {
      if (start > pos) nodes.push(text.slice(pos, start));
      nodes.push(
        <mark key={start} className="bg-deep-pink/15 text-inherit">
          {text.slice(start, end)}
        </mark>,
      );
      pos = end;
    }
  }
  if (pos < text.length) nodes.push(text.slice(pos));
  return <>{nodes}</>;
}
