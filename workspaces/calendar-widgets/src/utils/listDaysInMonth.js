import { formatDate } from './formatDate';

/**
 * Generates an array of formatted date strings representing each day in a given month and year.
 *
 * @param {number} month - The month for which to generate the list of days (1-12).
 * @param {number} year - The year for which to generate the list of days (e.g. 2023).
 * @returns {Array} An array of formatted date strings representing each day in the specified month and year.
 */
export const listDaysInMonth = (month, year) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  let dates = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const formattedDate = formatDate(month, day, year);
    dates.push(formattedDate);
  }

  return dates;
};
