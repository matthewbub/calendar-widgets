/** Types */
import { NumberOrNullUndefined, StringOrNullUndefined, IntlMonthOptions } from '../commonTypes.js';

/** Utilities */
import { isValidYear } from '../utils/isValidYear.js';
import { getDefaultLocale } from '../utils/getDefaultLocale.js';
import { isLocaleValid } from '../utils/isLocaleValid.js';

/** Constants */
import { ONE } from '../constants.js';

/** Helpers */
import { listDaysInMonth } from './listDaysInMonth.js';
import { listLocalizedMonths } from './listLocalizedMonths.js';

/**
 * Generates an object representing a calendar year with the number of days and a list of days for each month.
 *
 * @param {number} [year] - The year for which to generate the calendar (e.g. 2023). Defaults to the current year if not specified.
 * @param {string|null} [locale] - The locale to use when formatting the month names and date strings. Defaults to the user's locale if not specified.
 * @param {string} [monthOptions="long"] - The option to control the length of the month name in the formatted strings. Possible values are "long", "short", or "narrow". Defaults to "long" if not specified.
 * @returns {Object} An object representing a calendar year with the number of days and a list of days for each month.
 * @throws {TypeError} If the provided year value is not of type number, or if the provided locale value is not a string or null.
 * @throws {Error} If the provided year value is invalid.
 */
export const listCalendarYear = (
  year: NumberOrNullUndefined = undefined,
  locale: StringOrNullUndefined = undefined,
  monthOptions: IntlMonthOptions = 'long'
) => {
  const yearToUse: number = isValidYear(year) ? year as number : new Date().getFullYear();
  const preferredLocale = isLocaleValid(locale) && getDefaultLocale(locale);
  const months = listLocalizedMonths(yearToUse, preferredLocale as string, monthOptions);

  return months.reduceRight((collector, current) => ({
    [current]: listDaysInMonth(
      yearToUse,
      months.indexOf(current) + ONE,
      preferredLocale as string
    ),
    ...collector
  }), {});
};
