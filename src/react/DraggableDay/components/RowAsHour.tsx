/* Dependencies */
import React, { FC } from 'react';

/* Types */
import { RowProps } from '../DraggableDay.types';

/**
 * Renders a row as an hour component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.index - The row index.
 * @param {number} props.dynamicRows - The number of dynamic rows.
 * @param {string} props.time - The time value.
 * @returns {JSX.Element} - The rendered component.
 */
const RowAsHour: FC<RowProps> = ({ index, dynamicRows, time }) => (
  <div
    className="row"
    style={{
      height: `calc(100% / ${dynamicRows})`,
      top: `${index * 100 / dynamicRows}%`,
      borderBottom: index !== dynamicRows - 1 ? '1px solid #000' : 'none'
    }}
  >
    {time.length > 0 && <span>{time}</span>}
  </div>
);

export default RowAsHour;
