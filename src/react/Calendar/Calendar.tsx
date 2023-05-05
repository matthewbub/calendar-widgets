import React, { FC, useState } from 'react';
import { CalendarProps } from './Calendar.types';
import { ONE, SEVEN, SIX, ZERO } from '../../constants';
import { magicNumber } from '../../helpers';
import { getNextMonth, getPreviousMonth } from './Calendar.utilities';
import { dateToNumbers } from '../../helpers/dateToNumbers';
interface DayComponentProps {
  date: Date;
  isCurrentDay: boolean;
}

const Calendar: FC<CalendarProps> = ({
  date = new Date(),
  dayComponent,
  showAdjacentDays = true,
  dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  className,
  customHeader,
  customFooter,
  style
}) => {
  const [currentDate, setCurrentDate] = useState(date);

  const { year, month, day } = dateToNumbers(currentDate);

  let DayComponent: FC<DayComponentProps> = ({ date, isCurrentDay }) => (
    <div style={{ textAlign: 'center' }}>
      <span>
        {isCurrentDay ? <span style={{ color: 'red' }}>*</span> : null}
        {date.getDate()}
      </span>
    </div>
  );

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month, day));
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - magicNumber('2'), day));
  };

  if (dayComponent !== undefined) {
    DayComponent = dayComponent;
  }

  const startDate = new Date(year, month - ONE, ONE);
  const endDate = new Date(year, month, ZERO);
  const startWeekday = startDate.getDay();
  const totalDays = endDate.getDate();

  const days = [];
  for (let i = ONE - startWeekday;i <= totalDays + SIX - endDate.getDay();i += ONE) {
    const currentDate = new Date(year, month - ONE, i);
    const isCurrentDay = i === day;

    const dayCell = DayComponent({
      isCurrentDay,
      date: currentDate
    });

    days.push(showAdjacentDays || i > ZERO && i <= totalDays ? dayCell : null);
  }

  const weeks = [];
  for (let i = ZERO;i < days.length;i += SEVEN) {
    weeks.push(days.slice(i, i + SEVEN));
  }

  const customHeaderFooterProps = {
    currentMonth: month,
    handleNextMonth,
    nextMonth: getNextMonth(month),
    handlePrevMonth,
    prevMonth: getPreviousMonth(month)
  };

  return (
    <div
      className={className}
      style={style ? style : { display: 'flex', flexWrap: 'wrap', width: '100%' }}
    >
      {customHeader && customHeader(customHeaderFooterProps)}

      {dayNames.map((dayName, idx) =>
        <div key={idx} style={{ display: 'inline-block', width: '14.28%', textAlign: 'center' }}>
          {dayName}
        </div>
      )}

      {weeks}

      {customFooter && customFooter(customHeaderFooterProps)}
    </div>
  );
};

export default Calendar;
