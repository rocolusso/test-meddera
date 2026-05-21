import { useEffect, useState } from 'react';

import {
  isReceptionDayOff,
  isReceptionMonday,
  isReceptionOpenAt,
  isReceptionSunday,
} from '@/lib/contact-reception-schedule';

export type ContactReceptionSchedule = {
  /** Tue–Sat, 13:00–18:00 local time */
  isOpenNow: boolean;
  isSunday: boolean;
  isMonday: boolean;
  /** Sunday or Monday */
  isDayOff: boolean;
  /** Tuesday–Saturday (reception days) */
  isReceptionDay: boolean;
  currentTime: string;
  weekdayLong: string;
};

function compute(now: Date, locale: string): ContactReceptionSchedule {
  const dow = now.getDay();
  const isSunday = isReceptionSunday(dow);
  const isMonday = isReceptionMonday(dow);
  const isDayOff = isReceptionDayOff(dow);
  const isReceptionDay = !isDayOff;
  const hours = now.getHours();
  const isOpenNow = isReceptionOpenAt(dow, hours);

  const loc = locale === 'ru' ? 'ru-RU' : 'ro-RO';
  const currentTime = now.toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit' });
  const weekdayLong = now.toLocaleDateString(loc, { weekday: 'long' });

  return {
    isOpenNow,
    isSunday,
    isMonday,
    isDayOff,
    isReceptionDay,
    currentTime,
    weekdayLong,
  };
}

/**
 * Client-side reception schedule: Tue–Sat 13:00–18:00, Mon & Sun closed.
 * Refreshes every minute so day/time stay accurate without heavy polling.
 */
export function useContactReceptionSchedule(locale: string): ContactReceptionSchedule {
  const [state, setState] = useState<ContactReceptionSchedule>(() =>
    compute(new Date(), locale),
  );

  useEffect(() => {
    const tick = () => setState(compute(new Date(), locale));
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [locale]);

  return state;
}
