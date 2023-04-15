import { Locale } from './types';

export const locale: Locale = {
  locale: 'Arabic (United Arab Emirates)',
  daysOfWeek: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
  daysOfWeekFull: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  monthsFull: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  monthsShort: ['ينا', 'فبر', 'مار', 'أبر', 'ماي', 'يون', 'يول', 'أغس', 'سبت', 'أكت', 'نوف', 'ديس'],
  today: 'اليوم',
  clear: 'مسح',
  close: 'إغلاق',
  firstDay: 6,
  labelMonthNext: 'الشهر التالي',
  labelMonthPrev: 'الشهر السابق',
  labelMonthSelect: 'اختر شهر',
  labelYearSelect: 'اختر عام',
  errorMonth: 'شهر غير صالح. يجب أن يكون الشهر بين 1 و 12.',
  errorYear: 'عام غير صالح. يجب أن يكون العام بين 1900 و 2100.',
  errorDay: 'يوم غير صالح. يجب أن يكون اليوم بين 1 و 31.',
  errorLocale: 'اللغة غير صالحة. يجب أن تكون اللغة عبارة عن سلسلة نصية. على سبيل المثال: "ar-AE".',
  errorOptions: 'خيارات غير صالحة. يجب أن تكون الخيارات كائنًا. راجع https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString لمزيد من المعلومات.'
};
