import React, { FC, useState, useEffect, useRef, MouseEvent, useCallback } from 'react';
import './Draggable.styles.css';
import { ONE, ZERO } from '../../constants';
import { DraggableRow } from '../Common';

const useDraggable = (resizeRef: React.RefObject<HTMLDivElement>) => {
  const [dragging, setDragging] = useState(false);
  const [draggingBottom, setDraggingBottom] = useState(false);

  /**
   * Handles the mouse down event on the draggable component.
   *
   * @param {MouseEvent<HTMLDivElement>} e - The mouse down event.
   * @returns {void}
  */
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.target === resizeRef.current) {
      setDraggingBottom(true);
    } else {
      setDragging(true);
    }
  };

  /**
   * Handles the mouse up event on the draggable component.
   *
   * @returns {void}
  */
  const handleMouseUp = () => {
    setDragging(false);
    setDraggingBottom(false);
  };

  return {
    dragging,
    draggingBottom,
    handleMouseDown,
    handleMouseUp,
  };
};

const useMouseMove = (
  dragging: boolean,
  draggingBottom: boolean,
  currentPos: { x: number; y: number },
  draggableHeight: number,
  containerRef: React.RefObject<HTMLDivElement>,
  setCurrentPos: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>,
  setDraggableHeight: React.Dispatch<React.SetStateAction<number>>,
  dynamicRows: number,
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
    [dragging, draggingBottom, currentPos, draggableHeight, dynamicRows, containerRef, setCurrentPos, setDraggableHeight],
  );
};

interface DraggableContentProps {
  currentPos: { x: number; y: number };
  draggableHeight: number;
  handleMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  resizeRef: React.RefObject<HTMLDivElement>;
  dynamicRows: number;
  draggableRef: React.RefObject<HTMLDivElement>;
}

const DraggableContent: FC<DraggableContentProps> = ({ currentPos, draggableHeight, handleMouseDown, resizeRef, dynamicRows, draggableRef }) => (
  <div
    className="draggable"
    ref={draggableRef}
    onMouseDown={handleMouseDown}
    style={{
      transform: `translate3d(${currentPos.x}px, ${currentPos.y}px, 0)`,
      height: `calc(100% / ${dynamicRows} * ${draggableHeight} - 5px)`,
    }}
  >
    Drag Me
    <div ref={resizeRef} className="resize-handle" onMouseDown={handleMouseDown} />
  </div>
);

const Draggable: FC<{ dynamicRows: number }> = ({ dynamicRows }) => {
  const [currentPos, setCurrentPos] = useState<{ x: number; y: number }>({ x: ZERO, y: ZERO });
  const [draggableHeight, setDraggableHeight] = useState<number>(ONE);
  const draggableRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeRef = useRef<HTMLDivElement>(null);
  const { dragging, draggingBottom, handleMouseDown, handleMouseUp } = useDraggable(resizeRef);
  const handleMouseMove = useMouseMove(
    dragging,
    draggingBottom,
    currentPos,
    draggableHeight,
    containerRef,
    setCurrentPos,
    setDraggableHeight,
    dynamicRows,
  );

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
    <div className="container" ref={containerRef}>
      {rows.length > ZERO && rows.map((_, i) => (
        <DraggableRow
          key={i}
          index={i}
          dynamicRows={dynamicRows}
        />
      ))}
      <DraggableContent
        currentPos={currentPos}
        draggableHeight={draggableHeight}
        handleMouseDown={handleMouseDown}
        resizeRef={resizeRef}
        dynamicRows={dynamicRows}
        draggableRef={draggableRef}
      />
    </div>
  );
};

export default Draggable;