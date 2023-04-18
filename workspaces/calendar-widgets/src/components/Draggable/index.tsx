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

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (dragging) {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const rowHeight = containerRect.height / dynamicRows;
      const posY = Math.round((e.clientY - containerRect.top) / rowHeight) * rowHeight;
      const row = Math.floor((posY + rowHeight / 2) / rowHeight);

      setCurrentPos({ x: 0, y: row * rowHeight });
    } else if (draggingBottom) {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const rowHeight = containerRect.height / dynamicRows;
      const posY = Math.round((e.clientY - containerRect.top) / rowHeight) * rowHeight;
      const row = Math.floor((posY + rowHeight / 2) / rowHeight);

      if (row >= 1 && row * rowHeight <= containerRect.height - currentPos.y) {
        setDraggableHeight(row);
      }
    }

    // Ensure the Drag Me div doesn't get smaller than 1 row minus border
    if (draggableHeight < 1) {
      setDraggableHeight(1);
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
