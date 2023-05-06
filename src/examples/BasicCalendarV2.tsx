import React from 'react';
import { Calendar } from '../react';
import { CustomHeaderFooterRendererProps } from '../react/Calendar/Calendar.types';

const CustomDay = ({ date }: { date: Date }) => (
  <div style={{ height: '34px', textAlign: 'center' }}>
    {date.getDate()}
  </div>
);

const BasicCalendarV2 = () => {
  return (
    <Calendar
      date={new Date()}
      dayComponent={CustomDay}
      customHeader={(props: CustomHeaderFooterRendererProps) => (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', boxSizing: 'border-box' }}>
          <button onClick={props.handlePrevMonth}>
            Prev month ({props.prevMonth})
          </button>
          {/* <div>{props.currentDate.toLocaleDateString('en-US')}</div> */}
          <button onClick={props.handleNextMonth}>
            Next month ({props.nextMonth})
          </button>
        </div>
      )}
    />
  );
};

export default BasicCalendarV2;
