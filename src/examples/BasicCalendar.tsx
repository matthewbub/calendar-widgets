import React from 'react';
import { Calendar } from '../react';

const BasicCalendar = () => {
  return (
    <Calendar
      date={new Date()}
      dayComponent={({ date, isCurrentDay }: { date: Date, isCurrentDay: boolean }) => (
        <div style={{ height: '34px', width: '14.28%', textAlign: 'center' }}>
          {date.getDate()}
          {isCurrentDay && <span style={{ color: 'red' }}>*</span>}
        </div>
      )}
      // prevMonthButton={({ handlePrevMonth, prevMonth }) => (
      //   <button onClick={handlePrevMonth}>Prev ({prevMonth})</button>
      // )}
      // nextMonthButton={({ handleNextMonth, nextMonth }) => (
      //   <button onClick={handleNextMonth}>Next ({nextMonth})</button>
      // )}
      // currentMonthButton={({ currentMonth }) => (
      //   <button>{currentMonth}</button>
      // )}
      customHeader={({ currentMonth, handleNextMonth, handlePrevMonth, prevMonth, nextMonth }) => (
        <div style={{ width: '100%' }}>
          <button onClick={handlePrevMonth}>Prev ({prevMonth})</button>
          <span>{currentMonth}</span>
          <button onClick={handleNextMonth}>Next ({nextMonth})</button>
        </div>
      )}
      customFooter={({ currentMonth, handleNextMonth, handlePrevMonth, prevMonth, nextMonth }) => (
        <div style={{ width: '100%' }}>
          <button onClick={handlePrevMonth}>Prev ({prevMonth})</button>
          <span>{currentMonth}</span>
          <button onClick={handleNextMonth}>Next ({nextMonth})</button>
        </div>
      )}
      dayNames={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
      showAdjacentDays={true}
    />
  );
};

export default BasicCalendar;
