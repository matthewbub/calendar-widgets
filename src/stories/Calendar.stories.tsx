import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../react';
import BasicCalendarV2 from '../examples/BasicCalendarV2';

const meta = {
  title: 'calendar-widgets/Calendar',
  component: BasicCalendarV2,
  args: {
    date: new Date()
  }
} satisfies Meta<typeof Calendar>;

export const Basic: StoryObj<typeof Calendar> = {
  args: {
    date: new Date(),
    customDay: ({ date }) =>
      <div>
        {date.getDate()}
      </div>
  }
};

export default meta;
