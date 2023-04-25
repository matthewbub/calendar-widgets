import React, { FC, useState } from 'react';
import { CalendarProps } from './Calendar.types';
import { ONE, SEVEN, SIX, ZERO } from '../../constants';
import { magicNumber } from '../../helpers';
interface DayComponentProps {
  date: Date;
  isCurrentDay: boolean;
}

const Calendar: FC<CalendarProps> = ({
  date,
  dayComponent,
  showAdjacentDays = true,
  dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  nextMonthButton,
  prevMonthButton
}) => {
  const [currentDate, setCurrentDate] = useState(date);

  let year: number, month: number, day: number;
  if (currentDate instanceof Date) {
    year = currentDate.getFullYear();
    month = currentDate.getMonth() + magicNumber('1');
    day = currentDate.getDate();
  } else {
    year = currentDate.year;
    month = currentDate.month;
    day = currentDate.day;
  }

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

    days.push(
      <div key={i} style={{ display: 'inline-block', width: '14.28%', textAlign: 'center' }}>
        {showAdjacentDays || i > ZERO && i <= totalDays ? dayCell : null}
      </div>
    );
  }

  const weeks = [];
  for (let i = ZERO;i < days.length;i += SEVEN) {
    weeks.push(
      <div key={i} style={{ display: 'flex' }}>
        {days.slice(i, i + SEVEN)}
      </div>
    );
  }

  return (
    <div style={{ width: '250px' }}>
      {prevMonthButton && prevMonthButton({ handlePrevMonth: handlePrevMonth, prevMonth: month - magicNumber('1') })}
      {nextMonthButton && nextMonthButton({ handleNextMonth: handleNextMonth, nextMonth: month + magicNumber('1') })}

      <div style={{ display: 'flex' }}>
        {dayNames.map((dayName, idx) =>
          <div key={idx} style={{ display: 'inline-block', width: '14.28%', textAlign: 'center' }}>
            {dayName}
          </div>
        )}
      </div>
      {weeks}
    </div>
  );
};

export default Calendar;
