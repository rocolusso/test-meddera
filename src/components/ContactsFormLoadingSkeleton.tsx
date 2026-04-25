/** Live region for contact form lazy-load; avoids aria-busy/aria-label on roleless div (Lighthouse). */
export function ContactsFormLoadingSkeleton({ message }: { message: string }) {
  return (
    <div className="min-h-[24rem] w-full" role="status" aria-live="polite">
      <span className="sr-only">{message}</span>
    </div>
  );
}
