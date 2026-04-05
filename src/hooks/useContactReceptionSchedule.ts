import { useEffect, useState } from 'react';

const WORK_START = 13;
const WORK_END = 18;

export type ContactReceptionSchedule = {
  /** Mon–Sat, 13:00–18:00 local time */
  isOpenNow: boolean;
  isSunday: boolean;
  /** Monday–Saturday (reception days) */
  isReceptionDay: boolean;
  currentTime: string;
  weekdayLong: string;
};

function compute(now: Date, locale: string): ContactReceptionSchedule {
  const dow = now.getDay();
  const isSunday = dow === 0;
  const isReceptionDay = dow >= 1 && dow <= 6;
  const hours = now.getHours();
  const inHours = hours >= WORK_START && hours < WORK_END;
  const isOpenNow = isReceptionDay && inHours;

  const loc = locale === 'ru' ? 'ru-RU' : 'ro-RO';
  const currentTime = now.toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit' });
  const weekdayLong = now.toLocaleDateString(loc, { weekday: 'long' });

  return {
    isOpenNow,
    isSunday,
    isReceptionDay,
    currentTime,
    weekdayLong,
  };
}

/**
 * Client-side reception schedule: Mon–Sat 13:00–18:00, Sunday closed.
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
