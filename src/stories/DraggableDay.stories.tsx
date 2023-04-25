import React, { FC, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DraggableDay from '../components/DraggableDay';
import { Input } from '../components/Input';

const Demo: FC<{ startRow: string; endRow: string; }> = ({ startRow, endRow }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const regex = new RegExp(/^(\d+)(h|m)$/);

    if (!regex.test(value)) {
      setError('Please enter a valid value (e.g. 10h or 30m)');
      return;
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          // value={startRow}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter time here"
          pattern="^(\d+)(h|m)$"
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Submit</button>
      </form>

      <DraggableDay
        startRow={startRow}
        endRow={endRow}
        initialDraggables={[{
          id: 1,
          position: { x: 0, y: 0 },
          height: 1
        },
        {
          id: 2,
          position: { x: 0, y: 50 },
          height: 1
        }]}
      />
    </div>
  );
};

const meta = {
  title: 'calendar-widgets/DraggableDay',
  component: Demo,
  args: {
    startRow: '7am',
    endRow: '3pm'

  }
} satisfies Meta<typeof DraggableDay>;

export const Basic: StoryObj<typeof DraggableDay> = {
  args: {
    startRow: '7am',
    endRow: '3pm'
  }
};

export default meta;
