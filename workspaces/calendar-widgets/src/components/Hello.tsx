import React, { FC } from 'react';
import { listLocalizedMonths } from '../helpers/listLocalizedMonths';

export const Hello: FC = () => {
  return <div>{listLocalizedMonths('en-US', 'long')}</div>;
};
