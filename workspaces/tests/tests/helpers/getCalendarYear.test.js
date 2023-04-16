/** Dependencies */
import {
  getCalendarYear,
  listDaysInMonth,
  locale
} from 'calendar-widgets';
import chai from 'chai';

/** Configurations */
const expect = chai.expect;

describe('getCalendarYear', () => {
  it('should throw an Error for an invalid year', () => {
    const invalidYear = 1850;
    expect(() => getCalendarYear(invalidYear)).to.throw(Error, 'Invalid year, must be between 1900 and 2100.');
  });

  it('should return a calendar object for a valid year', () => {
    const validYear = 2022;
    const result = getCalendarYear(validYear);
    expect(result).to.be.an('object');

    for (let month = 1; month <= 12; month++) {
      const key = locale['en-US'].monthsFull[month - 1].toLowerCase();
      const collection = listDaysInMonth(validYear, month);

      expect(result[key]).to.be.an('array');
      expect(result[key]).to.have.lengthOf(collection.length);
    }
  });
});
