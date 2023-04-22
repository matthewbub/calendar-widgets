import React from 'react';
import type { StoryObj } from '@storybook/react';
import DraggableDay from '../components/DraggableDay';
declare const meta: {
    title: string;
    component: React.FC<{
        startRow: string;
        endRow: string;
    }>;
    args: {
        startRow: string;
        endRow: string;
    };
};
export declare const Basic: StoryObj<typeof DraggableDay>;
export default meta;
