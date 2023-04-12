/** Types */
import { NumberOrNullUndefined } from '../commonTypes';

/** Constants */
import { FOUR, NINETEEN_HUNDRED, TWO_THOUSAND_AND_ONE_HUNDRED } from '../constants';

/**
 * Determines whether a given year is a valid year between 1900 and 2100.
 *
 * @param {number|null|undefined} year - The year to validate (e.g. 2023).
 * @returns {boolean} True if the year is valid, false otherwise.
 */
export const isValidYear = (year: NumberOrNullUndefined) => {
  if (year === null || year === undefined) {
    return false;
  }

  if (!Number.isFinite(year)) {
    throw new TypeError('Invalid year. Year must be a finite number.');
  }

  const yearAsString: string = year.toString();

  if (yearAsString.length !== FOUR || year < NINETEEN_HUNDRED || year > TWO_THOUSAND_AND_ONE_HUNDRED) {
    throw new Error(`Invalid year: ${year}. The year must be a valid year between 1900 and 2100.`);
  }

  return true;
};