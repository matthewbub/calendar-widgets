import React from 'react';

export interface CalendarProps {
  date: Date | {
    year: number;
    month: number;
    day: number;
  };
  dayComponent?: ({ isCurrentDay, date }: {
    isCurrentDay: boolean;
    date: Date;
  }) => React.ReactElement;
  showAdjacentDays?: boolean;
  dayNames: string[];
}
