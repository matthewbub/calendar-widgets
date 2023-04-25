import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Calendar from '../components/Calendar';

const Demo = () => {
  return (
    <div>
      <Calendar
        date={new Date()}
        dayComponent={({ date }) => (
          <div onClick={() => {
            // eslint-disable-next-line no-alert
            alert(date);
          }}>
            {date.getDate()}
          </div>
        )}
        prevMonthButton={({ handlePrevMonth, prevMonth }) => (
          <button onClick={handlePrevMonth}>Prev ({prevMonth})</button>
        )}
        nextMonthButton={({ handleNextMonth, nextMonth }) => (
          <button onClick={handleNextMonth}>Next ({nextMonth})</button>
        )}
      />
    </div>
  );
};

const meta = {
  title: 'calendar-widgets/Calendar',
  component: Demo,
  args: {
    date: new Date()
  }
} satisfies Meta<typeof Calendar>;

export const Basic: StoryObj<typeof Calendar> = {
  args: {
    date: new Date(),
    dayComponent: ({ date }) =>
      <div>
        {date.getDate()}
      </div>
  }
};

export default meta;
