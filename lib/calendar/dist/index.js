"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendar = exports.formatResponse = exports.getDaysInMonth = exports.formatDate = exports.months = void 0;
/** Dependencies */
const dayjs_1 = __importDefault(require("dayjs"));
const localeData_1 = __importDefault(require("dayjs/plugin/localeData"));
/** Configurations */
dayjs_1.default.extend(localeData_1.default);
(0, dayjs_1.default)().format();
/** Constants */
exports.months = dayjs_1.default.months().reverse(); // https://day.js.org/docs/en/i18n/listing-months-weekdays
/** Methods */
const formatDate = ({ year, months, current, day = '01', }) => {
    const month = months.indexOf(current) + 1;
    const formattedDay = String(day).padStart(2, '0');
    return `${year}-${month}-${formattedDay}`;
};
exports.formatDate = formatDate;
const getDaysInMonth = ({ year, months, current, }) => (0, dayjs_1.default)((0, exports.formatDate)({ year, months, current })).daysInMonth();
exports.getDaysInMonth = getDaysInMonth;
const formatResponse = ({ collector, current, months, year, }) => {
    /** Constants */
    const daysInMonth = (0, exports.getDaysInMonth)({ year, months, current });
    const daysOfMonthAsArray = [...new Array(daysInMonth).keys()];
    const formatInnerReducerCallback = (innerCollector, innerCurrent) => (Object.assign({ [String(innerCurrent + 1)]: (0, exports.formatDate)({
            year,
            months,
            current,
            day: String(innerCurrent + 1),
        }) }, innerCollector));
    return Object.assign({ [current.toLowerCase()]: {
            count: daysInMonth,
            collection: daysOfMonthAsArray.reduce(formatInnerReducerCallback, {})
        } }, collector);
};
exports.formatResponse = formatResponse;
const calendar = (year) => {
    if (String(year).length !== 4 || isNaN(parseFloat(String(year)))) {
        return ({
            "error": {
                "body": "invalid argument passed to `calendar('YYYY')`"
            }
        });
    }
    return exports.months.reduce((collector, current) => (0, exports.formatResponse)({ year: String(year), months: exports.months, current, collector }), {});
};
exports.calendar = calendar;
//# sourceMappingURL=index.js.map