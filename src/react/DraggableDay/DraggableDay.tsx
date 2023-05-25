import React, { FC, useState, useEffect, useRef, MouseEvent, useCallback } from 'react';
import './Draggables.styles.css';
import { listHoursBetween, calculateHoursBetween } from '../../helpers';
import { SingleDraggableProps, DraggableContentProps, RowProps, DraggablesProps } from './DraggableDay.types';
import { CalendarWidgetsProvider, useCalendarWidgetsContext } from '../CalendarWidgetsContext/CalendarWidgetsContext';

const useDraggable = (resizeRef: React.RefObject<HTMLDivElement>) => {
  const [dragging, setDragging] = useState(false);
  const [draggingBottom, setDraggingBottom] = useState(false);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.target === resizeRef.current) {
      setDraggingBottom(true);
    } else {
      setDragging(true);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setDraggingBottom(false);
  };

  return {
    dragging,
    draggingBottom,
    handleMouseDown,
    handleMouseUp
  };
};

const useMouseMove = (
  dragging: boolean,
  draggingBottom: boolean,
  currentPos: { x: number; y: number },
  draggableHeight: number,
  containerRef: React.RefObject<HTMLDivElement>,
  setCurrentPos: React.Dispatch<{ x: number; y: number }>,
  setDraggableHeight: React.Dispatch<number>,
  dynamicRows: number
) => {
  return useCallback(
    (e: MouseEvent) => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      const rowHeight = containerRect ? containerRect.height / dynamicRows : null;

      if (containerRect && rowHeight) {
        if (dragging) {
          const quarterRow = rowHeight / 4;

          const posY = Math.max(0, Math.round((e.clientY - containerRect.top) / quarterRow) * quarterRow);

          const maxY = containerRect.height - draggableHeight * rowHeight;
          if (posY <= maxY) {
            setCurrentPos({ x: 0, y: posY });
          } else {
            setCurrentPos({ x: 0, y: maxY });
          }
        } else if (draggingBottom) {
          const posY = e.clientY - containerRect.top;
          const remainingHeight = containerRect.height - currentPos.y;

          // Calculate the nearest 1/4 value
          const quarterRow = rowHeight / 4;
          const newRowHeight = Math.round((posY - currentPos.y) / quarterRow) * quarterRow;

          if (newRowHeight >= quarterRow && newRowHeight <= remainingHeight) {
            setDraggableHeight(newRowHeight / rowHeight);
          }
        }
      }
    },
    [dragging, draggingBottom, currentPos, draggableHeight, dynamicRows, containerRef, setCurrentPos, setDraggableHeight]
  );
};

const DraggableContent: FC<DraggableContentProps> = ({
  currentPos,
  draggableHeight,
  handleMouseDown,
  resizeRef,
  dynamicRows,
  draggableRef,
  zIndex,
  onDelete
}) =>
  <div
    className="draggable"
    ref={draggableRef}
    onMouseDown={handleMouseDown}
    style={{
      transform: `translate3d(${currentPos.x}px, ${currentPos.y}px, 0)`,
      height: `calc(100% / ${dynamicRows} * ${draggableHeight} - 5px)`,
      zIndex: zIndex
    }}
  >
    Drag Me
    <button onClick={(e) => {
      e.stopPropagation(); onDelete();
    }} className="delete-draggable-btn">Delete</button>
    <div ref={resizeRef} className="resize-handle" onMouseDown={handleMouseDown} />
  </div>
  ;

const SingleDraggable: FC<SingleDraggableProps> = ({
  draggable,
  dynamicRows,
  containerRef,
  onDelete,
  setDraggables,
  draggables
}) => {
  const resizeRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);
  const { dragging, draggingBottom, handleMouseDown, handleMouseUp } = useDraggable(resizeRef);
  const handleMouseMove = useMouseMove(
    dragging,
    draggingBottom,
    draggable.position,
    draggable.height,
    containerRef,
    (newPos: { x: number; y: number; }) => {
      setDraggables(
        draggables.map((d) => {
          if (d.id === draggable.id) {
            return { ...d, position: newPos };
          }
          return d;
        })
      );
    },
    (newHeight: number) => {
      setDraggables(
        draggables.map((d) => (
          d.id === draggable.id ? { ...d, height: newHeight } : d
        ))
      );
    },
    dynamicRows
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove as unknown as EventListener);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as unknown as EventListener);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <DraggableContent
      currentPos={draggable.position}
      draggableHeight={draggable.height}
      handleMouseDown={handleMouseDown}
      resizeRef={resizeRef}
      dynamicRows={dynamicRows}
      draggableRef={draggableRef}
      zIndex={draggable.id}
      onDelete={() => onDelete(draggable.id)}
    />
  );
};

const Row: FC<RowProps> = ({ index, dynamicRows, time }) =>
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
  ;

const DraggableDayComponent: FC<DraggablesProps> = ({ startRow, endRow, initialDraggables }) => {
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
  const { draggableDays, setDraggableDays } = useCalendarWidgetsContext();

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
          <Row
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

const DraggableDay: FC<DraggablesProps> = ({
  startRow,
  endRow,
  initialDraggables
}) =>
  <CalendarWidgetsProvider>
    <DraggableDayComponent
      startRow={startRow}
      endRow={endRow}
      initialDraggables={initialDraggables}
    />
  </CalendarWidgetsProvider>;

export default DraggableDay;
