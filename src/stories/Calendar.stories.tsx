import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Calendar from '../components/Calendar';

const meta = {
  title: 'calendar-widgets/Calendar',
  component: Calendar,
  args: {
    date: new Date()
  }
} satisfies Meta<typeof Calendar>;

export const Basic: StoryObj<typeof Calendar> = {
  args: {
    date: new Date(),
    dayComponent: ({ date }) =>
      <div onClick={() => {
        // console.log(date);
      }}>
        {date.getDate()}
      </div>
  }
};

export default meta;
