import { listDaysInMonth } from './listDaysInMonth.js';
import { isValidYear } from '../utils/isValidYear.js';
import { locale as localeConstants } from '../locale/index.js';
import { ONE } from '../constants.js';

/**
 * Generates an object representing a calendar year with a list of days for each month.
 *
 * @param {number} year - The year for which to generate the calendar (e.g. 2023).
 * @returns {object} An object representing a calendar year with a list of days for each month.
 */
export const listCalendarYear = (year: number, locale = 'en-US'): { [key: string]: string[] } => {
  if (!isValidYear(year)) {
    throw new Error('Invalid year, must be between 1900 and 2100.');
  }

  return localeConstants[locale].monthsFull.reduceRight((collector, current) => ({
    [current.toLowerCase()]: listDaysInMonth(year, localeConstants[locale].monthsFull.indexOf(current) + ONE),
    ...collector
  }), {});
};
