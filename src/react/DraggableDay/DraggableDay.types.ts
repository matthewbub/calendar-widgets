/* Dependencies */
import React, { MouseEvent } from 'react';

export interface SingleDraggableProps {
  draggable: {
    id: number;
    position: { x: number; y: number };
    height: number;
  };
  dynamicRows: number;
  containerRef: React.RefObject<HTMLDivElement>;
  onDelete: (id: number) => void;
  setDraggables: (newDraggables: Array<{ id: number; position: { x: number; y: number }; height: number }>) => void;
  draggables: Array<{ id: number; position: { x: number; y: number }; height: number }>;
}

export interface DraggableContentProps {
  currentPos: { x: number; y: number };
  draggableHeight: number;
  handleMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  resizeRef: React.RefObject<HTMLDivElement>;
  dynamicRows: number;
  draggableRef: React.RefObject<HTMLDivElement>;
  zIndex: number;
  onDelete: () => void;
}

export interface RowProps {
  index: number;
  dynamicRows: number;
  time: string;
}

export interface DraggablesProps {
  startRow: string;
  endRow: string;
  initialDraggables?: Array<{ id: number; position: { x: number; y: number }; height: number }>;
}

export type DraggableDays = Array<{ id: number; position: { x: number; y: number }; height: number }>;
