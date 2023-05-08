import React, { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DraggableDay } from '../react';

const Demo: FC<{ startRow: string; endRow: string; }> = ({ startRow, endRow }) => {
  return (
    <div>
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
