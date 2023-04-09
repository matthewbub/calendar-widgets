/**
 * Determines whether a given year is a valid year between 1900 and 2100.
 *
 * @param {number} year - The year to validate (e.g. 2023).
 * @returns {boolean} True if the year is valid, false otherwise.
 */
const isValidYear = (year) => {
  if (!Number.isFinite(year)) {
    return false;
  }

  const yStr = year.toString();

  if (yStr.length !== 4 || year < 1900 || year > 2100) {
    return false;
  }
  return true;
};

/**
 * Determines whether a given month is a valid month between 1 and 12.
 *
 * @param {number} month - The month to validate (1-12).
 * @returns {boolean} True if the month is valid, false otherwise.
 */
const isValidMonth = (month) => {
  if (typeof month === 'number' && !isNaN(month) && month >= 1 && month <= 12) {
    return true;
  }
  return false;
};

/**
 * Calculates the number of days in a given month and year.
 *
 * @param {number} year - The year for which to calculate the number of days (e.g. 2023).
 * @param {number} month - The month for which to calculate the number of days (1-12).
 * @returns {number} The number of days in the specified month and year.
 */
const getDaysInMonth = (year, month) => {
  const validYear = isValidYear(year);
  const validMonth = isValidMonth(month);
  
  if (validYear === false || validMonth === false) {
    throw new Error('Invalid year or month. Year must be between 1900 and 2100, and month must be between 1 and 12.');
  }

  return new Date(year, month, 0).getDate();
};

/**
 * Determines whether a given day is a valid day between 1 and 31.
 *
 * @param {number} day - The day to validate (1-31).
 * @returns {boolean} True if the day is valid, false otherwise.
 */
const isValidDay = (day) => {
  if (typeof day === 'number' && !isNaN(day) && day >= 1 && day <= 31) {
    return true;
  }
  return false;
};

/**
 * Formats a date in a locale-specific format.
 *
 * @param {number} month - The month of the date (1-12).
 * @param {number} day - The day of the date (1-31).
 * @param {number} year - The year of the date (e.g. 2023).
 * @param {string} [locale] - The locale to use when formatting the date. Defaults to the user's locale.
 * @param {Object} [options] - Additional options to pass to the `toLocaleDateString` method. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString for more information.
 * @returns {string} A formatted date string in a locale-specific format.
 */
