/**
 * Determines whether a given year is a valid year between 1900 and 2100.
 *
 * @param {number} year - The year to validate (e.g. 2023).
 * @returns {boolean} True if the year is valid, false otherwise.
 */
export const isValidYear = (year: number) => {
  if (!Number.isFinite(year)) {
    return false;
  }

  const yStr = year.toString();

  if (yStr.length !== 4 || year < 1900 || year > 2100) {
    return false;
  }
  return true;
};
