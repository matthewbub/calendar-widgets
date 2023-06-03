import React from 'react';
import { Calendar } from '../react';
import {CustomDate, CustomHeaderFooterRendererProps} from '../react/Calendar/Calendar.types';
import { newDate } from '../helpers/newDate';

/** Styles */
// import '../../styles/Calendar-grid.css';

const ButtonStyles = {
  backgroundColor: 'transparent',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '4px 8px',
  cursor: 'pointer',
  outline: 'none',
  fontSize: '24px'
} as React.CSSProperties;

const CustomHeaderStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box'
} as React.CSSProperties;

// https://www.w3schools.com/charsets/ref_utf_punctuation.asp
const LeftArrow = () => (
  <div dangerouslySetInnerHTML={{ __html: '&lsaquo;' }}></div>
);
const RightArrow = () => (
  <div dangerouslySetInnerHTML={{ __html: '&rsaquo;' }}></div>
);

const CustomHeader = (props: CustomHeaderFooterRendererProps) => (
  <div style={CustomHeaderStyles}>
    <button
      onClick={props.handlePrevMonth}
      style={ButtonStyles}
    >
      <LeftArrow />
    </button>
    <div>{props.selectedMonth}/{props.selectedYear}</div>
    <button
      onClick={props.handleNextMonth}
      style={ButtonStyles}
    >
      <RightArrow />
    </button>
  </div>
);

const CustomDay = ({ date, isCurrentDay, baseStyles, customDate, inSelectedMonth }: {
  date: Date,
  isCurrentDay: boolean,
  baseStyles: React.CSSProperties;
  customDate?: CustomDate;
  inSelectedMonth: boolean;
}) => (
  <div style={{ ...baseStyles, height: 'fit-content', textAlign: 'center' }}>
    <div style={{
      border: '1px solid #ccc',
      position: 'relative',
      '&:hover': {
        'background': '#000'
      }
    }}>
      <p style={{ fontSize: '24px', opacity: inSelectedMonth ? '100%' : '50%' }}>{date.getDate()}</p>
      {isCurrentDay && <span style={{ color: 'red', position: 'absolute', top: '4px', right: '4px' }}>*</span>}
      {customDate && <span style={{ color: 'red', position: 'absolute', bottom: '4px', right: '4px' }}>Event</span>}
    </div>
  </div>
);

const CustomDayName = ({ label, baseStyles, tooltip }: {
  label: string,
  baseStyles: React.CSSProperties,
  tooltip?: string
}) => (
  <div
    style={{ ...baseStyles, height: 'fit-content', textAlign: 'center' }}
    title={tooltip ? tooltip : label}
  >
    <div style={{
      border: '1px solid #ccc'
    }}>
      <p style={{ fontSize: '24px' }}>{label}</p>
    </div>

  </div>
);

const BasicCalendarV2 = () => {
  function dayNameFactory(weekdayFormat: 'short' | 'long' | 'narrow' | undefined) {
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const localizedDaysOfWeek = daysOfWeek.map(day => {
      const date = new Date(2023, 0, daysOfWeek.indexOf(day) + 1);
      return date.toLocaleDateString('en-US', { weekday: weekdayFormat || 'short' });
    });
    return localizedDaysOfWeek;
  }

  return (
    <Calendar
      date={new Date()}
      showAdjacentDays
      dayNames={dayNameFactory('short')}
      dayNameToolTips={dayNameFactory('long')}
      customHeader={CustomHeader}
      customDay={CustomDay}
      customDayName={CustomDayName}
      layout='flex'
      customDates={[{
        name: 'Lisa\'s Birthday',
        date: newDate(2023, 5, 10),
        className: 'birthday',
        tooltip: 'Lisa\'s Birthday'
      }]}
      style={{
        width: '95%',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    />
  );
};

export default BasicCalendarV2;
