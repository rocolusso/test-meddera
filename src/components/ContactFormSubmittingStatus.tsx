'use client';

/**
 * Inline “sending…” alert with spinner while the contact form request is in flight.
 */
export function ContactFormSubmittingStatus({
  locale,
  active,
}: {
  locale: string;
  active: boolean;
}) {
  if (!active) return null;

  return (
    <div
      className="submit_alert mb-5 flex animate-in fade-in slide-in-from-top-2 flex-wrap items-center gap-3 rounded-lg border border-primary/35 bg-primary/5 p-4 duration-300 motion-reduce:animate-none dark:border-primary/45 dark:bg-primary/10"
      role="status"
      aria-live="polite"
    >
      <span
        className="inline-block size-8 shrink-0 rounded-full border-[3px] border-border border-t-brand-gold motion-reduce:animate-none animate-spin"
        aria-hidden
      />
      <span className="text-sm font-medium text-foreground">
        {locale === 'ru' ? 'Отправка сообщения…' : 'Se trimite mesajul…'}
      </span>
    </div>
  );
}
