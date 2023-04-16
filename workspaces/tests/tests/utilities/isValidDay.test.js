/** Dependencies */
import {isValidDay} from 'calendar-widgets';

describe('isValidDay', () => {
  it('should return true for valid day values', () => {
    const validDays = [1, 15, 31];

    validDays.forEach((day) => {
      expect(isValidDay(day)).toBe(true);
    });
  });

  it('should return false for invalid day values', () => {
    const invalidDays = [0, 32, -1, 0.5, '15', NaN, null, undefined, 'a', [], {}];

    invalidDays.forEach((day) => {
      expect(isValidDay(day)).toBe(false);
    });
  });
});
