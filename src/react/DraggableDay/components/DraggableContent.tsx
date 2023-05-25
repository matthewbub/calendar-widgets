/* Components */
import React, { FC } from 'react';

/* Types */
import { DraggableContentProps } from '../DraggableDay.types';

/**
 * Renders the content of a draggable component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.currentPos - The current position of the draggable.
 * @param {number} props.draggableHeight - The height of the draggable.
 * @param {Function} props.handleMouseDown - The mouse down event handler.
 * @param {React.RefObject} props.resizeRef - The reference to the resize handle.
 * @param {number} props.dynamicRows - The number of dynamic rows.
 * @param {React.RefObject} props.draggableRef - The reference to the draggable element.
 * @param {number} props.zIndex - The z-index of the draggable.
 * @param {Function} props.onDelete - The delete callback function.
 * @returns {JSX.Element} - The rendered component.
 */
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
      height: `calc(100% / ${dynamicRows} * ${draggableHeight} - 0.5px)`,
      zIndex: zIndex
    }}
  >
    <span>
      {'Drag Me'}
    </span>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDelete();
      }}
      className="delete-draggable-btn"
    >
      {'Delete'}
    </button>
    <div
      ref={resizeRef}
      className="resize-handle"
      onMouseDown={handleMouseDown}
    />
  </div>
);

export default DraggableContent;
