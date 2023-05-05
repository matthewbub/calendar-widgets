import React from 'react';

export interface CustomHeaderFooterRendererProps {
  currentMonth: number;
  handleNextMonth: () => void;
  nextMonth: number;
  handlePrevMonth: () => void;
  prevMonth: number;
}

export type CustomHeaderAndFooterRenderer = ({ currentMonth, handleNextMonth, nextMonth, handlePrevMonth, prevMonth }: CustomHeaderFooterRendererProps) => React.ReactElement;

export interface CalendarProps {
  date?: Date | {
    year: number;
    month: number;
    day: number;
  };
  dayComponent?: ({ isCurrentDay, date }: {
    isCurrentDay: boolean;
    date: Date;
  }) => React.ReactElement;
  showAdjacentDays?: boolean;
  dayNames?: string[];
  className?: string;
  customHeader?: CustomHeaderAndFooterRenderer;
  customFooter?: CustomHeaderAndFooterRenderer;
  style?: React.CSSProperties;
}
