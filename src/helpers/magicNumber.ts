import { ONE, ZERO, TEN } from '../constants';

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
