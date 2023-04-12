/** Types */
import { NumberOrNullUndefined } from '../commonTypes';

/** Utilities */
import { isValidYear } from './isValidYear';
import { isValidMonth } from './isValidMonth';

/** Constants */
import { ZERO } from '../constants';

/**
 * Calculates the number of days in a given month and year.
 *
 * @param {number} year - The year for which to calculate the number of days (e.g. 2023).
 * @param {number} month - The month for which to calculate the number of days (1-12).
 * @returns {number} The number of days in the specified month and year.
 */
export const getDaysInMonth = (
  year: NumberOrNullUndefined = undefined,
  month: NumberOrNullUndefined = undefined
) => {
  const yearToUse: number = isValidYear(year) ? year as number : new Date().getFullYear();
  const monthToUse: number = isValidMonth(month) ? month as number : new Date().getMonth() + 1;

  return new Date(yearToUse, monthToUse, ZERO).getDate();
};
