import { RECEPTION_SCHEDULE_COPY, type ReceptionIndicator } from '@/lib/contact-reception-schedule';

type Props = {
  state: ReceptionIndicator | null;
  locale: 'ru' | 'ro';
  /** id of the screen-reader text; the call link points at it with aria-describedby. */
  hoursId: string;
  /** Position inside the (relative) call button, e.g. "right-px top-px". */
  className: string;
};

/** True when the dot is rendered, i.e. the link should reference the hours text. */
export function hasReceptionDot(state: ReceptionIndicator | null): boolean {
  return state === 'open' || state === 'closed';
}

/**
 * 10 px status dot in the corner of the call button: green during reception hours, red on a
 * reception day outside them, nothing on days off. Colour is not the only signal: the red dot has
 * a white bar, and the schedule is available to screen readers as text.
 */
export default function ReceptionDot({ state, locale, hoursId, className }: Props) {
  if (state !== 'open' && state !== 'closed') return null;
  const open = state === 'open';

  return (
    <>
      <span
        aria-hidden
        data-reception-dot={state}
        className={`pointer-events-none absolute z-10 box-content size-2.5 rounded-full border-2 border-white shadow-sm ${
          open ? 'bg-green-400' : 'bg-red-500'
        } ${className}`}
      >
        {open ? null : (
          <span className="absolute left-1/2 top-1/2 h-0.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        )}
      </span>
      <span id={hoursId} className="sr-only">
        {RECEPTION_SCHEDULE_COPY[locale].hoursFooter}
      </span>
    </>
  );
}
