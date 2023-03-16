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
    count: number;
    collection: commonKeyValueInterface;
  };
}

interface formatErrorResponseInterface {
  [x: string]: {
    title?: string;
    body: string;
  };
}

/** Constants */
export const months: string[] = dayjs.months().reverse(); // https://day.js.org/docs/en/i18n/listing-months-weekdays

/** Methods */
export const formatDate = ({
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
  const month = 12 - months.indexOf(current);
  const formattedDay = String(day).padStart(2, '0');
  return `${year}-${month}-${formattedDay}`;
};

export const getDaysInMonth = ({
  year,
  months,
  current,
}: getDaysInMonthInterface): number =>
  dayjs(formatDate({ year, months, current })).daysInMonth();

export const formatResponse = ({
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
      count: daysInMonth,
      collection: daysOfMonthAsArray.reduce(formatInnerReducerCallback, {}),
    },
    ...collector,
  };
};

export const calendar = (
  year: number | string
): formatResponseInterface | formatErrorResponseInterface => {
  if (String(year).length !== 4 || isNaN(parseFloat(String(year)))) {
    return {
      error: {
        body: "invalid argument passed to `calendar('YYYY')`",
      },
    };
  }

  return months.reduce(
    (collector: formatResponseInterface, current: string) =>
      formatResponse({ year: String(year), months, current, collector }),
    {}
  );
};
