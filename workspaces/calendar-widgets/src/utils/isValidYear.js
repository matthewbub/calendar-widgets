/**
 * Determines whether a given year is a valid year between 1900 and 2100.
 *
 * @param {number} year - The year to validate (e.g. 2023).
 * @returns {boolean} True if the year is valid, false otherwise.
 */
const isValidYear = (year) => {
  const date = new Date(year, 1, 1);
  const y = date.getFullYear();
  if (isNaN(y) || y.length !== 4) {
    return false;
  }
  return true;
}
module.exports = { isValidYear }