import {FOUR, NINETEEN_HUNDRED, TWO_THOUSAND_AND_ONE_HUNDRED} from '../constants';

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

  if (yStr.length !== FOUR || year < NINETEEN_HUNDRED || year > TWO_THOUSAND_AND_ONE_HUNDRED) {
    return false;
  }
  return true;
};
