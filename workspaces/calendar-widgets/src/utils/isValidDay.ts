import {ONE, THIRTY_ONE} from '../constants';

/**
 * Determines whether a given day is a valid day between 1 and 31.
 *
 * @param {number} day - The day to validate (1-31).
 * @returns {boolean} True if the day is valid, false otherwise.
 */
export const isValidDay = (day: number) => {
  if (typeof day === 'number' && !isNaN(day) && day >= ONE && day <= THIRTY_ONE) {
    return true;
  }
  return false;
};
