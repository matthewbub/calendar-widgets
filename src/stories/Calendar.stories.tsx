import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../react';
import { CustomCalendar } from '../examples/CustomCalendar';

const meta = {
  title: 'calendar-widgets/Calendar',
  component: CustomCalendar,
  parameters: {
    options: { showPanel: false }
  }
} satisfies Meta<typeof Calendar>;

export const Basic: StoryObj<typeof Calendar> = {};

export default meta;
