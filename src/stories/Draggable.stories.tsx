import type { Meta, StoryObj } from '@storybook/react';
import Draggable from '../components/Draggable';

const meta = {
  title: 'calendar-widgets/Draggable',
  component: Draggable,
  args: {
    dynamicRows: 5
  }
} satisfies Meta<typeof Draggable>;

export const Basic: StoryObj<typeof Draggable> = {
  args: {
    dynamicRows: 5
  }
};

export default meta;