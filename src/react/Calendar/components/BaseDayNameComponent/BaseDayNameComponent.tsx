/** React */
import React from 'react';
import { BaseDayNameComponentProps } from './BaseDayNameComponent.types';

const BaseDayNameComponent = ({
  label,
  className,
  tooltip = label
}: BaseDayNameComponentProps) => {
  return (
    <div className={className} title={tooltip}>
      {label}
    </div>
  );
};

export default BaseDayNameComponent;
