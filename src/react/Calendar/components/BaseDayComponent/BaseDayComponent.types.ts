import { CustomDate } from '../../Calendar.types';

export interface BaseDayComponentProps {
  date: Date;
  isCurrentDay: boolean;
  inSelectedMonth: boolean;
  customDate?: CustomDate
}
