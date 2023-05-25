/* Dependencies */
import { useCallback } from 'react';

/**
 * Custom hook for handling mouse move events.
 *
 * @param {boolean} dragging - Indicates if dragging is in progress.
 * @param {boolean} draggingBottom - Indicates if dragging the bottom is in progress.
 * @param {Object} currentPos - The current position of the draggable.
 * @param {number} draggableHeight - The height of the draggable.
 * @param {React.RefObject} containerRef - The reference to the container element.
 * @param {Function} setCurrentPos - The state setter for currentPos.
 * @param {Function} setDraggableHeight - The state setter for draggableHeight.
 * @param {number} dynamicRows - The number of dynamic rows.
 * @returns {Function} - The event handler for mouse move events.
 */
export const useMouseMove = (
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
