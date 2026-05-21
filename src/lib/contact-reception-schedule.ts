/** Reception: Tue–Sat 13:00–18:00 local; Mon & Sun closed. */
export const RECEPTION_WORK_START = 13;
export const RECEPTION_WORK_END = 18;

/** `Date.getDay()`: 0 = Sun, 1 = Mon, … 6 = Sat */
export function isReceptionSunday(dow: number): boolean {
  return dow === 0;
}

export function isReceptionMonday(dow: number): boolean {
  return dow === 1;
}

export function isReceptionDayOff(dow: number): boolean {
  return isReceptionSunday(dow) || isReceptionMonday(dow);
}

/** Tuesday–Saturday */
export function isReceptionWeekday(dow: number): boolean {
  return dow >= 2 && dow <= 6;
}

export function isReceptionOpenAt(dow: number, hour: number): boolean {
  return isReceptionWeekday(dow) && hour >= RECEPTION_WORK_START && hour < RECEPTION_WORK_END;
}

export const RECEPTION_SCHEDULE_COPY = {
  ru: {
    hoursRange: '13:00–18:00',
    daysSummary: 'Дни приёма: вторник — суббота. Понедельник и воскресенье — выходные.',
    hoursFooter: 'Вт–сб 13:00–18:00 · пн, вс — выходные',
    graphLine: 'График: Вт–Сб 13:00–18:00 (по предварительной записи). Пн и Вс — выходные.',
  },
  ro: {
    hoursRange: '13:00–18:00',
    daysSummary: 'Zile de recepție: marți — sâmbătă. Luni și duminică — închis.',
    hoursFooter: 'Mar–sâm 13:00–18:00 · lun, dum — închis',
    graphLine: 'Program: Mar–Sâm 13:00–18:00 (cu programare prealabilă). Luni și duminică — închis.',
  },
} as const;
