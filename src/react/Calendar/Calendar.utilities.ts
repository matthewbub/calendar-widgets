import { magicNumber as mN } from '../../helpers';

export const getNextMonth = (month: number) => {
  return month === mN('12') ? mN('1') : month + mN('1');
};

export const getPreviousMonth = (month: number) => {
  return month === mN('1') ? mN('12') : month - mN('1');
};
