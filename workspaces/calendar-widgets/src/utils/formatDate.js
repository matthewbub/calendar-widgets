/**
 * Formats a date in MM-DD-YYYY format.
 *
 * @param {number} month - The month of the date (1-12).
 * @param {number} day - The day of the date (1-31).
 * @param {number} year - The year of the date (e.g. 2023).
 * @returns {string} A formatted date string in the format MM-DD-YYYY.
 */
const formatDate = (month, day, year) => {
  const monthString = (month < 10 ? '0' : '') + month;
  const dayString = (day < 10 ? '0' : '') + day;
  const yearString = year;

  return `${monthString}-${dayString}-${yearString}`;
}

module.exports = { formatDate };