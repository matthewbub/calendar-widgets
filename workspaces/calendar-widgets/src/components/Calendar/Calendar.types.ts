import { MonthFormat } from "../../helpers/listLocalizedMonths";

export interface CalendarProps {
  year: number;
  month: number;
  day: number;
  dayComponent?: (props: {
    isCurrentDay: boolean;
    date: Date;
  }) => React.ReactElement;
  showAdjacentDays?: boolean;
  options: {
    dayNamesLocale: string;
    dayNamesDisplay: MonthFormat;
    dayNames: string[];
  }
}