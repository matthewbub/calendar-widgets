import React from 'react';

type CustomFieldProps = (props: { monthIndex: number; lang: string; }) => React.ReactNode;

export interface MonthSelectorProps {
  customField?: CustomFieldProps;
  lang?: string;
  style?: React.CSSProperties;
  className?: string;
}
