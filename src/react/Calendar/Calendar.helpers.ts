import { dateToNumbers, magicNumber as mN } from '../../helpers';

/**
 * Returns the next month given a current month.
 * @param month The current month as a number.
 * @returns The next month as a number.
 */
export const getNextMonth = (month: number) => {
  return month === mN('12') ? mN('1') : month + mN('1');
};

/**
 * Returns the previous month given a current month.
 * @param month The current month as a number.
 * @returns The previous month as a number.
 */
export const getPreviousMonth = (month: number) => {
  return month === mN('1') ? mN('12') : month - mN('1');
};

/**
 * Creates an array of weeks for the calendar.
 * @param days - Array of days for the calendar.
 * @returns Array of weeks for the calendar.
 * @example
 * const days = [null, null, null, null, null, null, null, <Day />, <Day />, <Day />
 * const weeks = createCalendarWeeks(days);
*/
export const createCalendarWeeks = (days: (JSX.Element | null)[]) => {
  const weeks: (JSX.Element | null)[][] = [];

  for (let i = mN('0');i < days.length;i += mN('7')) {
    weeks.push(days.slice(i, i + mN('7')));
  }

  return weeks;
};

/**
 * Determines whether two dates represent the same day, regardless of the time of day.
 *
 * @param {Date} a - The first date to compare.
 * @param {Date} b - The second date to compare.
 * @returns {boolean} Returns true if the two dates represent the same day, false otherwise.
 * @example
 *  const customDate = customDates.find(cd => isSameDay(cd.date, currentDate));
 */
export const isSameDay = (a: Date, b: Date): boolean => {
  const aN = dateToNumbers(a);
  const bN = dateToNumbers(b);

  const isSameYear = aN.year === bN.year;
  const isSameMonth = aN.month === bN.month;
  const isSameDate = aN.day === bN.day;

  if (isSameYear && isSameMonth && isSameDate) {
    return true;
  }

  return false;
};
