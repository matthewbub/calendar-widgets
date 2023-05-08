/* eslint-disable no-magic-numbers */
import React from 'react';
import { Calendar } from '../react';
import { CustomHeaderFooterRendererProps } from '../react/Calendar/Calendar.types';
import { newDate } from '../helpers/newDate';

const ButtonStyles = {
  backgroundColor: 'transparent',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '4px 8px',
  cursor: 'pointer',
  outline: 'none',
  fontSize: '.75em'
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
      )}
      customDates={[{
        name: 'Lisa\'s Birthday',
        date: newDate(2023, 5, 10),
        className: 'birthday',
        tooltip: 'Lisa\'s Birthday'
      }]}
    />
  );
};

export default BasicCalendarV2;
