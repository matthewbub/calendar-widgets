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
export declare const formatDate: (month: number, day: number, year: number, locale?: string, options?: Intl.DateTimeFormatOptions) => string;
