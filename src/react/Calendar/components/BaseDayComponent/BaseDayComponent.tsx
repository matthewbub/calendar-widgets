/** React */
import React from 'react';

/** Types */
import { BaseDayComponentProps } from './BaseDayComponent.types';

/** Constants */
import { classNames } from './BaseDayComponent.constants';

import { cl } from '../../../../helpers';

const BaseDayComponent: React.FC<BaseDayComponentProps> = ({ date, inSelectedMonth, customDate }) => {
  return (
    <div
      className={cl(
        classNames.baseDay,
        !inSelectedMonth && classNames.outsideCurrentMonth,
        customDate?.className
      )}
      title={customDate?.tooltip}
    >
      {date.getDate()}
    </div>
  );
};

export default BaseDayComponent;
