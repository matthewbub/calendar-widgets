import type { Meta, StoryObj } from '@storybook/react';
import Hello from '../components/Hello';

const meta = {
  title: 'calendar-widgets/Hello',
  component: Hello
} satisfies Meta<typeof Hello>;

export default meta;
type Story = StoryObj<typeof Hello>;

export const Basic: Story = {};
