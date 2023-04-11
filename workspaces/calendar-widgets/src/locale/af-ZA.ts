import {Locale} from './types';

export const locale: Locale = {
  locale: 'Afrikaans (Suid-Afrika)',
  daysOfWeek: ['So', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Sa'],
  daysOfWeekFull: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'],
  monthsFull: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'],
  monthsShort: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
  today: 'Vandag',
  clear: 'Skoon',
  close: 'Maak toe',
  firstDay: 0,
  labelMonthNext: 'Volgende maand',
  labelMonthPrev: 'Vorige maand',
  labelMonthSelect: 'Kies \'n maand',
  labelYearSelect: 'Kies \'n jaar',
  errorMonth: 'Ongeldige maand. Maand moet tussen 1 en 12 wees.',
  errorYear: 'Ongeldige jaar. Jaar moet tussen 1900 en 2100 wees.',
  errorDay: 'Ongeldige dag. Dag moet tussen 1 en 31 wees.',
  errorLocale: 'Ongeldige taal. Die taal moet \'n string wees. Byvoorbeeld: "af-ZA".',
  errorOptions: 'Ongeldige opsies. Die opsies moet \'n voorwerp wees. Kyk hier https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString vir meer inligting.'
};
