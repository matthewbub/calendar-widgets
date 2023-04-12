/** Dependencies */
import {
  listCalendarYear,
  getDaysInMonth,
  listDaysInMonth,
  listLocalizedMonths,
} from 'calendar-widgets';
import chai from 'chai';

/** Configurations */
const expect = chai.expect;

describe('listCalendarYear', () => {
  before(() => {
    global.navigator = {
      language: 'en-US'
    };
  });

  after(() => {
    global.navigator = undefined;
  });

  it('should return an error object if the year is not valid', () => {
    const invalidYear = 1850;
    const result = listCalendarYear(invalidYear);
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
    const result = listCalendarYear(validYear);
    expect(result).to.be.an('object');
    const months = listLocalizedMonths();

    for (let month = 1; month <= 12; month++) {
      const key = months[month - 1].toLowerCase();
      const count = getDaysInMonth(validYear, month);
      const collection = listDaysInMonth(validYear, month);

      expect(result).to.have.property(key);
      expect(result[key]).to.have.property('count', count);
      expect(result[key]).to.have.property('collection');
      expect(result[key].collection).to.deep.equal(collection);
    }
  });
});
