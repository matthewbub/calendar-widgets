import React, { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { listHoursBetween } from '../helpers/listHoursBetween';

const Demo: FC<{ startTime: string; endTime: string; }> = ({ startTime, endTime }) => {
  return (
    <div>{JSON.stringify(listHoursBetween(startTime, endTime))}</div>
  );
};
const meta = {
  title: 'calendar-widgets/helpers/listHoursBetween',
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
