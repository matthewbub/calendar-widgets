import {Locale} from './types';

export const locale: Locale = {
  locale: 'English (United States)',
  daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysOfWeekFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  today: 'Today',
  clear: 'Clear',
  close: 'Close',
  firstDay: 0,
  labelMonthNext: 'Next month',
  labelMonthPrev: 'Previous month',
  labelMonthSelect: 'Select a month',
  labelYearSelect: 'Select a year',
  errorMonth: 'Invalid month. Month must be between 1 and 12.',
  errorYear: 'Invalid year. Year must be between 1900 and 2100.',
  errorDay: 'Invalid day. Day must be between 1 and 31.',
  errorLocale: 'Invalid locale. The locale must be a string. For example: "en-US".',
  errorOptions: 'Invalid options. The options must be an object. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString for more information.'
};
