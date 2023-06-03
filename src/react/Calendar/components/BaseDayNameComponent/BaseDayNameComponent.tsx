/** React */
import React from 'react';
import { BaseDayNameComponentProps } from './BaseDayNameComponent.types';
import { baseStylesForComponentInterface } from '../../Calendar.constants';

const BaseDayNameComponent = ({
  label,
  className,
  tooltip = label,
  baseStyles = baseStylesForComponentInterface
}: BaseDayNameComponentProps) => {
  return (
    <div
      className={className}
      title={tooltip}
      style={baseStyles}
    >
      {label}
    </div>
  );
};

export default BaseDayNameComponent;
