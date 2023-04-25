import React, { createContext, useContext, useState, FC } from 'react';
import { CalendarWidgetsState, CalendarWidgetsProviderProps, DraggableDays } from './CalendarWidgetsContext.types';

const CalendarWidgetsContext = createContext<CalendarWidgetsState | null>(null);

export const useCalendarWidgetsContext = () => {
  const context = useContext(CalendarWidgetsContext);
  if (!context) {
    throw new Error('useCalendarWidgetsContext must be used within a CalendarWidgetsProvider');
  }
  return context;
};

export const CalendarWidgetsProvider: FC<CalendarWidgetsProviderProps> = ({ children }) => {
  const [draggableDays, setDraggableDays] = useState<DraggableDays>([]);

  return (
    <CalendarWidgetsContext.Provider
      value={{
        draggableDays,
        setDraggableDays
      }}
    >
      {children}
    </CalendarWidgetsContext.Provider>
  );
};
