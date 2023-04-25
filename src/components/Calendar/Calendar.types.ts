import React from 'react';

export interface CalendarProps {
  year: number;
  month: number;
  day: number;
  dayComponent?: ({ isCurrentDay, date }: {
    isCurrentDay: boolean;
    date: Date;
  }) => React.ReactElement;
  showAdjacentDays?: boolean;
  dayNames: string[];
}
