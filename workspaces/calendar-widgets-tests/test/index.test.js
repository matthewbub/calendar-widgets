/** Dependencies */
import {formatDate, getCalendarYear, getDaysInMonth, listDaysInMonth, isValidYear, locale} from 'calendar-widgets';
import chai from 'chai';

/** Configurations */
const expect = chai.expect;

describe('formatDate', () => {
  it('should format a date in the default locale', () => {
    const formattedDate = formatDate(4, 8, 2023);
    expect(formattedDate).to.equal('04/08/2023');
  });

  it('should format a date in a custom locale (fr-FR)', () => {
    const formattedDate = formatDate(4, 8, 2023, 'fr-FR');
    expect(formattedDate).to.equal('08/04/2023');
  });

  it('should format a date in a custom locale (de-DE)', () => {
    const formattedDate = formatDate(4, 8, 2023, 'de-DE');
    expect(formattedDate).to.equal('08.04.2023');
  });

  it('should format a date in a custom locale (ja-JP)', () => {
    const formattedDate = formatDate(4, 8, 2023, 'ja-JP');
    expect(formattedDate).to.equal('2023/04/08');
  });
});

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
      const key = locale.en.months[month - 1].toLowerCase();
      const count = getDaysInMonth(validYear, month);
      const collection = listDaysInMonth(validYear, month);

      expect(result).to.have.property(key);
      expect(result[key]).to.have.property('count', count);
      expect(result[key]).to.have.property('collection');
      expect(result[key].collection).to.deep.equal(collection);
    }
  });
});

describe('getDaysInMonth', () => {
  it('should return the correct number of days for each month', () => {
    const testCases = [
      { year: 2021, month: 1, days: 31 },
      { year: 2021, month: 2, days: 28 },
      { year: 2021, month: 3, days: 31 },
      { year: 2021, month: 4, days: 30 },
      { year: 2021, month: 5, days: 31 },
      { year: 2021, month: 6, days: 30 },
      { year: 2021, month: 7, days: 31 },
      { year: 2021, month: 8, days: 31 },
      { year: 2021, month: 9, days: 30 },
      { year: 2021, month: 10, days: 31 },
      { year: 2021, month: 11, days: 30 },
      { year: 2021, month: 12, days: 31 },
      { year: 2020, month: 2, days: 29 }, // Leap year
    ];

    testCases.forEach(({ year, month, days }) => {
      expect(getDaysInMonth(year, month)).to.equal(days);
    });
  });
});

describe('isValidYear', () => {
  it('should return true for valid years between 1900 and 2100', () => {
    const validYears = [1900, 2000, 2022, 2100];

    validYears.forEach((year) => {
      expect(isValidYear(year)).to.be.true;
    });
  });

  it('should return false for invalid years', () => {
    const invalidYears = [1899, 0, 2101, '2022', NaN, null, undefined];

    invalidYears.forEach((year) => {
      expect(isValidYear(year)).to.be.false;
    });
  });
});

describe('listDaysInMonth', () => {
  it('should return an array of formatted date strings for each day in a given month and year', () => {
    const testCases = [
      { year: 2022, month: 1, days: 31 },
      { year: 2022, month: 2, days: 28 },
      { year: 2022, month: 3, days: 31 },
      { year: 2022, month: 4, days: 30 },
      // ...add more test cases for other months
    ];

    testCases.forEach(({ year, month, days }) => {
      const expectedResult = Array.from({ length: days }, (_, index) => formatDate(month, index + 1, year));
      const result = listDaysInMonth(year, month);
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
      expect(() => listDaysInMonth(month, year)).to.throw(Error);
    });
  });
});