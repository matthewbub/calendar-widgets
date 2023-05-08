import React, { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { calculateHoursBetween } from '../helpers/calculateHoursBetween';

const Demo: FC<{ startTime: string; endTime: string; }> = ({ startTime, endTime }) => {
  return (
    <div>{JSON.stringify(calculateHoursBetween(startTime, endTime))}</div>
  );
};
const meta = {
  title: 'calendar-widgets/helpers/calculateHoursBetween',
  component: Demo,
  args: {
    startTime: '7am',
    endTime: '5pm'
  }
} satisfies Meta<typeof Demo>;

export const Basic: StoryObj<typeof Demo> = {
  args: {
    startTime: '7am',
    endTime: '5pm'
  }
};

export default meta;
