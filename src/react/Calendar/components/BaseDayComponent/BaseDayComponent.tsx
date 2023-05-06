/** React */
import React from 'react';

/** Types */
import { BaseDayComponentProps } from './BaseDayComponent.types';

/** Constants */
import { BASE_CLASSNAME } from '../../../../constants';

const baseClassName = BASE_CLASSNAME + 'Calendar__BaseDayComponent__';

const BaseDayComponent = ({ date }: BaseDayComponentProps) => {
  return (
    <div className={baseClassName + 'base-day'}>
      {date.getTime()}
    </div>
  );
};

export default BaseDayComponent;
