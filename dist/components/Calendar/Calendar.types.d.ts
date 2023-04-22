import React from 'react';
import { MonthFormat } from '../../helpers/listLocalizedMonths';
export interface CalendarProps {
    year: number;
    month: number;
    day: number;
    dayComponent?: ({ isCurrentDay, date }: {
        isCurrentDay: boolean;
        date: Date;
    }) => React.ReactElement;
    showAdjacentDays?: boolean;
    options: {
        dayNamesLocale: string;
        dayNamesDisplay: MonthFormat;
        dayNames: string[];
    };
}
