import React, { FC, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { YearSelector } from '../react';

const Example = () => {
  const [month, setMonth] = useState(1);
  const userPreferredLang = 'en';
  return (
    <div>
      <span>Current selected index: {month}</span>

      <YearSelector
        startYear={1900}
        endYear={2100}
      />
    </div>
  )
}

const meta = {
  title: 'calendar-widgets/YearSelector',
  component: Example,
  args: {
    startYear: 1900,
    endYear: 2100,
  }
} satisfies Meta<typeof YearSelector>;

export const Basic: StoryObj<typeof YearSelector> = {
  args: {
    startYear: 1900,
    endYear: 2100,
  }
};

export default meta;
