/** Dependencies */
import React from 'react';

export interface CustomHeaderFooterRendererProps {
  handleNextMonth: () => void;
  handlePrevMonth: () => void;
  nextMonth: number;
  prevMonth: number;
  selectedMonth: number;
  selectedYear: number;
  today: Date;
}

export type CustomHeaderAndFooterRenderer = ({
  handleNextMonth,
  handlePrevMonth,
  nextMonth,
  prevMonth,
  selectedMonth,
  selectedYear,
  today
}: CustomHeaderFooterRendererProps) => React.ReactElement;

export interface CalendarProps {
  date?: Date | {
    year: number;
    month: number;
    day: number;
  };
  dayComponent?: ({ isCurrentDay, date }: {
    isCurrentDay: boolean;
    date: Date;
    inSelectedMonth: boolean;
  }) => React.ReactElement;
  showAdjacentDays?: boolean;
  dayNames?: string[];
  className?: string;
  customHeader?: CustomHeaderAndFooterRenderer;
  customFooter?: CustomHeaderAndFooterRenderer;
  style?: React.CSSProperties;
  customClassNames?: {
    componentInterface?: string;
    customHeader?: string;
    component?: string;
    dayName?: string;
    customFooter?: string;
    emptyCell?: string;
  }
}
