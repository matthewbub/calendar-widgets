import React, { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DraggableWeek } from '../react';

const Demo: FC<{ startRow: string; endRow: string; }> = ({ startRow, endRow }) => {
  return (
    <div>
      <DraggableWeek
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
  title: 'calendar-widgets/DraggableWeek',
  component: Demo,
  args: {
    startRow: '7am',
    endRow: '3pm'

  }
} satisfies Meta<typeof DraggableWeek>;

export const Basic: StoryObj<typeof DraggableWeek> = {
  args: {
    startRow: '7am',
    endRow: '3pm'
  }
};

export default meta;
