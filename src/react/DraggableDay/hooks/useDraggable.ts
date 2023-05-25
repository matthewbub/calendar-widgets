/* Dependencies */
import { useState, MouseEvent } from 'react';

/**
 * Custom hook for draggable behavior.
 *
 * @param {React.RefObject} resizeRef - The reference to the resize handle.
 * @returns {Object} - The draggable state and event handlers.
 */
export const useDraggable = (resizeRef: React.RefObject<HTMLDivElement>) => {
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
