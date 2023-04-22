/**
 * Generates an object representing a calendar year with a list of days for each month.
 *
 * @param {number} year - The year for which to generate the calendar (e.g. 2023).
 * @returns {object} An object representing a calendar year with a list of days for each month.
 */
export declare const listCalendarYear: (year: number, locale?: string) => {
    [key: string]: string[];
};
