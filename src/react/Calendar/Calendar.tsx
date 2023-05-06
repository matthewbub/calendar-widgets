/** Dependencies */
import React, { FC, Fragment, useState } from 'react';

/** Types */
import { CalendarProps } from './Calendar.types';

/** Helpers */
import { magicNumber as mN, dateToNumbers } from '../../helpers';
import { getNextMonth, getPreviousMonth, createCalendarWeeks } from './Calendar.helpers';

/** Components */
import { BaseDayComponent } from './components';

/** Constants */
import { classNames } from './Calendar.constants';

/** Styles */
import './styles/Calendar-grid.css';

const Calendar: FC<CalendarProps> = ({
  date = new Date(),
  dayComponent = BaseDayComponent,
  showAdjacentDays = true,
  dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  className,
  customHeader,
  customFooter,
  style,
  customClassNames = classNames
}) => {
  const [currentDate, setCurrentDate] = useState(date);
  const { year, month, day } = dateToNumbers(currentDate);
  const DayComponent = dayComponent;

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

  const createCalendarDays = (start: Date, end: Date) => {
    const days = [];
    const startWeekday = start.getDay();
    const totalDays = end.getDate();

    for (let i = mN('1') - startWeekday; i <= totalDays + mN('6') - end.getDay(); i += mN('1')) {
      const currentDate = new Date(year, month - mN('1'), i);
      const isCurrentDay = i === day;

      const dayComponent = showAdjacentDays || (i > mN('0') && i <= totalDays)
        ? <DayComponent isCurrentDay={isCurrentDay} date={currentDate} />
        : <div className={classNames.emptyCell} />;

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

  return (
    <div
      className={className ? className : customClassNames.componentInterface}
      style={style}
    >
      {customHeader && (
        <div className={customClassNames.customHeader}>
          {customHeader(customHeaderFooterProps)}
        </div>
      )}

      <div className={customClassNames.component}>
        {dayNames.map((dayName, idx) =>
          <div
            key={idx}
            className={customClassNames.dayName}
          >
            {dayName}
          </div>
        )}

        <Fragment>
          {weeks}
        </Fragment>
      </div>

      {customFooter && (
        <div className={customClassNames.customFooter}>
          {customFooter(customHeaderFooterProps)}
        </div>
      )}
    </div>
  );
};

export default Calendar;
