import React from "react";
import { Calendar } from "../react";

const DayComponent = ({ date }: { date: Date }) => (
  <div style={{ height: '34px', width: '36px' }}>
    {date.getDate()}
  </div>
);

const BasicCalendar = () => {
  return (
    <Calendar
      date={new Date()}
      dayComponent={({ date }: { date: Date }) => (
        <div style={{ height: '34px', width: '36px' }}>
          {date.getDate()}
        </div>
      )}
      prevMonthButton={({ handlePrevMonth, prevMonth }) => (
        <button onClick={handlePrevMonth}>Prev ({prevMonth})</button>
      )}
      nextMonthButton={({ handleNextMonth, nextMonth }) => (
        <button onClick={handleNextMonth}>Next ({nextMonth})</button>
      )}
      currentMonthButton={({ currentMonth }) => (
        <button>{currentMonth}</button>
      )}
      dayNames={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
      showAdjacentDays={false}
    />
  );
};

export default BasicCalendar;