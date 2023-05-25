/* Dependencies */
import React, { FC } from 'react';

/* Types */
import { DraggablesProps } from './DraggableDay.types';

/* Components */
import { DraggableDayLayout } from './components';

/* Styles */
import './Draggables.styles.css';

/**
 * Renders a draggable day component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.startRow - The starting row index.
 * @param {number} props.endRow - The ending row index.
 * @param {Array} props.initialDraggables - The initial draggable items.
 * @returns {JSX.Element} - The rendered component.
 */
const DraggableDay: FC<DraggablesProps> = ({
  startRow,
  endRow,
  initialDraggables
}) => (
  <DraggableDayLayout
    startRow={startRow}
    endRow={endRow}
    initialDraggables={initialDraggables}
  />
);

export default DraggableDay;
