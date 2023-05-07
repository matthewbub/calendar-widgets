import { magicNumber as mN } from './magicNumber';
/**
 * Creates a new Date object with the specified year, month, and day.
 *
 * @param {number} year - The year of the date.
 * @param {number} month - The month of the date (1-indexed).
 * @param {number} day - The day of the date.
 * @returns {Date} A new Date object with the specified values.
 */
export const newDate = (year: number, month: number, day: number) => {
  return new Date(year, month - mN('1'), day);
};
