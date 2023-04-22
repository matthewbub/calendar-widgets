export interface Locale {
  locale: string;
  daysOfWeek: string[];
  daysOfWeekFull: string[];
  monthsFull: string[];
  monthsShort: string[];
  today: string;
  clear: string;
  close: string;
  firstDay: number;
  labelMonthNext: string;
  labelMonthPrev: string;
  labelMonthSelect: string;
  labelYearSelect: string;
  errorMonth: string;
  errorYear: string;
  errorDay: string;
  errorLocale: string;
  errorOptions: string;
}

interface LocaleConstant extends Locale {
  name: string;
}

export interface LocaleConstants {
  [key: string]: LocaleConstant;
}
