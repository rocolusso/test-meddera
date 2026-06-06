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
