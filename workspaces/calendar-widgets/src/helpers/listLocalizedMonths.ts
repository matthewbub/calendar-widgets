/** Types */
import { NumberOrNullUndefined, IntlMonthOptions, StringOrNullUndefined } from "../commonTypes";

/** Utilities */
import { getDefaultLocale } from "../utils/getDefaultLocale";
import { isValidYear } from "../utils/isValidYear";

/** Constants */
import { ONE, TWELVE, ZERO } from "../constants";

/**
 * Generates a list of localized month names.
 *
 * @param {number|null|undefined} year - The year for which to generate the list of months.
 * @param {string|undefined} locale - The locale to use for the localized month names.
 * @param {string} monthOptions - Options for formatting the month names.
 * @returns {Array<string>} An array of localized month names.
 */
export const listLocalizedMonths = (
  year: NumberOrNullUndefined = undefined,
  locale: StringOrNullUndefined = undefined,
  monthOptions: IntlMonthOptions = 'long'
) => {
  const localeToUse: string = getDefaultLocale(locale);
  const yearToUse: number = isValidYear(year) ? year as number : new Date().getFullYear();

  const months = [];
  const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(localeToUse, { month: monthOptions });
  for (let month: number = ZERO; month < TWELVE; month += ONE) {
    const date: Date = new Date(yearToUse, month, ONE);
    const monthName: string = formatter.format(date);
    months.push(monthName);
  }

  return months;
};
