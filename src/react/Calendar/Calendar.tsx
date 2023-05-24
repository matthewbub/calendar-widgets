/** Dependencies */
import React, { FC, useState } from 'react';

/** Types */
import { CalendarProps } from './Calendar.types';

/** Helpers */
import { magicNumber as mN, dateToNumbers } from '../../helpers';
import {
  getNextMonth,
  getPreviousMonth,
  createCalendarWeeks,
  isSameDay
} from './Calendar.helpers';

/** Components */
import {
  BaseDayComponent,
  BaseDayNameComponent
} from './components';

/** Constants */
import { classNames } from './Calendar.constants';

/**
 * A customizable calendar component that displays the days of a month in a grid format.
 *
 * @param {Date | {year: number, month: number, day: number}} [date=new Date()] - The date to display in the calendar. If an object is passed, it should have year, month, and day properties.
 * @param {BaseDayComponentProps | ((props: BaseDayComponentProps) => React.ReactElement)} [customDay=BaseDayComponent] - The component used to display each day in the calendar.
 * @param {BaseDayNameComponentProps} [customDayName=BaseDayNameComponent] - The component used to display each day name in the calendar.
 * @param {boolean} [showAdjacentDays=true] - Whether to display days from the previous and next months that are adjacent to the displayed month.
 * @param {string[]} [dayNames=['S', 'M', 'T', 'W', 'T', 'F', 'S']] - An array of strings that represent the names of the days of the week. The first element represents Sunday, the second represents Monday, and so on.
 * @param {string[]} [dayNameToolTips] - An optional array of strings that represent the tooltips to display for each day name. If provided, it should have 7 elements in the same order as dayNames.
 * @param {string} [className] - The CSS class name to apply to the top-level element of the calendar.
 * @param {CustomHeaderAndFooterRenderer} [customHeader] - A function that returns the custom header element for the calendar. It receives an object with the following properties: handleNextMonth, handlePrevMonth, nextMonth, prevMonth, selectedMonth, selectedYear, and today.
 * @param {CustomHeaderAndFooterRenderer} [customFooter] - A function that returns the custom footer element for the calendar. It receives an object with the following properties: handleNextMonth, handlePrevMonth, nextMonth, prevMonth, selectedMonth, selectedYear, and today.
 * @param {React.CSSProperties} [style] - An object containing the inline style of the top-level element of the calendar.
 * @param {{
*   componentInterface?: string;
*   customHeader?: string;
*   component?: string;
*   dayName?: string;
*   customFooter?: string;
*   emptyCell?: string;
* }} [customClassNames=classNames] - An object containing CSS class names to override the default class names used by the component.
* @param {CustomDates} [customDates] - An array of custom dates to be displayed on the calendar. Each object in the array should have a `name`, `date`, and optionally a `className` and `tooltip` property. The `date` property should be a `Date` object.
* @returns {React.ReactElement} A calendar component that displays the days of a month in a grid format.
*/
const Calendar: FC<CalendarProps> = ({
  date = new Date(),
  customDay = BaseDayComponent,
  customDayName = BaseDayNameComponent,
  showAdjacentDays = true,
  dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  dayNameToolTips,
  className,
  customHeader,
  customFooter,
  style,
  customClassNames = classNames,
  customDates
}) => {
  const [currentDate, setCurrentDate] = useState(date);
  const { year, month, day } = dateToNumbers(currentDate);
  const DayComponent = customDay;
  const DayNameComponent = customDayName;
  const CustomHeader = customHeader || null;
  const CustomFooter = customFooter || null;

  const handleNextMonth = (stop?: null) => {
    if (stop === null) {
      return;
    }
    setCurrentDate(new Date(year, month, day));
  };

  const handlePrevMonth = (stop?: null) => {
    if (stop === null) {
      return;
    }
    setCurrentDate(new Date(year, month - mN('2'), day));
  };

  const startDate = new Date(year, month - mN('1'), mN('1'));
  const endDate = new Date(year, month, mN('0'));

  /**
   * Creates an array of JSX elements representing the days in the calendar grid.
   *
   * @param {Date} start - The start date of the calendar.
   * @param {Date} end - The end date of the calendar.
   * @returns {JSX.Element[]} An array of JSX elements representing the days in the calendar.
   */
  const createCalendarDays = (start: Date, end: Date) => {
    const days: (JSX.Element | null)[] = [];
    const startWeekday = start.getDay();
    const totalDays = end.getDate();

    for (let i = mN('1') - startWeekday; i <= totalDays + mN('6') - end.getDay(); i += mN('1')) {
      const currentDate = new Date(year, start.getMonth(), i);
      const isCurrentDay = i === day;
      const inSelectedMonth = currentDate.getFullYear() === year && currentDate.getMonth() === month - mN('1');

      const safeCustomDates = customDates || [];
      const customDate = safeCustomDates.find(({ date }) => isSameDay(date, currentDate));

      const dayComponent: JSX.Element | null = showAdjacentDays || (i > mN('0') && i <= totalDays)
        ? (
          <DayComponent
            isCurrentDay={isCurrentDay}
            date={currentDate}
            inSelectedMonth={inSelectedMonth}
            customDate={customDate}
          />
        ) : <div className={classNames.emptyCell} />;

      days.push(dayComponent);
    }

    return days;
  };

  const days = createCalendarDays(startDate, endDate);
  const weeks = createCalendarWeeks(days);

  const customHeaderFooterProps = {
    selectedMonth: month,
    selectedYear: year,
    today: new Date(),
    handleNextMonth,
    nextMonth: getNextMonth(month),
    handlePrevMonth,
    prevMonth: getPreviousMonth(month)
  };

  const validTooltips = dayNameToolTips && dayNameToolTips.length === mN('7');
  const tooltips = validTooltips ? dayNameToolTips : dayNames;

  return (
    <div
      className={className ? className : customClassNames.componentInterface}
      style={style}
    >
      {CustomHeader && (
        <div className={customClassNames.customHeader}>
          <CustomHeader {...customHeaderFooterProps} />
        </div>
      )}

      <div className={customClassNames.component}>
        {dayNames.map((dayName, idx) => (
          <DayNameComponent
            key={idx}
            className={customClassNames.dayName}
            label={dayName}
            tooltip={tooltips[idx]}
          />
        ))}

        <React.Fragment>
          {weeks}
        </React.Fragment>
      </div>

      {CustomFooter && (
        <div className={customClassNames.customFooter}>
          <CustomFooter {...customHeaderFooterProps} />
        </div>
      )}
    </div>
  );
};

export default Calendar;
