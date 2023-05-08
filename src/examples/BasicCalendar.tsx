import React from 'react';
import { Calendar } from '../react';

const BasicCalendar = () => {
  return (
    <Calendar
      date={new Date()}
      customDay={({ date, isCurrentDay }: { date: Date, isCurrentDay: boolean }) => (
        <div style={{ height: '34px', width: '14.28%', textAlign: 'center' }}>
          {date.getDate()}
          {isCurrentDay && <span style={{ color: 'red' }}>*</span>}
        </div>
      )}
      customHeader={({ selectedMonth, handleNextMonth, handlePrevMonth, prevMonth, nextMonth }) => (
        <div style={{ width: '100%' }}>
          <button onClick={handlePrevMonth}>Prev ({prevMonth})</button>
          <span>{selectedMonth}</span>
          <button onClick={handleNextMonth}>Next ({nextMonth})</button>
        </div>
      )}
      customFooter={({ selectedMonth, handleNextMonth, handlePrevMonth, prevMonth, nextMonth }) => (
        <div style={{ width: '100%' }}>
          <button onClick={handlePrevMonth}>Prev ({prevMonth})</button>
          <span>{selectedMonth}</span>
          <button onClick={handleNextMonth}>Next ({nextMonth})</button>
        </div>
      )}
      dayNames={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
      showAdjacentDays={true}
    />
  );
};

export default BasicCalendar;
