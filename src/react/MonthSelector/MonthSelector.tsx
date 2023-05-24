import React, { FC } from 'react';
import { MonthSelectorProps } from './MonthSelector.types';

/**
 * MonthSelector component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.customField - Custom field function that renders the content for each month. It receives an object with the monthIndex and lang properties.
 * @param {string} [props.lang='en'] - The language used for formatting the month name.
 * @param {Object} [props.style={}] - Custom styles to be applied to the component container.
 * @param {string} [props.className=''] - Custom class name to be applied to the component container.
 * @returns {JSX.Element} The rendered MonthSelector component.
 */
const MonthSelector: FC<MonthSelectorProps> = ({
  customField = ({ monthIndex, lang }) => (
    <div>
      {new Date(2000, monthIndex - 1).toLocaleDateString(lang, { month: 'long' })}
    </div>
  ),
  lang = 'en',
  style = {},
  className = ''
}) => {
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div style={style} className={className}>
      {months.map((month) => (
        <div key={month}>
          {customField({ monthIndex: month, lang })}
        </div>
      ))}
    </div>
  );
};

export default MonthSelector;
