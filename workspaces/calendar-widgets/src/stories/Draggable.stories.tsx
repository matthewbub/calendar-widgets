import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Draggable from '../components/Draggable';

const meta = {
  title: 'calendar-widgets/Draggable',
  component: Draggable,
  args: {
    dynamicRows: 5,
  }
} satisfies Meta<typeof Draggable>;

export default meta;
type Story = StoryObj<typeof Draggable>;
export const Basic: Story = {};

Basic.args = {
  dynamicRows: 5,
};
