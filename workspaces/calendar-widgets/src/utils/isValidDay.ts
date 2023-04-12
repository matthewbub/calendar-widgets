/** Types */
import { NumberOrNullUndefined } from '../commonTypes';

/** Constants */
import { ONE, THIRTY_ONE } from '../constants';

/**
 * Determines whether a given day is a valid day between 1 and 31.
 *
 * @param {number|null|undefined} day - The day to validate (1-31).
 * @returns {boolean} True if the day is valid, false otherwise.
 * @throws {TypeError} If the provided day value is not a number or is not a finite number.
 * @throws {Error} If the provided day value is not between 1 and 31.
 */
export const isValidDay = (day: NumberOrNullUndefined) => {
  if (day === null || day === undefined) {
    return false;
  }

  if (typeof day !== 'number' || isNaN(day) || !Number.isFinite(day)) {
    throw new TypeError('Invalid day. Day must be a finite number.');
  }

  if (day < ONE || day > THIRTY_ONE) {
    throw new Error(`Invalid day: ${day}. The day must be between 1 and 31.`);
  }

  return true;
};
