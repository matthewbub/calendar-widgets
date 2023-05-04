import React from 'react';

interface CustomHeaderAndFooterProps {
  currentMonth: number;
  handleNextMonth: () => void;
  nextMonth: number;
  handlePrevMonth: () => void;
  prevMonth: number;
}

type CustomHeaderAndFooter = ({ currentMonth, handleNextMonth, nextMonth, handlePrevMonth, prevMonth }: CustomHeaderAndFooterProps) => React.ReactElement;
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
  nextMonthButton?: ({ handleNextMonth, nextMonth }: {
    handleNextMonth: () => void;
    nextMonth: number;
  }) => React.ReactElement;
  prevMonthButton?: ({ handlePrevMonth, prevMonth }: {
    handlePrevMonth: () => void;
    prevMonth: number;
  }) => React.ReactElement;
  currentMonthButton?: ({ currentMonth }: {
    currentMonth: number;
  }) => React.ReactElement;
  className?: string;
  customHeader?: CustomHeaderAndFooter;
  customFooter?: CustomHeaderAndFooter;
}
