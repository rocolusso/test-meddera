'use client';

import { useContactReceptionSchedule } from '@/hooks/useContactReceptionSchedule';

type Props = {
  locale: 'ru' | 'ro';
  compact?: boolean;
};

export default function ClinicConsultationInfo({ locale, compact = false }: Props) {
  const { isOpenNow, isSunday, currentTime, weekdayLong } = useContactReceptionSchedule(locale);
  const textClass = compact ? 'text-xs sm:text-sm' : 'text-sm sm:text-base';

  return (
    <div className="working-time-message mx-auto flex max-w-[520px] flex-col items-center justify-center px-2">
      <div className="pb-3 text-center">
        <p className={`uppercase text-muted-foreground ${textClass}`}>
          {locale === 'ru' ? 'Часы работы по предварительной записи:' : 'Program de lucru doar cu programare prealabilă:'}
          {' '}
          13:00 - 18:00
        </p>
      </div>

      <div className="pb-2 text-center">
        <p className={`text-muted-foreground ${textClass}`}>
          {locale === 'ru'
            ? 'Дни приёма: понедельник — суббота. Воскресенье — выходной.'
            : 'Zile de recepție: luni — sâmbătă. Duminică — închis.'}
        </p>
      </div>

      <div className="pb-3 text-center">
        <p className={`capitalize text-muted-foreground ${textClass}`}>
          {locale === 'ru' ? 'Сегодня:' : 'Astăzi:'}
          {' '}
          <span className="font-semibold text-foreground">{weekdayLong}</span>
        </p>
      </div>

      <div className="pb-3 text-center">
        <p className={`rounded-lg font-bold text-foreground ${compact ? 'p-2 text-xs sm:text-sm' : 'p-3 text-sm'}`}>
          {locale === 'ru'
            ? 'Стоимость первичной консультации 400 MDL. Повторно - 250 MDL'
            : 'Costul de bază al consultației este de 400 MDL. Repetată — 250 MDL'}
        </p>
      </div>

      <div className="text-center">
        <p className={!isOpenNow
          ? `rounded-lg bg-red-800 p-3 text-white ${textClass}`
          : `mb-4 rounded-lg bg-emerald-800 p-3 text-white ${textClass}`}
        >
          {isOpenNow
            ? (locale === 'ru' ? 'Мы открыты!' : 'Suntem deschiși!')
            : isSunday
              ? (locale === 'ru'
                ? 'Статус: закрыты. Сегодня выходной — мы не принимаем по воскресеньям. Но оставьте своё сообщение, и мы свяжемся с вами в ближайшее время.'
                : 'Stare: închis. Astăzi este zi liberă — nu lucrăm duminica. Dar lăsați mesajul dvs., iar noi vă vom contacta în cel mai scurt timp.')
              : (locale === 'ru'
                ? 'Сейчас мы не работаем, но оставьте свои данные, и мы перезвоним в ближайшее время.'
                : 'Acum suntem închisi, dar lăsați datele dumneavoastră și vă vom contacta în cel mai scurt timp.')}
        </p>
      </div>

      {!isOpenNow ? (
        <p className={`py-2 uppercase text-muted-foreground ${textClass}`}>
          {locale === 'ru' ? 'Текущее время:' : 'Ora curentă:'}
          {' '}
          {currentTime}
        </p>
      ) : null}

      {!isOpenNow ? (
        <p className={`pb-3 uppercase text-muted-foreground ${textClass}`}>
          {locale === 'ru' ? 'Пн–сб 13:00–18:00 · вс — выходной' : 'Lun–sâm 13:00–18:00 · dum — închis'}
        </p>
      ) : null}
    </div>
  );
}
