/** Reception: Tue, Thu–Sat 13:00–18:00 local; Mon, Wed & Sun closed. */
export const RECEPTION_WORK_START = 13;
export const RECEPTION_WORK_END = 18;

/** `Date.getDay()`: 0 = Sun, 1 = Mon, … 6 = Sat */
export function isReceptionSunday(dow: number): boolean {
  return dow === 0;
}

export function isReceptionMonday(dow: number): boolean {
  return dow === 1;
}

export function isReceptionWednesday(dow: number): boolean {
  return dow === 3;
}

export function isReceptionDayOff(dow: number): boolean {
  return isReceptionSunday(dow) || isReceptionMonday(dow) || isReceptionWednesday(dow);
}

/** Tuesday, Thursday–Saturday */
export function isReceptionWeekday(dow: number): boolean {
  return !isReceptionDayOff(dow);
}

export function isReceptionOpenAt(dow: number, hour: number): boolean {
  return isReceptionWeekday(dow) && hour >= RECEPTION_WORK_START && hour < RECEPTION_WORK_END;
}

export const RECEPTION_SCHEDULE_COPY = {
  ru: {
    hoursRange: '13:00–18:00',
    daysSummary: 'Дни приёма: вторник, четверг — суббота. Понедельник, среда и воскресенье — выходные.',
    hoursFooter: 'Вт, Чт–Сб 13:00–18:00 · пн, ср, вс — выходные',
    graphLine: 'График: Вт, Чт–Сб 13:00–18:00 (по предварительной записи). Пн, Ср и Вс — выходные.',
  },
  ro: {
    hoursRange: '13:00–18:00',
    daysSummary: 'Zile de recepție: marți, joi — sâmbătă. Luni, miercuri și duminică — închis.',
    hoursFooter: 'Mar, Joi–Sâm 13:00–18:00 · lun, mie, dum — închis',
    graphLine: 'Program: Mar, Joi–Sâm 13:00–18:00 (cu programare prealabilă). Luni, miercuri și duminică — închis.',
  },
} as const;

export type ReceptionIndicator = 'open' | 'closed' | 'off';

const RECEPTION_TIME_ZONE = 'Europe/Chisinau';
const WEEKDAY_INDEX: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

/** Day of week (0 = Sun) and hour (0–23) of `now` in the clinic's time zone, regardless of the device's zone. */
export function getClinicDayAndHour(now: Date): { dow: number; hour: number } {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: RECEPTION_TIME_ZONE,
      weekday: 'short',
      hour: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(now);
    const weekday = parts.find((p) => p.type === 'weekday')?.value ?? '';
    const hour = Number(parts.find((p) => p.type === 'hour')?.value);
    if (weekday in WEEKDAY_INDEX && Number.isFinite(hour)) {
      return { dow: WEEKDAY_INDEX[weekday], hour: hour % 24 };
    }
  } catch {
    // Intl with a time zone is unavailable: fall back to the device clock below.
  }
  return { dow: now.getDay(), hour: now.getHours() };
}

/**
 * State of the clinic's reception at `now`, always in Europe/Chisinau time:
 * - 'open'   — reception day, 13:00–18:00;
 * - 'closed' — reception day, outside those hours;
 * - 'off'    — Mon, Wed, Sun (no indicator is shown).
 * No date exceptions (holidays) are modelled.
 */
export function getReceptionIndicator(now: Date = new Date()): ReceptionIndicator {
  const { dow, hour } = getClinicDayAndHour(now);
  if (!isReceptionWeekday(dow)) return 'off';
  return isReceptionOpenAt(dow, hour) ? 'open' : 'closed';
}
