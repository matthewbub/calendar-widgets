/** Dependencies */
import {
  getCalendarYear,
  getDaysInMonth,
  listDaysInMonth,
  locale
} from 'calendar-widgets';
import chai from 'chai';

/** Configurations */
const expect = chai.expect;

describe('getCalendarYear', () => {
  it('should return an error object if the year is not valid', () => {
    const invalidYear = 1850;
    const result = getCalendarYear(invalidYear);
    expect(result).to.have.property('error');
    expect(result.error).to.have.property('body');
    expect(result.error.body).to.equal(
      'The argument passed to `calendar(\'YYYY\')` must be a valid year between 1900 and 2100. You passed ' +
        invalidYear +
        '.'
    );
  });

  it('should return a calendar object for a valid year', () => {
    const validYear = 2022;
    const result = getCalendarYear(validYear);
    expect(result).to.be.an('object');

    for (let month = 1; month <= 12; month++) {
      const key = locale['en-US'].monthsFull[month - 1].toLowerCase();
      const count = getDaysInMonth(validYear, month);
      const collection = listDaysInMonth(validYear, month);

      expect(result).to.have.property(key);
      expect(result[key]).to.have.property('count', count);
      expect(result[key]).to.have.property('collection');
      expect(result[key].collection).to.deep.equal(collection);
    }
  });
});
