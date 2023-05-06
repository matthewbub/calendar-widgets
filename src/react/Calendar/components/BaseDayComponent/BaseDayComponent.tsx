/** React */
import React from 'react';

/** Types */
import { BaseDayComponentProps } from './BaseDayComponent.types';

/** Constants */
import { classNames } from './BaseDayComponent.constants';

const BaseDayComponent = ({ date }: BaseDayComponentProps) => {
  return (
    <div className={classNames.baseDay}>
      {date.getTime()}
    </div>
  );
};

export default BaseDayComponent;
