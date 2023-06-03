import React from 'react';
import { Calendar } from '../react';
import { CustomHeaderFooterRendererProps } from '../react/Calendar/Calendar.types';
import { newDate } from '../helpers/newDate';

/** Styles */
// import '../../styles/Calendar-grid.css';
import { useWindowSize } from './helpers';

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

const CustomDay = ({ date, isCurrentDay, baseStyles }: {
  date: Date,
  isCurrentDay: boolean,
  baseStyles: React.CSSProperties;
}) => (
  <div style={{ ...baseStyles, height: '34px', textAlign: 'center' }}>
    <p style={{ fontSize: '24px' }}>{date.getDate()}</p>
    {isCurrentDay && <span style={{ color: 'red' }}>*</span>}
  </div>
);

const CustomDayName = ({ label, baseStyles }: {
  label: string,
  baseStyles: React.CSSProperties
}) => (
  <div style={{ ...baseStyles, height: '34px', textAlign: 'center' }}>
    <p style={{ fontSize: '24px' }}>{label}</p>
  </div>
);

const BasicCalendarV2 = () => {
  const { height } = useWindowSize();
  return (
    <Calendar
      date={new Date()}
      showAdjacentDays
      dayNameToolTips={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
      customHeader={CustomHeader}
      customDay={CustomDay}
      customDayName={CustomDayName}
      layout={'flex'}
      customDates={[{
        name: 'Lisa\'s Birthday',
        date: newDate(2023, 5, 10),
        className: 'birthday',
        tooltip: 'Lisa\'s Birthday'
      }]}
      style={{
        width: '95%',
        height: height - 100 + 'px',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    />
  );
};

export default BasicCalendarV2;
