import {isValidMonth} from './isValidMonth';
import {isValidYear} from './isValidYear';
import {isValidDay} from './isValidDay';
import {ONE} from '../constants';

/**
 * Formats a date in a locale-specific format.
 *
 * @param {number} month - The month of the date (1-12).
 * @param {number} day - The day of the date (1-31).
 * @param {number} year - The year of the date (e.g. 2023).
 * @param {string} [locale] - The locale to use when formatting the date. Defaults to the user's locale.
 * @param {Object} [options] - Additional options to pass to the `toLocaleDateString` method. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString for more information.
 * @returns {string} A formatted date string in a locale-specific format.
 */
export const formatDate = (month: number, day: number, year: number, locale?: string, options?: Intl.DateTimeFormatOptions) => {
  const validMonth = isValidMonth(month);
  const validYear = isValidYear(year);
  const validDay = isValidDay(day);

  if (validMonth === false) {
    throw new Error('Invalid month. Month must be between 1 and 12.');
  }
  if (validYear === false) {
    throw new Error('Invalid year. Year must be between 1900 and 2100.');
  }
  if (validDay === false) {
    throw new Error('Invalid day. The day must be between 1 and 31.');
  }
  if (typeof locale !== 'undefined' && typeof locale !== 'string') {
    throw new Error('Invalid locale. The locale must be a string.');
  }

  const date = new Date(year, month - ONE, day);
  const localeOptions = options || {year: 'numeric', month: '2-digit', day: '2-digit'};
  return date.toLocaleDateString(locale, localeOptions);
};
