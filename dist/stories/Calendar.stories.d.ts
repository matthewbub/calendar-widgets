import React from 'react';
import type { StoryObj } from '@storybook/react';
import Calendar from '../components/Calendar';
declare const meta: {
    title: string;
    component: React.FC<import("../components/Calendar/Calendar.types").CalendarProps>;
    args: {
        year: number;
        month: number;
        day: number;
    };
};
export declare const Basic: StoryObj<typeof Calendar>;
export default meta;
