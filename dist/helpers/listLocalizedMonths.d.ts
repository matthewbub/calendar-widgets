export type MonthFormat = 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';
/**
 * Returns an array of localized month names.
 *
 * @param {string} locale - The BCP 47 language tag of the locale to use.
 * @param {MonthFormat} monthFormat - The format of the month names to return.
 * @returns {string[]} An array of localized month names.
 */
export declare const listLocalizedMonths: (locale: string, monthFormat: MonthFormat) => Array<string>;
