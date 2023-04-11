import {Locale} from './types';

export const locale: Locale = {
  locale: 'الإنجليزية (الولايات المتحدة)',
  daysOfWeek: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  daysOfWeekFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  monthsFull: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  monthsShort: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  today: 'اليوم',
  clear: 'مسح',
  close: 'إغلاق',
  firstDay: 0,
  labelMonthNext: 'الشهر القادم',
  labelMonthPrev: 'الشهر السابق',
  labelMonthSelect: 'اختر شهراً',
  labelYearSelect: 'اختر عاماً',
  errorMonth: 'شهر غير صالح. يجب أن يكون الشهر بين 1 و 12.',
  errorYear: 'عام غير صالح. يجب أن يكون العام بين 1900 و 2100.',
  errorDay: 'يوم غير صالح. يجب أن يكون اليوم بين 1 و 31.',
  errorLocale: 'لغة غير صالحة. يجب أن تكون اللغة سلسلة نصية. على سبيل المثال: "en-US".',
  errorOptions: 'خيارات غير صالحة. يجب أن تكون الخيارات كائنًا. انظر https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString للمزيد من المعلومات.'
};
