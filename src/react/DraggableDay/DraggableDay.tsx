/* Dependencies */
import React, { FC } from 'react';

/* Types */
import { DraggablesProps } from './DraggableDay.types';

/* Context */
import { CalendarWidgetsProvider } from '../CalendarWidgetsContext/CalendarWidgetsContext';

/* Components */
import { DraggableDayLayout } from './components';

/* Styles */
import './Draggables.styles.css';

const DraggableDay: FC<DraggablesProps> = ({
  startRow,
  endRow,
  initialDraggables
}) => (
  <CalendarWidgetsProvider>
    <DraggableDayLayout
      startRow={startRow}
      endRow={endRow}
      initialDraggables={initialDraggables}
    />
  </CalendarWidgetsProvider>
);

export default DraggableDay;
