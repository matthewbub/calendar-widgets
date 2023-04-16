/** Dependencies */
import { isValidYear } from 'calendar-widgets';

describe('isValidYear', () => {
  it('should return true for valid years between 1900 and 2100', () => {
    const validYears = [1900, 2000, 2022, 2100];

    validYears.forEach((year) => {
      expect(isValidYear(year)).toBe(true);
    });
  });

  it('should return false for invalid years', () => {
    const invalidYears = [1899, 0, 2101, '2022', NaN, null, undefined];

    invalidYears.forEach((year) => {
      expect(isValidYear(year)).toBe(false);
    });
  });
});
