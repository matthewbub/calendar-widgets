import { ONE, TWELVE } from '../constants';

/**
 * Determines whether a given month is a valid month between 1 and 12.
 *
 * @param {number} month - The month to validate (1-12).
 * @returns {boolean} True if the month is valid, false otherwise.
 */
export const isValidMonth = (month: number) => {
  if (typeof month === 'number' && !isNaN(month) && month >= ONE && month <= TWELVE) {
    return true;
  }
  return false;
};
