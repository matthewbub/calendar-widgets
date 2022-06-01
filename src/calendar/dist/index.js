/** Dependencies */
const dayjs = require('dayjs');
const localeData = require('dayjs/plugin/localeData');
/** Configurations */
dayjs.extend(localeData);
dayjs().format();
/** Constants */
const months = dayjs.months(); // https://day.js.org/docs/en/i18n/listing-months-weekdays
/** Methods */
const formatDate = ({ year, months, current, day = '01' }) => {
    const month = months.indexOf(current) + 1;
    const formattedDay = String(day).padStart(2, '0');
    return `${year}-${month}-${formattedDay}`;
};
const getDaysInMonth = ({ year, months, current }) => (dayjs(formatDate({ year, months, current })).daysInMonth());
const formatResponse = ({ collector, current, months, year }) => {
    /** Constants */
    const daysInMonth = getDaysInMonth({ year, months, current });
    const daysOfMonthAsArray = [...new Array(daysInMonth).keys()];
    const formatInnerResponse = (innerCollector, innerCurrent) => {
        return Object.assign({ [(innerCurrent + 1).toString()]: formatDate({
                year,
                months,
                current,
                day: (innerCurrent + 1).toString()
            }) }, innerCollector);
    };
    return Object.assign({ [current.toLowerCase()]: {
            daysInMonth: daysInMonth,
            formattedMonthName: current,
            dateList: daysOfMonthAsArray.reduce(formatInnerResponse, {})
        } }, collector);
};
const getMonthMeta = (year) => (months.reduce((collector, current) => (formatResponse({ year: year.toString(), months, current, collector })), {}));
console.log(getMonthMeta(2021));
//# sourceMappingURL=index.js.map