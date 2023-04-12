/** Types */
import { NumberOrNullUndefined, StringOrNullUndefined } from '../commonTypes';

/** Utilities */
import { isValidMonth } from './isValidMonth';
import { isValidYear } from './isValidYear';
import { isValidDay } from './isValidDay';
import { getDefaultLocale } from './getDefaultLocale';
import { isValidLocale } from './isValidLocale';

/** Constants */
import { ONE } from '../constants';

/**
 * Formats a date in a locale-specific format.
 *
 * @param {number} month - The month of the date (1-12).
 * @param {number} day - The day of the date (1-31).
 * @param {number} year - The year of the date (e.g. 2023).
 * @param {string|null} [locale] - The locale to use when formatting the date. Defaults to the user's default locale if not provided or null.
 * @param {Object} [options] - Additional options to pass to the `toLocaleDateString` method. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString for more information.
 * @returns {string} A formatted date string in a locale-specific format.
 * @throws {TypeError} If `month` is not a number between 1 and 12, `day` is not a number between 1 and 31, `year` is not a number between 1900 and 2100, or `locale` is provided and not a string or `null`.
 */
export const formatDate = (
  month: NumberOrNullUndefined = undefined,
  day: NumberOrNullUndefined = undefined,
  year: NumberOrNullUndefined = undefined,
  locale: StringOrNullUndefined = undefined,
  options: Intl.DateTimeFormatOptions | undefined = undefined
): string => {
  const monthToUse = isValidMonth(month) && month as number - ONE;
  const yearToUse = isValidYear(year) && year as number;
  const dayToUse = isValidDay(day) && day as number;
  const localeToUse = isValidLocale(locale) && getDefaultLocale(locale);
  const localeOptionsToUse = options || {};

  const date: Date = new Date(
    yearToUse as number,
    monthToUse as number,
    dayToUse as number
  );

  return date.toLocaleDateString(localeToUse as string, localeOptionsToUse);
};
