import { BASE_CLASSNAME } from '../../constants';

const baseClassName = BASE_CLASSNAME + 'Calendar__';

export const classNames = {
  componentInterface: baseClassName + 'component-interface',
  customHeader: baseClassName + 'custom-header',
  component: baseClassName + 'component',
  dayName: baseClassName + 'day-name',
  customFooter: baseClassName + 'custom-footer',
  emptyCell: baseClassName + 'empty-cell'
};

export const baseStylesForComponentInterface = {
  // 7 days in a week
  width: 100 / 7 + '%'
};
