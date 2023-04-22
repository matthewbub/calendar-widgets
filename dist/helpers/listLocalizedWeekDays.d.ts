export type DayFormat = 'long' | 'short' | 'narrow';
/**
 * Returns an array of localized day names.
 *
 * @param {string} locale - The BCP 47 language tag of the locale to use.
 * @param {DayFormat} dayFormat - The format of the day names to return.
 * @returns {string[]} An array of localized day names.
 */
export declare const listLocalizedWeekDays: (locale: string, dayFormat: DayFormat) => Array<string>;
