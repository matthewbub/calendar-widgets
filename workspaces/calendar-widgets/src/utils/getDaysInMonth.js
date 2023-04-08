/**
 * Calculates the number of days in a given month and year.
 *
 * @param {number} year - The year for which to calculate the number of days (e.g. 2023).
 * @param {number} month - The month for which to calculate the number of days (1-12).
 * @returns {number} The number of days in the specified month and year.
 */
const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
}

module.exports = { getDaysInMonth };