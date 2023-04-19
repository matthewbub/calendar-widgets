import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Calendar from '../components/Calendar';

const meta = {
  title: 'calendar-widgets/Calendar',
  component: Calendar,
  args: {
    year: 2021,
    month: 1,
    day: 1
  }
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;
export const Basic: Story = {};

Basic.args = {
  year: 2021,
  month: 1,
  day: 1,
  dayComponent: ({ date }) =>
    <div onClick={() => {
      // console.log(date);
    }}>
      {date.getDate()}
    </div>

};
