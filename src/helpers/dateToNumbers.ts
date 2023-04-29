import { magicNumber } from './magicNumber';

/**
 * Convert a date object or object with year, month, and day properties to an object with numeric year, month, and day properties.
 * @param {Date | { year: number; month: number; day: number }} d - The date object or object with year, month, and day properties to convert.
 * @returns {{ year: number; month: number; day: number }} - An object with numeric year, month, and day properties.
 */
export const dateToNumbers = (d: Date | { year: number; month: number; day: number }) => {
  let year: number, month: number, day: number;
  if (d instanceof Date) {
    year = d.getFullYear();
    month = d.getMonth() + magicNumber('1');
    day = d.getDate();
  } else {
    year = d.year;
    month = d.month;
    day = d.day;
  }
  return { year, month, day };
};
