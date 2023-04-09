import { getDaysInMonth } from './getDaysInMonth.js';
import { listDaysInMonth } from './listDaysInMonth.js';
import { isValidYear } from './isValidYear.js';
import { locale as localeConstants } from '../locale/index.js';

/**
 * Generates an object representing a calendar year with the number of days and a list of days for each month.
 *
 * @param {number} year - The year for which to generate the calendar (e.g. 2023).
 * @returns {object} An object representing a calendar year with the number of days and a list of days for each month.
 * @throws {object} An error object with a message if the year is not a valid year between 1900 and 2100.
 */
export const getCalendarYear = (year: number, locale = undefined) => {
  const preferredLocale = locale || 'en-US';

  if (!isValidYear(year)) {
    return {
      error: {
        body: 'The argument passed to `calendar(\'YYYY\')` must be a valid year between 1900 and 2100. You passed ' + year + '.',
      },
    };
  }

  return localeConstants[preferredLocale].months.reduceRight((collector, current) => ({
    [current.toLowerCase()]: {
      count: getDaysInMonth(year, localeConstants[preferredLocale].months.indexOf(current) + 1),
      collection: listDaysInMonth(year, localeConstants[preferredLocale].months.indexOf(current) + 1)
    },
    ...collector
  }), {});
};
