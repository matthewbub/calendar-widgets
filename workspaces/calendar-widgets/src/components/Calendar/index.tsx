import React, { FC } from 'react';
import { CalendarProps } from './Calendar.types';
import { listLocalizedWeekDays } from '../../helpers/listLocalizedWeekDays';
import { locale } from '../../locale';
const Calendar: FC<CalendarProps> = ({
  year,
  month,
  day,
  dayComponent,
  showAdjacentDays = false,
  options = {

  }
}) => {
  if (dayComponent === undefined) {
    dayComponent = ({ date }) => (
      <div style={{ textAlign: 'center' }}>{date.getDate()}</div>
    );
  }

  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  const startWeekday = startDate.getDay();
  const totalDays = endDate.getDate();

  let days = [];
  for (let i = 1 - startWeekday; i <= totalDays + 6 - endDate.getDay(); i++) {
    const currentDate = new Date(year, month - 1, i);
    const isCurrentDay = i === day;

    const dayCell = dayComponent({
      isCurrentDay,
      date: currentDate
    });

    days.push(
      <div key={i} style={{ display: 'inline-block', width: '14.28%' }}>
        {showAdjacentDays || (i > 0 && i <= totalDays) ? dayCell : null}
      </div>
    );
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(
      <div key={i} style={{ display: 'flex' }}>
        {days.slice(i, i + 7)}
      </div>
    );
  }

  return (
    <div style={{ width: '250px' }}>
      <div style={{ display: 'flex' }}>
        {locale['en-US'].daysOfWeek.map((dayName, idx) => (
          <div key={idx} style={{ display: 'inline-block', width: '14.28%', textAlign: 'center' }}>
            {dayName}
          </div>
        ))}
      </div>
      {weeks}
    </div>
  );
};

export default Calendar;
