/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import Draggable from '../components/Draggable';
declare const meta: {
    title: string;
    component: import("react").FC<{
        dynamicRows: number;
    }>;
    args: {
        dynamicRows: number;
    };
};
export declare const Basic: StoryObj<typeof Draggable>;
export default meta;
