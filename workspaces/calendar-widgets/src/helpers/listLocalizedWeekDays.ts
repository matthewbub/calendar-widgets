import { ONE, SEVEN, TWO_THOUSAND } from '../constants';

export type DayFormat = 'long' | 'short' | 'narrow';

/**
 * Returns an array of localized day names.
 *
 * @param {string} locale - The BCP 47 language tag of the locale to use.
 * @param {DayFormat} dayFormat - The format of the day names to return.
 * @returns {string[]} An array of localized day names.
 */
export const listLocalizedWeekDays = (locale: string, dayFormat: DayFormat): Array<string> =>
  Array.from({ length: SEVEN }, (_, i) =>
    new Date(Date.UTC(TWO_THOUSAND, 0, i + 1)).toLocaleString(locale, { weekday: dayFormat })
  );
