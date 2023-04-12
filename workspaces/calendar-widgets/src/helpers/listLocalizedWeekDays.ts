/** Types */
import { StringOrNullUndefined, IntlWeekdayOptions } from "../commonTypes";

/** Utilities */
import { getDefaultLocale } from "../utils/getDefaultLocale";

/** Constants */
import { ONE, SEVEN, TWO, ZERO } from "../constants";

/**
 * Returns an array of localized day names.
 *
 * @param {string|null|undefined} locale - The locale to use.
 * @param {IntlWeekdayOptions} dayOptions - The options for formatting the day name. Defaults to 'long'.
 * @returns {string[]} An array of localized day names.
 */
export const listLocalizedWeekDays = (
  locale: StringOrNullUndefined = undefined,
  dayOptions: IntlWeekdayOptions = 'long'
) => {
  const localeToUse: string = getDefaultLocale(locale);
  const yearToUse: number = new Date().getFullYear();

  const days = [];
  const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(localeToUse, { weekday: dayOptions });

  for (let day: number = ZERO; day < SEVEN; day += ONE) {
    const date: Date = new Date(yearToUse, ZERO, day + TWO);
    const dayName: string = formatter.format(date);
    days.push(dayName);
  }

  return days;
}
