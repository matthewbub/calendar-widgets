/** Dependencies */
import {isValidDay} from 'calendar-widgets';
import chai from 'chai';

/** Configurations */
const expect = chai.expect;

describe('isValidDay', () => {
  it('should return true for valid day values', () => {
    const validDays = [1, 15, 31];

    validDays.forEach((day) => {
      expect(isValidDay(day)).to.be.true;
    });
  });

  it('should return false for invalid day values', () => {
    const invalidDays = [0, 32, -1, 0.5, '15', NaN, null, undefined, 'a', [], {}];

    invalidDays.forEach((day) => {
      expect(isValidDay(day)).to.be.false;
    });
  });
});
