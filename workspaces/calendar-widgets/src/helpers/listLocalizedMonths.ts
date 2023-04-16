import { ONE, TWELVE, TWO_THOUSAND } from '../constants';

export type MonthFormat = 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';

/**
 * Returns an array of localized month names.
 *
 * @param {string} locale - The BCP 47 language tag of the locale to use.
 * @param {MonthFormat} monthFormat - The format of the month names to return.
 * @returns {string[]} An array of localized month names.
 */
export const listLocalizedMonths = (locale: string, monthFormat: MonthFormat): Array<string> =>
  Array.from({ length: 12 }, (_, i) =>
    new Date(Date.UTC(TWO_THOUSAND, i, ONE)).toLocaleString(locale, { month: monthFormat })
  );
