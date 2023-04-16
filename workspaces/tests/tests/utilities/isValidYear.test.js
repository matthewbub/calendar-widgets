/** Dependencies */
import {
  formatDate,
  listDaysInMonth,
  isValidYear,
  isValidDay
} from 'calendar-widgets';
import chai from 'chai';

/** Configurations */
const expect = chai.expect;

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
