/**
 * Formats a date in a locale-specific format.
 *
 * @param {number} month - The month of the date (1-12).
 * @param {number} day - The day of the date (1-31).
 * @param {number} year - The year of the date (e.g. 2023).
 * @param {string} [locale] - The locale to use when formatting the date. Defaults to the user's locale.
 * @returns {string} A formatted date string in a locale-specific format.
 */
export const formatDate = (month, day, year, locale = undefined) => {
  const date = new Date(year, month - 1, day); // Month index starts from 0
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString(locale, options);
}
