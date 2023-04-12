/** Dependencies */
import {formatDate, listDaysInMonth} from 'calendar-widgets';
import chai from 'chai';

/** Configurations */
const expect = chai.expect;

describe('listDaysInMonth', () => {
  before(() => {
    global.navigator = {
      language: 'en-US'
    };
  });

  after(() => {
    global.navigator = undefined;
  });

  it('should return an array of formatted date strings for each day in a given month and year', () => {
    const testCases = [
      { year: 2022, month: 1, days: 31 },
      { year: 2022, month: 2, days: 28 },
      { year: 2022, month: 3, days: 31 },
      { year: 2022, month: 4, days: 30 },
    ];

    testCases.forEach(({ year, month, days }) => {
      const expectedResult = Array.from({ length: days }, (_, index) => formatDate(month, index + 1, year, 'en-US', { weekday: 'long' }));
      const result = listDaysInMonth(year, month, 'en-US', { weekday: 'long' });
      expect(result).to.deep.equal(expectedResult);
    });
  });

  it('should throw an error for invalid months or years', () => {
    const invalidTestCases = [
      { year: 2022, month: 0 },
      { year: 2022, month: 13 },
      { year: 1899, month: 1 },
      { year: 2101, month: 1 },
      { year: 2022, month: null },
      { year: 2022, month: '12' },
      { year: '2022', month: 1 },
      { year: NaN, month: 1 },
      { year: 2022, month: NaN },
    ];

    invalidTestCases.forEach(({ year, month }) => {
      expect(() => listDaysInMonth(month, year)).to.throw(TypeError);
    });
  });

  it('should throw an error if the locale argument is not a string or null', () => {
    const invalidTestCases = [
      { year: 2022, month: 1, locale: {} },
      { year: 2022, month: 1, locale: 123 },
      { year: 2022, month: 1, locale: [] },
    ];

    invalidTestCases.forEach(({ year, month, locale }) => {
      expect(() => listDaysInMonth(year, month, locale)).to.throw(TypeError);
    });
  });
});
