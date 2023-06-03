import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../react';
import BasicCalendarV2 from '../examples/BasicCalendarV2';

const meta = {
  title: 'calendar-widgets/Calendar',
  component: BasicCalendarV2,
  parameters: {
    options: { showPanel: false }
  }
} satisfies Meta<typeof Calendar>;

export const Basic: StoryObj<typeof Calendar> = {};

export default meta;
