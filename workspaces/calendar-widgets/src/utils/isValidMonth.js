/**
 * Determines whether a given month is a valid month between 1 and 12.
 *
 * @param {number} month - The month to validate (1-12).
 * @returns {boolean} True if the month is valid, false otherwise.
 */
export const isValidMonth = (month) => {
  if (typeof month === 'number' && !isNaN(month) && month >= 1 && month <= 12) {
    return true;
  }
  return false;
};