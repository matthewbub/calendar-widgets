import React, { FC } from 'react';
import { DraggableRowProps } from './DraggableRow.types';
import { ONE, ONE_HUNDRED } from '../../../constants';

const DraggableRow: FC<DraggableRowProps> = ({ index, dynamicRows }) => (
  <div
    className="Ent--DraggableRow"
    style={{
      height: `calc(100% / ${dynamicRows})`,
      top: `${index * ONE_HUNDRED / dynamicRows}%`,
      borderBottom: index !== dynamicRows - ONE ? '1px solid #000' : 'none',
      position: 'absolute',
      width: '100%',
      border: '1px solid #000',
    }}
  >
    {/* row */}
  </div>
);

export default DraggableRow;