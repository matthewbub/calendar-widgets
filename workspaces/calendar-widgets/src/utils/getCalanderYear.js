const {getDaysInMonth} = require('./getDaysInMonth');
const {listDaysInMonth} = require('./listDaysInMonth');
const {isValidYear} = require('./isValidYear');

/**
 * Generates an object representing a calendar year with the number of days and a list of days for each month.
 *
 * @param {number} year - The year for which to generate the calendar (e.g. 2023).
 * @returns {object} An object representing a calendar year with the number of days and a list of days for each month.
 * @throws {object} An error object with a message if the year is not a valid year between 1900 and 2100.
 */
const getCalendarYear = (year) => {  
  if (isValidYear(year)) {
    return {
      error: {
        body: 'The argument passed to `calendar(\'YYYY\')` must be a valid year between 1900 and 2100. You passed ' + year + '.',
      },
    };
  }

  return months.reduceRight((collector, current) => ({
    [current.toLowerCase()]: {
      count: getDaysInMonth(year, months.indexOf(current) + 1),
      collection: listDaysInMonth(year, months.indexOf(current) + 1)
    },
    ...collector
  }), {});
};

module.exports = {getCalendarYear};