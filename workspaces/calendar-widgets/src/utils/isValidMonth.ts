/** Types */
import { NumberOrNullUndefined } from '../commonTypes';

/** Constants */
import { ONE, TWELVE } from '../constants';

/**
 * Determines whether a given month is a valid month between 1 and 12.
 *
 * @param {number|null|undefined} month - The month to validate (1-12).
 * @returns {boolean} True if the month is valid, otherwise throws a `TypeError`.
 * @throws {TypeError} If the provided month value is not a number, or is not between 1 and 12.
 */
export const isValidMonth = (month: NumberOrNullUndefined) => {
  if (typeof month === 'number' && !isNaN(month) && month >= ONE && month <= TWELVE) {
    return true;
  }
  throw new TypeError('Invalid month. Month must be between 1 and 12.');
};
