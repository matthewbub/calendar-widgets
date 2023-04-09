/** Dependencies */
import {
  formatDate, 
  getCalendarYear, 
  getDaysInMonth, 
  listDaysInMonth, 
  isValidYear, 
  locale, 
  isValidDay, 
  isValidMonth
} from 'calendar-widgets';
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

  it('should throw an error for invalid input arguments', () => {
    const invalidTestCases = [
      { month: 0, day: 8, year: 2023 },
      { month: 13, day: 8, year: 2023 },
      { month: 4, day: 0, year: 2023 },
      { month: 4, day: 32, year: 2023 },
      { month: 4, day: 8, year: 1899 },
      { month: 4, day: 8, year: 2101 },
      { month: 4, day: 8, year: 2023, locale: 123 },
      { month: 4, day: 8, year: 2023, locale: '' },
    ];

    invalidTestCases.forEach(({ month, day, year, locale }) => {
      const expectedErrorMessage = (() => {
        if (!isValidMonth(month)) {
          return 'Invalid month. Month must be between 1 and 12.'
        }
        
        if (!isValidYear(year)) {
          return 'Invalid year. Year must be between 1900 and 2100.';
        }
        if (typeof locale !== 'undefined' && typeof locale !== 'string') {
          return 'Invalid locale. The locale must be a string.';
        }
        if (!isValidDay(day)) {
          return 'Invalid day. The day must be between 1 and 31.';
        }
      })();

      expect(() => formatDate(month, day, year, locale)).to.throw(expectedErrorMessage);
    });
  });

  it('should format a date with custom options (month: "long")', () => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = formatDate(4, 8, 2023, undefined, options);
    const expectedDate = new Date(2023, 3, 8); // Month index starts from 0
    
    const expectedResult = expectedDate.toLocaleDateString(undefined, options);
    expect(formattedDate).to.equal(expectedResult);
  });

  it('should format a date with custom options (month: "short")', () => {
    const options = { month: 'short', year: 'numeric', day: '2-digit' };
    const formattedDate = formatDate(4, 8, 2023, undefined, options);
    
    const expectedDate = new Date(2023, 3, 8);
    const expectedResult = expectedDate.toLocaleDateString(undefined, options);

    expect(formattedDate).to.equal(expectedResult);
  });

  it('should format a date with custom options (year: "2-digit")', () => {
    const options = { month: '2-digit', year: '2-digit', day: '2-digit' };
    const formattedDate = formatDate(4, 8, 2023, undefined, options);
    const expectedDate = new Date(2023, 3, 8);
    const expectedResult = expectedDate.toLocaleDateString(undefined, options);
    expect(formattedDate).to.equal(expectedResult);
  });

  it('should throw an error for invalid options', () => {
    expect(() => formatDate(4, 8, 2023, undefined, { month: 'invalid' })).to.throw(RangeError);
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
      const key = locale['en-US'].months[month - 1].toLowerCase();
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

  it('should throw an error for invalid year or month', () => {
    const invalidTestCases = [
      { year: 1899, month: 1 },
      { year: 2101, month: 1 },
      { year: 2021, month: 0 },
      { year: 2021, month: 13 },
      { year: '2021', month: 1 },
      { year: 2021, month: '1' },
      { year: NaN, month: 1 },
      { year: 2021, month: NaN },
      { year: null, month: 1 },
      { year: 2021, month: null },
      { year: undefined, month: 1 },
      { year: 2021, month: undefined },
    ];

    invalidTestCases.forEach(({ year, month }) => {
      expect(() => getDaysInMonth(year, month)).to.throw('Invalid year or month. Year must be between 1900 and 2100, and month must be between 1 and 12.');
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

describe('isValidDay', () => {
  it('should return true for valid day values', () => {
    const validDays = [1, 15, 31];

    validDays.forEach((day) => {
      expect(isValidDay(day)).to.be.true;
    });
  });

  it('should return false for invalid day values', () => {
    const invalidDays = [
      0,
      32,
      -1,
      0.5,
      '15',
      NaN,
      null,
      undefined,
      'a',
      [],
      {},
    ];

    invalidDays.forEach((day) => {
      expect(isValidDay(day)).to.be.false;
    });
  });
});

describe('isValidDay', () => {
  it('should return true for valid day values', () => {
    const validDays = [1, 15, 31];

    validDays.forEach((day) => {
      expect(isValidDay(day)).to.be.true;
    });
  });

  it('should return false for invalid day values', () => {
    const invalidDays = [
      0,
      32,
      -1,
      0.5,
      '15',
      NaN,
      null,
      undefined,
      'a',
      [],
      {},
    ];

    invalidDays.forEach((day) => {
      expect(isValidDay(day)).to.be.false;
    });
  });
});