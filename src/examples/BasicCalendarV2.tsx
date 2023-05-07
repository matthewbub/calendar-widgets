import React from 'react';
import { Calendar } from '../react';
import { CustomHeaderFooterRendererProps } from '../react/Calendar/Calendar.types';

const ButtonStyles = {
  backgroundColor: 'transparent',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '4px 8px',
  cursor: 'pointer',
  outline: 'none',
  fontSize: '.75em',
} as React.CSSProperties;

const CustomHeaderStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box'
} as React.CSSProperties;

const BasicCalendarV2 = () => {
  return (
    <Calendar
      date={new Date()}
      showAdjacentDays
      dayNameToolTips={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
      customHeader={(props: CustomHeaderFooterRendererProps) => (
        <div style={CustomHeaderStyles}>
          <button
            onClick={props.handlePrevMonth}
            style={ButtonStyles}
          >
            <div dangerouslySetInnerHTML={{ __html: '&lsaquo;' }}></div>
          </button>
          <div>{props.selectedMonth}/{props.selectedYear}</div>
          <button
            onClick={props.handleNextMonth}
            style={ButtonStyles}
          >
            <div dangerouslySetInnerHTML={{ __html: '&rsaquo;' }}></div>
          </button>
        </div>
      )}
    />
  );
};

export default BasicCalendarV2;
