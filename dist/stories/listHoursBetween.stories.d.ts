import React, { FC } from 'react';
import type { StoryObj } from '@storybook/react';
declare const Demo: FC<{
    startTime: string;
    endTime: string;
}>;
declare const meta: {
    title: string;
    component: React.FC<{
        startTime: string;
        endTime: string;
    }>;
    args: {
        startTime: string;
        endTime: string;
    };
};
export declare const Basic: StoryObj<typeof Demo>;
export default meta;