const formatDate = (month, day, year, locale = undefined, options) => {
  const validMonth = isValidMonth(month);
  const validYear = isValidYear(year);
  const validDay = isValidDay(day);

  if (validMonth === false) {
    throw new Error('Invalid month. Month must be between 1 and 12.');
  }
  if (validYear === false) {
    throw new Error('Invalid year. Year must be between 1900 and 2100.');
  }
  if (validDay === false) {
    throw new Error('Invalid day. The day must be between 1 and 31.');
  }
  if (typeof locale !== 'undefined' && typeof locale !== 'string') {
    throw new Error('Invalid locale. The locale must be a string.');
  }

  const date = new Date(year, month - 1, day); // Month index starts from 0
  const localeOptions = options || { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString(locale, localeOptions);
};

/**
 * Generates an array of formatted date strings representing each day in a given month and year.
 *
 * @param {number} year - The year for which to generate the list of days (e.g. 2023).
 * @param {number} month - The month for which to generate the list of days (1-12).
 * @returns {Array} An array of formatted date strings representing each day in the specified month and year.
 */
const listDaysInMonth = (year, month) => {
  if (!isValidMonth(month)) {
    throw new Error(`Invalid month: ${month}. The month must be an integer between 1 and 12.`);
  }

  if (!isValidYear(year)) {
    throw new Error(`Invalid year: ${year}. The year must be a valid year between 1900 and 2100.`);
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  let dates = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const formattedDate = formatDate(month, day, year);
    dates.push(formattedDate);
  }

  return dates;
};

const locale$b = {
  daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysOfWeekFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthsFull: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  today: 'Today',
  clear: 'Clear',
  close: 'Close',
  firstDay: 0,
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  labelMonthNext: 'Next month',
  labelMonthPrev: 'Previous month',
  labelMonthSelect: 'Select a month',
  labelYearSelect: 'Select a year',
  selectMonths: true,
  selectYears: true,
  min: true,
  max: true,
};

const locale$a = {
  daysOfWeek: ['So', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Sa'],
  daysOfWeekFull: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'],
  monthsFull: [
    'Januarie',
    'Februarie',
    'Maart',
    'April',
    'Mei',
    'Junie',
    'Julie',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ],
  monthsShort: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
  today: 'Vandag',
  clear: 'Maak Skoon',
  close: 'Maak Toe',
  firstDay: 0,
  format: 'dd/mm/yyyy',
  formatSubmit: 'dd/mm/yyyy',
  labelMonthNext: 'Volgende maand',
  labelMonthPrev: 'Vorige maand',
  labelMonthSelect: 'Kies \'n maand',
  labelYearSelect: 'Kies \'n jaar',
  selectMonths: true,
  selectYears: true,
  min: true,
  max: true
};

const locale$9 = {
  daysOfWeek: ['Di', 'Hë', 'Ma', 'Më', 'En', 'Pr', 'Sh'],
  daysOfWeekFull: ['E Diel', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë'],
  monthsFull: [
    'Janar',
    'Shkurt',
    'Mars',
    'Prill',
    'Maj',
    'Qershor',
    'Korrik',
    'Gusht',
    'Shtator',
    'Tetor',
    'Nëntor',
    'Dhjetor'
  ],
  monthsShort: ['Jan', 'Shk', 'Mar', 'Pri', 'Maj', 'Qer', 'Kor', 'Gus', 'Sht', 'Tet', 'Nën', 'Dhj'],
  today: 'Sot',
  clear: 'Pastro',
  close: 'Mbyll',
  firstDay: 1,
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  labelMonthNext: 'Muaji tjetër',
  labelMonthPrev: 'Muaji i kaluar',
  labelMonthSelect: 'Zgjedhni një muaj',
  labelYearSelect: 'Zgjedhni një vit',
  selectMonths: true,
  selectYears: true,
  min: true,
  max: true
};

const locale$8 = {
  daysOfWeek: ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ'],
  daysOfWeekFull: ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ'],
  monthsFull: [
    'ጃንዩወሪ',
    'ፌብሩወሪ',
    'ማርች',
    'ኤፕረል',
    'ሜይ',
    'ጁን',
    'ጁላይ',
    'ኦገስት',
    'ሴፕቴምበር',
    'ኦክተውበር',
    'ኖቬምበር',
    'ዲሴምበር'
  ],
  monthsShort: ['ጃንዩ', 'ፌብሩ', 'ማርች', 'ኤፕረ', 'ሜይ', 'ጁን', 'ጁላይ', 'ኦገስ', 'ሴፕቴ', 'ኦክተ', 'ኖቬም', 'ዲሴም'],
  today: 'ዛሬ',
  clear: 'አጥፋ',
  close: 'ዝጋ',
  firstDay: 0,
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  labelMonthNext: 'የሚቀጥሉበት ወር',
  labelMonthPrev: 'የሚለው ወር',
  labelMonthSelect: 'ወርውን ይምረጡ',
  labelYearSelect: 'ዓመቱን ይምረጡ',
  selectMonths: true,
  selectYears: true,
  min: true,
  max: true
};

const locale$7 = {
  daysOfWeek: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  daysOfWeekFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  monthsFull: [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
  ],
  monthsShort: ['ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس', 'سبت', 'أكت', 'نوف', 'ديس'],
  today: 'اليوم',
  clear: 'مسح',
  close: 'إغلاق',
  firstDay: 6,
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  labelMonthNext: 'الشهر القادم',
  labelMonthPrev: 'الشهر السابق',
  labelMonthSelect: 'اختر شهرًا',
  labelYearSelect: 'اختر عامًا',
  selectMonths: true,
  selectYears: true,
  min: true,
  max: true
};

const locale$6 = {
  nameActual: 'الإنجليزية (الولايات المتحدة)',
  daysOfWeek: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  daysOfWeekFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  monthsFull: [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
  ],
  monthsShort: ['ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس', 'سبت', 'أكت', 'نوف', 'ديس'],
  today: 'اليوم',
  clear: 'مسح',
  close: 'إغلاق',
  firstDay: 6,
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  labelMonthNext: 'الشهر القادم',
  labelMonthPrev: 'الشهر السابق',
  labelMonthSelect: 'اختر شهرًا',
  labelYearSelect: 'اختر عامًا',
  selectMonths: true,
  selectYears: true,
  min: true,
  max: true
};

const locale$5 = {
  nameActual: 'الإنجليزية (الولايات المتحدة)',
  daysOfWeek: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  daysOfWeekFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  monthsFull: [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
  ],
  monthsShort: ['ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس', 'سبت', 'أكت', 'نوف', 'ديس'],
  today: 'اليوم',
  clear: 'مسح',
  close: 'إغلاق',
  firstDay: 6,
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  labelMonthNext: 'الشهر القادم',
  labelMonthPrev: 'الشهر السابق',
  labelMonthSelect: 'اختر شهرًا',
  labelYearSelect: 'اختر عامًا',
  selectMonths: true,
  selectYears: true,
  min: true,
  max: true
};

const locale$4 = {
  nameActual: 'الإنجليزية (الولايات المتحدة)',
  daysOfWeek: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  daysOfWeekFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  monthsFull: [
    'يناير',
    'فبراير',
    'مارس',
    'أفريل',
    'ماي',
    'جوان',
    'جويلية',
    'أوت',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
  ],
  monthsShort: ['ينا', 'فبر', 'مار', 'أفر', 'ماي', 'جوا', 'جوي', 'أوت', 'سبت', 'أكت', 'نوف', 'ديس'],
  today: 'اليوم',
  clear: 'مسح',
  close: 'إغلاق',
  firstDay: 6,
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  labelMonthNext: 'الشهر القادم',
  labelMonthPrev: 'الشهر السابق',
  labelMonthSelect: 'اختر شهرًا',
  labelYearSelect: 'اختر عامًا',
  selectMonths: true,
  selectYears: true,
  min: true,
  max: true
};

const locale$3 = {
  nameActual: 'الإنجليزية (الولايات المتحدة)',
  daysOfWeek: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  daysOfWeekFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  monthsFull: [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
  ],
  monthsShort: ['ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس', 'سبت', 'أكت', 'نوف', 'ديس'],
  today: 'اليوم',
  clear: 'مسح',
  close: 'إغلاق',
  firstDay: 6,
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  labelMonthNext: 'الشهر القادم',
  labelMonthPrev: 'الشهر السابق',
  labelMonthSelect: 'اختر شهرًا',
  labelYearSelect: 'اختر عامًا',
  selectMonths: true,
  selectYears: true,
  min: true,
  max: true
};

const locale$2 = {
  nameActual: 'الإنجليزية (الولايات المتحدة)',
  daysOfWeek: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  daysOfWeekFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  monthsFull: [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
  ],
  monthsShort: ['ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس', 'سبت', 'أكت', 'نوف', 'ديس'],
  today: 'اليوم',
  clear: 'مسح',
  close: 'إغلاق',
  firstDay: 0,
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  labelMonthNext: 'الشهر القادم',
  labelMonthPrev: 'الشهر السابق',
  labelMonthSelect: 'اختر شهرًا',
  labelYearSelect: 'اختر عامًا',
  selectMonths: true,
  selectYears: true,
  min: true,
  max: true
};

const locale$1 = {
  nameActual: 'العربية (إسرائيل)',
  daysOfWeek: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  daysOfWeekFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  monthsFull: [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
  ],
  monthsShort: ['ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس', 'سبت', 'أكت', 'نوف', 'ديس'],
  today: 'اليوم',
  clear: 'مسح',
  close: 'إغلاق',
  firstDay: 0,
  format: 'dd/mm/yyyy',
  formatSubmit: 'dd/mm/yyyy',
  labelMonthNext: 'الشهر التالي',
  labelMonthPrev: 'الشهر السابق',
  labelMonthSelect: 'اختر شهرًا',
  labelYearSelect: 'اختر عامًا',
  selectMonths: true,
  selectYears: true,
  min: true,
  max: true
};

const locale = {
  'en-US': {
    name: 'English (United States)',
    ...locale$b
  },
  'af-ZA': {
    name: 'Afrikaans (South Africa)',
    ...locale$a
  },
  'sq-AL': {
    name: 'Albanian (Albania)',
    ...locale$9
  },
  'am-ET': {
    name: 'Amharic (Ethiopia)',
    ...locale$8
  },
  'ar-AE': {
    name: 'Arabic (United Arab Emirates)',
    ...locale$7
  },
  'ar-BH': {
    name: 'Arabic (Bahrain)',
    ...locale$6
  },
  'ar-DJ': {
    name: 'Arabic (Djibouti)',
    ...locale$5
  },
  'ar-DZ': {
    name: 'Arabic (Algeria)',
    ...locale$4
  },
  'ar-EG': {
    name: 'Arabic (Egypt)',
    ...locale$3
  },
  'ar-ER': {
    name: 'Arabic (Eritrea)',
    ...locale$2
  },
  'ar-IL': {
    name: 'Arabic (Israel)',
    ...locale$1
  },

};

/**
 * Generates an object representing a calendar year with the number of days and a list of days for each month.
 *
 * @param {number} year - The year for which to generate the calendar (e.g. 2023).
 * @returns {object} An object representing a calendar year with the number of days and a list of days for each month.
 * @throws {object} An error object with a message if the year is not a valid year between 1900 and 2100.
 */
const getCalendarYear = (year, locale$1 = undefined) => {  
  const preferredLocale = locale$1 || 'en-US';

  if (!isValidYear(year)) {
    return {
      error: {
        body: 'The argument passed to `calendar(\'YYYY\')` must be a valid year between 1900 and 2100. You passed ' + year + '.',
      },
    };
  }

  return locale[preferredLocale].monthsFull.reduceRight((collector, current) => ({
    [current.toLowerCase()]: {
      count: getDaysInMonth(year, locale[preferredLocale].monthsFull.indexOf(current) + 1),
      collection: listDaysInMonth(year, locale[preferredLocale].monthsFull.indexOf(current) + 1)
    },
    ...collector
  }), {});
};

export { formatDate, getCalendarYear, getDaysInMonth, isValidDay, isValidMonth, isValidYear, listDaysInMonth, locale };
