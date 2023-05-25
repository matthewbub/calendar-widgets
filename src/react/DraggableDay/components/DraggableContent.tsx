import React, { FC } from 'react';
import { DraggableContentProps } from '../DraggableDay.types';

const DraggableContent: FC<DraggableContentProps> = ({
  currentPos,
  draggableHeight,
  handleMouseDown,
  resizeRef,
  dynamicRows,
  draggableRef,
  zIndex,
  onDelete
}) => (
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
);

export default DraggableContent;
