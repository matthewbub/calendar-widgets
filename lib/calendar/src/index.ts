/** Dependencies */
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

/** Configurations */
dayjs.extend(localeData);
dayjs().format();

/** Interfaces */
interface getDaysInMonthInterface {
  year: string;
  months: string[];
  current: string;
}

interface commonKeyValueInterface {
  [x: string]: string | string;
}

interface formatResponseInterface {
  [x: string]: {
    daysInMonth: number;
    formattedMonthName: string;
    dateList: commonKeyValueInterface;
  };
}

/** Constants */
const months: string[] = dayjs.months(); // https://day.js.org/docs/en/i18n/listing-months-weekdays

/** Methods */
const formatDate = ({
  year,
  months,
  current,
  day = '01',
}: {
  year: string;
  months: string[];
  current: string;
  day?: string;
}): string => {
  const month = months.indexOf(current) + 1;
  const formattedDay = String(day).padStart(2, '0');
  return `${year}-${month}-${formattedDay}`;
};

const getDaysInMonth = ({
  year,
  months,
  current,
}: getDaysInMonthInterface): number =>
  dayjs(formatDate({ year, months, current })).daysInMonth();

const formatResponse = ({
  collector,
  current,
  months,
  year,
}: {
  collector: formatResponseInterface;
  current: string;
  months: string[];
  year: string;
}): formatResponseInterface => {
  /** Constants */
  const daysInMonth: number = getDaysInMonth({ year, months, current });
  const daysOfMonthAsArray: number[] = [...new Array(daysInMonth).keys()];

  const formatInnerReducerCallback = (
    innerCollector: commonKeyValueInterface,
    innerCurrent: number
  ): commonKeyValueInterface => ({
    [String(innerCurrent + 1)]: formatDate({
      year,
      months,
      current,
      day: String(innerCurrent + 1),
    }),
    ...innerCollector,
  });

  return {
    [current.toLowerCase()]: {
      daysInMonth: daysInMonth,
      formattedMonthName: current,
      dateList: daysOfMonthAsArray.reduce(formatInnerReducerCallback, {}),
    },
    ...collector,
  };
};

const getMonthMeta = (year: number): formatResponseInterface =>
  months.reduce(
    (collector: formatResponseInterface, current: string) =>
      formatResponse({ year: String(year), months, current, collector }),
    {}
  );

console.log(getMonthMeta(2021));
