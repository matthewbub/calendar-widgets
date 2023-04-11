import {ONE, ZERO} from '../constants';
import {formatDate} from './formatDate';
import {isValidMonth} from './isValidMonth';
import {isValidYear} from './isValidYear';

/**
 * Generates an array of formatted date strings representing each day in a given month and year.
 *
 * @param {number} year - The year for which to generate the list of days (e.g. 2023).
 * @param {number} month - The month for which to generate the list of days (1-12).
 * @returns {Array} An array of formatted date strings representing each day in the specified month and year.
 */
export const listDaysInMonth = (year: number, month: number) => {
  if (!isValidMonth(month)) {
    throw new Error(`Invalid month: ${month}. The month must be an integer between 1 and 12.`);
  }

  if (!isValidYear(year)) {
    throw new Error(`Invalid year: ${year}. The year must be a valid year between 1900 and 2100.`);
  }

  const daysInMonth = new Date(year, month, ZERO).getDate();
  const dates = [];

  for (let day = ONE;day <= daysInMonth;day += ONE) {
    const formattedDate = formatDate(month, day, year);
    dates.push(formattedDate);
  }

  return dates;
};
