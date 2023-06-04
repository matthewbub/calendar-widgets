import React, { FC } from 'react';
import { Calendar, MonthSelector, YearSelector } from '../../react';
import { CustomDate, CustomHeaderFooterRendererProps } from '../../react/Calendar/Calendar.types';
import { newDate } from '../../helpers/newDate';

/** Styles */
// import '../../styles/Calendar-grid.css';
const monthYearButtonStyles = {
  backgroundColor: 'transparent',
  border: '0',
  fontSize: '24px'
};

const monthButtonStyles = {
  backgroundColor: 'transparent',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '4px 8px',
  cursor: 'pointer',
  outline: 'none',

  height: '40px',
  minWidth: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
} as React.CSSProperties;

const buttonStyles = {
  backgroundColor: 'transparent',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '4px 8px',
  cursor: 'pointer',
  outline: 'none',
  fontSize: '24px',
  height: '40px',
  minWidth: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
} as React.CSSProperties;

const customHeaderStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '0 4px'
} as React.CSSProperties;

// https://www.w3schools.com/charsets/ref_utf_punctuation.asp
const LeftArrow = () => (
  <div dangerouslySetInnerHTML={{ __html: '&lsaquo;' }}></div>
);
const RightArrow = () => (
  <div dangerouslySetInnerHTML={{ __html: '&rsaquo;' }}></div>
);

const CustomMonthSelector: FC<{ month: number }> = ({ month }) => {
  const [displayMonthSelector, setDisplayMonthSelector] = React.useState(false);
  const handleMonthClick = () => {
    setDisplayMonthSelector(!displayMonthSelector);
  };
  return (
    <div>
      <button onClick={handleMonthClick} style={monthYearButtonStyles}>
        {month}
      </button>
      {displayMonthSelector && (
        <MonthSelector />
      )}
    </div>
  );
};
const CustomYearSelector: FC<{ year: number }> = ({ year }) => {
  const [displayedYear, setDisplayedYear] = React.useState(false);
  const handleYearClick = () => {
    setDisplayedYear(!displayedYear);
  };
  return (
    <div>
      <button onClick={handleYearClick} style={monthYearButtonStyles}>
        {year}
      </button>
      {displayedYear && (
        <YearSelector startYear={1900} endYear={2100} />
      )}
    </div>
  );
};
const CustomHeader = (props: CustomHeaderFooterRendererProps) => (
  <div style={customHeaderStyles}>
    <button
      onClick={props.handlePrevMonth}
      style={buttonStyles}
    >
      <LeftArrow />
    </button>
    <div style={monthButtonStyles}>
      <CustomMonthSelector month={props.selectedMonth} />
      <CustomYearSelector year={props.selectedYear} />
    </div>
    <button
      onClick={props.handleNextMonth}
      style={buttonStyles}
    >
      <RightArrow />
    </button>
  </div>
);

const CustomDay = ({ date, isCurrentDay, baseStyles, customDates, inSelectedMonth }: {
  date: Date,
  isCurrentDay: boolean,
  baseStyles: React.CSSProperties;
  customDates?: CustomDate[];
  inSelectedMonth: boolean;
}) => (
  <div style={{ ...baseStyles, height: 'fit-content', textAlign: 'center' }}>
    <div style={{
      border: '1px solid #ccc',
      position: 'relative',
      margin: '4px',
      borderRadius: '4px'
    }}>
      <p style={{ fontSize: '24px', opacity: inSelectedMonth ? '100%' : '50%' }}>{date.getDate()}</p>
      {isCurrentDay && <span style={{ color: 'red', position: 'absolute', top: '4px', right: '4px' }}>*</span>}

      {customDates && customDates.length > 0 && (
        <span style={{ position: 'absolute', bottom: '4px', left: '4px' }}>{customDates.length}</span>
      )}
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
      border: '1px solid #ccc',
      margin: '4px',
      borderRadius: '4px'
    }}>
      <p style={{ fontSize: '24px' }}>{label}</p>
    </div>

  </div>
);

const CustomCalendar = () => {
  function dayNameFactory(weekdayFormat: 'short' | 'long' | 'narrow' | undefined) {
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const localizedDaysOfWeek = daysOfWeek.map((day) => {
      const date = new Date(2023, 0, daysOfWeek.indexOf(day) + 1);
      return date.toLocaleDateString('en-US', { weekday: weekdayFormat || 'short' });
    });
    return localizedDaysOfWeek;
  }

  return (
    <Calendar
      date={new Date()}
      showAdjacentDays
      layout='flex'
      dayNames={dayNameFactory('short')}
      dayNameToolTips={dayNameFactory('long')}
      customHeader={CustomHeader}
      customDay={CustomDay}
      customDayName={CustomDayName}
      customDates={[
        {
          name: 'Lisa\'s Birthday',
          date: newDate(2023, 5, 10),
          className: 'birthday',
          tooltip: 'Lisa\'s Birthday'
        },
        {
          name: 'Neji\'s Birthday',
          date: newDate(2023, 5, 10),
          className: 'birthday',
          tooltip: 'Neji\'s Birthday'
        }
      ]}
      style={{
        width: '95%',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    />
  );
};

export default CustomCalendar;
