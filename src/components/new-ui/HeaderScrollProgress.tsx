'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

type Props = {
  locale: string;
};

export default function HeaderScrollProgress({ locale }: Props) {
  const progress = useScrollProgress();
  const ariaLabel =
    locale === 'ro' ? 'Progresul derulării paginii' : 'Прогресс прокрутки страницы';

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-label={ariaLabel}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-border/30"
    >
      <div
        className="h-full w-full origin-left bg-red-600 will-change-transform motion-reduce:transition-none dark:bg-red-500"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}
