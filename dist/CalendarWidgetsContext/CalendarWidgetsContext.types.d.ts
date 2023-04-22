import React from 'react';
export type DraggableDays = Array<{
    id: number;
    position: {
        x: number;
        y: number;
    };
    height: number;
}>;
export type SetDraggableDays = React.Dispatch<React.SetStateAction<DraggableDays>>;
export interface CalendarWidgetsState {
    draggableDays: DraggableDays;
    setDraggableDays: React.Dispatch<React.SetStateAction<DraggableDays>>;
}
export interface CalendarWidgetsProviderProps {
    children: React.ReactElement;
}
