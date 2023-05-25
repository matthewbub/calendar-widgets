/* Dependencies */
import React, { FC, useState, useEffect, useRef } from 'react';

/* Helpers */
import { listHoursBetween, calculateHoursBetween } from '../../../helpers';

/* Types */
import { DraggablesProps, DraggableDays } from '../DraggableDay.types';

/* Components */
import { SingleDraggable, RowAsHour } from '../components';

/* Hooks */
import { useDraggable, useMouseMove } from '../hooks';

/**
 * Renders the layout for the draggable day component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.startRow - The starting row index.
 * @param {number} props.endRow - The ending row index.
 * @param {Array} props.initialDraggables - The initial draggable items.
 * @returns {JSX.Element} - The rendered component.
 */
const DraggableDayLayout: FC<DraggablesProps> = ({ startRow, endRow, initialDraggables }) => {
  const dynamicRows = calculateHoursBetween(startRow, endRow);
  const times = listHoursBetween(startRow, endRow);

  const [currentPos, setCurrentPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [draggableHeight, setDraggableHeight] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeRef = useRef<HTMLDivElement>(null);
  const { dragging, draggingBottom, handleMouseUp } = useDraggable(resizeRef);
  const [defaultHeight, setDefaultHeight] = useState<number>(1);

  const handleMouseMove = useMouseMove(
    dragging,
    draggingBottom,
    currentPos,
    draggableHeight,
    containerRef,
    setCurrentPos,
    setDraggableHeight,
    dynamicRows
  );
  // const { draggableDays, setDraggableDays } = useCalendarWidgetsContext();
  const [draggableDays, setDraggableDays] = useState<DraggableDays>([]);

  useEffect(() => {
    setDraggableDays(initialDraggables || [{ id: 1, position: { x: 0, y: 0 }, height: 1 }]);
  }, [initialDraggables]);

  const defaultDraggables = (() => {
    if (initialDraggables) {
      return Math.max(...initialDraggables.map((d) => d.id)) + 1;
    }
    return 1;
  })();

  const [nextId, setNextId] = useState<number>(defaultDraggables);

  const addDraggable = () => {
    setDraggableDays([...draggableDays,
      { id: nextId, position: { x: 0, y: 0 }, height: defaultHeight }]);
    setNextId(nextId + 1);
  };

  const deleteDraggable = (id: number) => {
    setDraggableDays(draggableDays.filter((draggableDay) => draggableDay.id !== id));
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove as unknown as EventListener);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as unknown as EventListener);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const rows = Array(dynamicRows).fill(undefined);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Default Height:
          <input
            type="number"
            min="1"
            max={dynamicRows}
            value={defaultHeight}
            onChange={(e) => setDefaultHeight(Math.max(1, Math.min(parseInt(e.target.value), dynamicRows)))}
          />
        </label>
      </form>

      <button onClick={addDraggable} className="add-draggable-btn">
        Add Draggable
      </button>

      <div className="draggable-container" ref={containerRef}>
        {rows.length > 0 && rows.map((_, i) =>
          <RowAsHour
            key={i}
            index={i}
            dynamicRows={dynamicRows}
            time={times[i]}
          />
        )}
        {draggableDays.map((draggableDay) =>
          <SingleDraggable
            key={draggableDay.id}
            draggable={draggableDay}
            dynamicRows={dynamicRows}
            containerRef={containerRef}
            onDelete={deleteDraggable}
            setDraggables={setDraggableDays}
            draggables={draggableDays}
          />
        )}
      </div>
    </div>
  );
};

export default DraggableDayLayout;
