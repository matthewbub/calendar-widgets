import React, { FC, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MonthSelector } from '../react';

const Example = () => {
  const [month, setMonth] = useState(1);
  const userPreferredLang = 'en';
  return (
    <div>
      <span>Current selected index: {month}</span>

      <MonthSelector
        lang={userPreferredLang}
        customField={({ monthIndex }) => (
          <button
            onClick={() => setMonth(monthIndex)}
            style={{
              width: '100%',
              marginBottom: '12px',
              padding: '12px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            {new Date(2000, monthIndex - 1).toLocaleDateString(userPreferredLang, { month: 'long' })}
          </button>
        )}
        style={{
          width: '200px',
          padding: '12px',
          paddingBottom: '0',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          maxHeight: '300px',
          overflowY: 'auto',
        }}
      />
    </div>
  )
}

const meta = {
  title: 'calendar-widgets/MonthSelector',
  component: Example,
  args: {
    customField: ({ monthIndex }) =>
      <div style={{ display: 'block' }}>
        {monthIndex}
      </div>
  }
} satisfies Meta<typeof MonthSelector>;

export const Basic: StoryObj<typeof MonthSelector> = {
  args: {
    customField: ({ monthIndex }) =>
      <div>
        <button>
          {monthIndex}
        </button>
      </div>
  }
};

export default meta;
