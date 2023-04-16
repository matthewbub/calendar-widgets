/** Dependencies */
import {getDaysInMonth} from 'calendar-widgets';

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
      expect(getDaysInMonth(year, month)).toBe(days);
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
      expect(() => getDaysInMonth(year, month)).toThrow('Invalid year or month. Year must be between 1900 and 2100, and month must be between 1 and 12.');
    });
  });
});
