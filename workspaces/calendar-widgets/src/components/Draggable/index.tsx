import React, { FC, useState, useEffect, useRef, MouseEvent } from 'react';
import './Draggable.styles.css';

const Draggable: FC<{ dynamicRows: number }> = ({ dynamicRows }) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [currentPos, setCurrentPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [draggableHeight, setDraggableHeight] = useState<number>(1);
  const [draggingBottom, setDraggingBottom] = useState<boolean>(false);
  const draggableRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeRef = useRef<HTMLDivElement>(null);


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

  const handleDragging = (e: MouseEvent<HTMLDivElement>, containerRect: DOMRect, rowHeight: number) => {
    const posY = Math.round((e.clientY - containerRect.top) / rowHeight) * rowHeight;
    const row = Math.floor((posY + rowHeight / 2) / rowHeight);

    if (row * rowHeight + draggableHeight * rowHeight <= containerRect.height) {
      setCurrentPos({ x: 0, y: row * rowHeight });
    }
  };

  const handleDraggingBottom = (e: MouseEvent<HTMLDivElement>, containerRect: DOMRect, rowHeight: number) => {
    const posY = e.clientY - containerRect.top;
    const row = Math.floor((posY + rowHeight / 2) / rowHeight);
    const remainingHeight = containerRect.height - currentPos.y;

    // Calculate the nearest 1/4 value
    const quarterRow = rowHeight / 4;
    const newRowHeight = Math.round((posY - currentPos.y) / quarterRow) * quarterRow;

    if (newRowHeight >= quarterRow && newRowHeight <= remainingHeight) {
      setDraggableHeight(newRowHeight / rowHeight);
    }
  };


  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const containerRect = containerRef.current!.getBoundingClientRect();
    const rowHeight = containerRect.height / dynamicRows;

    if (dragging) {
      handleDragging(e, containerRect, rowHeight);
    } else if (draggingBottom) {
      handleDraggingBottom(e, containerRect, rowHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove as unknown as EventListener);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as unknown as EventListener);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, draggingBottom, currentPos, draggableHeight]);

  return (
    <div className="container" ref={containerRef}>
      {Array(dynamicRows)
        .fill(undefined)
        .map((_, i) => (
          <div
            key={i}
            className="row"
            style={{
              height: `calc(100% / ${dynamicRows})`,
              top: `${(i * 100) / dynamicRows}%`,
              borderBottom: i !== dynamicRows - 1 ? '1px solid #000' : 'none',
            }}
          >
            {/* row */}
          </div>
        ))}
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
    </div>
  );
};

export default Draggable;
