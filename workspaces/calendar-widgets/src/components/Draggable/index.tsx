import React, { useState, useEffect, useRef } from 'react';
import './Draggable.styles.css';

const Draggable = ({ dynamicRows }) => {
  const [dragging, setDragging] = useState(false);
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const draggableRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const rowHeight = containerRect.height / dynamicRows;
      const posY = Math.round((e.clientY - containerRect.top) / rowHeight) * rowHeight;

      if (posY >= 0 && posY <= containerRect.height - draggableRef.current.offsetHeight) {
        setCurrentPos({ x: 0, y: posY });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, currentPos]);

  return (
    <div className="container" ref={containerRef}>
      {Array(dynamicRows)
        .fill()
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
          height: `calc(100% / ${dynamicRows} - 5px)`,
        }}
      >
        Drag Me
      </div>
    </div>
  );
};

export default Draggable;
