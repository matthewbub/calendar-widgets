/** React */
import React from 'react';

/** Types */
import { BaseDayComponentProps } from './BaseDayComponent.types';
import { CustomDate } from '../../Calendar.types';

/** Constants */
import { classNames } from './BaseDayComponent.constants';
import { baseStylesForComponentInterface } from '../../Calendar.constants';

/* Helpers */
import { cl } from '../../../../helpers';

const BaseDayComponent: React.FC<BaseDayComponentProps> = ({
  date,
  inSelectedMonth,
  customDates,
  baseStyles = baseStylesForComponentInterface
}) => {
  return (
    <div
      className={cl(
        classNames.baseDay,
        !inSelectedMonth && classNames.outsideCurrentMonth
      )}
      style={baseStyles}
    >
      {date.getDate()}
      {customDates && customDates.map((customDate: CustomDate, idx: number) => (
        <span
          key={idx}
          title={customDate?.tooltip || customDate.name}
        >
          {customDate.name}
        </span>
      ))}
    </div>
  );
};

export default BaseDayComponent;
