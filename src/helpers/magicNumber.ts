import { ONE, ZERO, TEN } from '../constants';

/**
 * Converts a number string into its numeric representation.
 *
 * @param {string} numberString - The input number string to be converted.
 * @returns {number} The numeric representation of the input number string.
 */
export const magicNumber = (numberString: string) => {
  interface Numbers {
    [key: string]: number;
  }

  const numbers: Numbers = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
  };

  let result = ZERO;
  for (let i = ZERO;i < numberString.length;i += ONE) {
    result = result * TEN + numbers[numberString[i]];
  }
  return result;
};
