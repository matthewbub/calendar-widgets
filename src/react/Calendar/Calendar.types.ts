/** Dependencies */
import React from 'react';

/** Types */
import { BaseDayComponentProps, BaseDayNameComponentProps } from './components';

/** Custom Header & Footer */
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

/** Custom Dates */
export interface CustomDate {
  name: string;
  date: Date;
  className?: string;
  tooltip?: string;
  meta?: {
    [key: string]: unknown;
  }
}

export type CustomDates = CustomDate[];

/** Calendar Component */
export interface CalendarProps {
  date?: Date | {
    year: number;
    month: number;
    day: number;
  };
  customDay?: (props: BaseDayComponentProps) => React.ReactElement;
  customDayName?: (props: BaseDayNameComponentProps) => React.ReactElement;
  showAdjacentDays?: boolean;
  dayNames?: string[];
  dayNameToolTips?: string[];
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
  },
  customDates?: CustomDates;
}
