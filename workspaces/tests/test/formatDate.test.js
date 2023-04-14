/** Dependencies */
import {
  formatDate,
  isValidYear,
  isValidDay,
  isValidMonth
} from 'calendar-widgets';
import chai from 'chai';

/** Configurations */
const expect = chai.expect;

describe('formatDate', () => {
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
