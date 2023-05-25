/* Dependencies */
import React, { FC, useEffect, useRef } from 'react';

/* Components */
import DraggableContent from './DraggableContent';

/* Types */
import { SingleDraggableProps } from '../DraggableDay.types';

/* Hooks */
import { useMouseMove, useDraggable } from '../hooks';

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

export default SingleDraggable;
