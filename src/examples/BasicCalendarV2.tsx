import React from 'react';
import { Calendar } from '../react';
import { CustomHeaderFooterRendererProps } from '../react/Calendar/Calendar.types';

const CustomDay = ({ date }: { date: Date }) => (
  <div style={{ height: '34px', width: '14.28%', textAlign: 'center' }}>
    <button>
      {date.getDate()}
    </button>
  </div>
);

const BasicCalendarV2 = () => {
  return (
    <Calendar
      date={new Date()}
      dayComponent={CustomDay}
      customHeader={(props: CustomHeaderFooterRendererProps) => (
        <div style={{ width: '100%' }}>
          <button onClick={props.handlePrevMonth}>{props.prevMonth}</button>
          <div>{props.currentMonth}</div>
          <button onClick={props.handleNextMonth}>{props.nextMonth}</button>
        </div>
      )}
    />
  );
};

export default BasicCalendarV2;
