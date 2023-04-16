/** Dependencies */
import {
  listCalendarYear,
  listDaysInMonth,
  locale
} from 'calendar-widgets';

describe('listCalendarYear', () => {
  it('should throw an Error for an invalid year', () => {
    const invalidYear = 1850;
    expect(() => listCalendarYear(invalidYear)).toThrow(Error, 'Invalid year, must be between 1900 and 2100.');
  });

  it('should return a calendar object for a valid year', () => {
    const validYear = 2022;
    const result = listCalendarYear(validYear);
    expect(result).toBeInstanceOf(Object);

    for (let month = 1; month <= 12; month++) {
      const key = locale['en-US'].monthsFull[month - 1].toLowerCase();
      const collection = listDaysInMonth(validYear, month);

      expect(result[key]).toBeInstanceOf(Array);
      expect(result[key].length).toBe(collection.length);
    }
  });
});
