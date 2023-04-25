import { magicNumber } from './magicNumber';

export function convertTimeToHours(timeStr: string) {
  // regex pattern to match hours and minutes
  const pattern = /^(\d+)(h|m)$/;

  // try to match the input string
  const match = pattern.exec(timeStr);

  if (match) {
    // extract the numeric value from the match
    const value = parseInt(match[magicNumber('1')]);

    // extract the unit (h or m) from the match
    // eslint-disable-next-line prefer-destructuring
    const unit = match[magicNumber('2')];

    let result;
    if (unit === 'h') {
      // if it's hours, return the value as is
      result = value;
    } else {
      // if it's minutes, convert to hours (by dividing by 60)
      result = value / magicNumber('60');
    }

    // round the result to the nearest quarter
    result = Math.round(result * magicNumber('4')) / magicNumber('4');

    return result;
  }
  // if no match, throw an error
  // eslint-disable-next-line no-useless-escape
  throw new TypeError(`Invalid time string: ${timeStr}, Time string should match pattern /^(\d+)(h|m)$/`);

}
