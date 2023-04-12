/** Types */
import { NumberOrNullUndefined, StringOrNullUndefined } from '../commonTypes';

/** Utilities */
import { formatDate } from '../utils/formatDate';
import { isValidMonth } from '../utils/isValidMonth';
import { isValidYear } from '../utils/isValidYear';
import { getDefaultLocale } from '../utils/getDefaultLocale';
import { isValidLocale } from '../utils/isValidLocale';

/** Constants */
import { ONE, ZERO } from '../constants';

/**
 * Generates an array of formatted date strings representing each day in a given month and year.
 *
 * @param {number|null|undefined} [year] - The year for which to generate the list of days (e.g. 2023).
 * @param {number|null|undefined} [month] - The month for which to generate the list of days (1-12).
 * @param {string|null|undefined} [locale] - The locale to use when formatting the date strings. Defaults to the user's locale.
 * @param {Intl.DateTimeFormatOptions} [options] - Additional options to pass to the `toLocaleDateString` method. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString for more information.
 * @returns {Array} An array of formatted date strings representing each day in the specified month and year.
 * @throws {TypeError} If the provided year or month values are not of type number, or if the provided locale value is not a string or null.
 * @throws {Error} If the provided month or year values are invalid.
 */
export const listDaysInMonth = (
  year: NumberOrNullUndefined = undefined,
  month: NumberOrNullUndefined = undefined,
  locale: StringOrNullUndefined = undefined,
  options: Intl.DateTimeFormatOptions = {}
) => {
  const yearToUse: number = isValidYear(year) ? year as number : new Date().getFullYear();
  const monthToUse: number = isValidMonth(month) ? month as number : new Date().getMonth() + ONE;
  const preferredLocale = isValidLocale(locale) && getDefaultLocale(locale);

  const daysInMonth: number = new Date(yearToUse, monthToUse, ZERO).getDate();
  const dates = [];

  for (let day: number = ONE; day <= daysInMonth; day += ONE) {
    const formattedDate = formatDate(monthToUse, day, yearToUse, preferredLocale as string, options);
    dates.push(formattedDate);
  }

  return dates;
};