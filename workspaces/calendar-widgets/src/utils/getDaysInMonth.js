import { isValidYear } from "./isValidYear";
import { isValidMonth } from "./isValidMonth";

/**
 * Calculates the number of days in a given month and year.
 *
 * @param {number} year - The year for which to calculate the number of days (e.g. 2023).
 * @param {number} month - The month for which to calculate the number of days (1-12).
 * @returns {number} The number of days in the specified month and year.
 */
export const getDaysInMonth = (year, month) => {
  const validYear = isValidYear(year);
  const validMonth = isValidMonth(month);
  
  if (validYear === false || validMonth === false) {
    throw new Error('Invalid year or month. Year must be between 1900 and 2100, and month must be between 1 and 12.');
  }

  return new Date(year, month, 0).getDate();
};
