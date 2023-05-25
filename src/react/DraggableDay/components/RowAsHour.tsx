/* Dependencies */
import React, { FC } from 'react';

/* Types */
import { RowProps } from '../DraggableDay.types';

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
