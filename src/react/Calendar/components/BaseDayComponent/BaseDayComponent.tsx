/** React */
import React from 'react';

/** Types */
import { BaseDayComponentProps } from './BaseDayComponent.types';

/** Constants */
import { classNames } from './BaseDayComponent.constants';

import { cl } from '../../../../helpers';

const BaseDayComponent: React.FC<BaseDayComponentProps> = ({ date, inSelectedMonth }) => {
  return (
    <div className={cl(
      classNames.baseDay,
      !inSelectedMonth && classNames.outsideCurrentMonth
    )}>
      {date.getDate()}
    </div>
  );
};

export default BaseDayComponent;