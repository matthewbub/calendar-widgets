/** Dependencies */
const dayjs = require('dayjs');
const localeData = require('dayjs/plugin/localeData');

/** Configurations */
dayjs.extend(localeData);
dayjs().format();

/** Constants */
const months: String[] = dayjs.months(); // https://day.js.org/docs/en/i18n/listing-months-weekdays

/** Methods */
const formatDate = ({year, months, current, day = '01'} : {
  year: String,
  months: String[],
  current: String,
  day?: String
}): String => {
  const month = months.indexOf(current) + 1;
  const formattedDay = String(day).padStart(2, '0');
  return `${year}-${month}-${formattedDay}`;
};

const getDaysInMonth = ({ year, months, current }: {
  year: String,
  months: String[],
  current: String,
}): Number => (
  dayjs(
    formatDate({ year, months, current })
  ).daysInMonth()
);

const formatResponse = ({ collector, current, months, year }: {
  collector: any,
  current: String,
  months: String[],
  year: String
}): {[x: string]: {
  daysInMonth: Number,
  formattedMonthName: String,
  dateList: String[]
}} => {
  /** Constants */
  const daysInMonth: Number = getDaysInMonth({ year, months, current });
  const daysOfMonthAsArray: Number[] = [...new Array(daysInMonth).keys()];

  const formatInnerResponse = (
    innerCollector: {} | {[key: string]: string;}, 
    innerCurrent: number
  ): {[x: string]: string | String;} => {
    return {
      [(innerCurrent + 1).toString()]: formatDate({
        year,
        months,
        current,
        day: (innerCurrent + 1).toString()
      }),
      ...innerCollector
    }
  };

  return {
    [current.toLowerCase()]: {
      daysInMonth: daysInMonth,
      formattedMonthName: current,
      dateList: daysOfMonthAsArray.reduce(formatInnerResponse, {})
    },
    ...collector
  };
};

const getMonthMeta = (year: Number): {} | {
  [x: string]: string | String;
} => (
  months.reduce(
    (collector: {} | {[x: string]: string | String;}, current: String) => (
      formatResponse({ year: year.toString(), months, current, collector })
    ), {}
  )
)

console.log(getMonthMeta(2021));
