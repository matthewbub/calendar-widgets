import React from 'react';
import { CustomDate } from '../../Calendar.types';

export interface BaseDayComponentProps {
  date: Date;
  isCurrentDay: boolean;
  inSelectedMonth: boolean;
  customDates?: CustomDate[];
  baseStyles: React.CSSProperties;
}
