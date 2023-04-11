import { Locale } from "./types";

export const locale: Locale = {
  locale: 'English (United States)',
  daysOfWeek: ['Di', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Shtu'],
  daysOfWeekFull: ['E Diel', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë'],
  monthsFull: ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'],
  monthsShort: ['Jan', 'Shk', 'Mar', 'Pri', 'Maj', 'Qer', 'Kor', 'Gus', 'Sht', 'Tet', 'Nën', 'Dhj'],
  today: 'Sot',
  clear: 'Pastro',
  close: 'Mbyll',
  firstDay: 1,
  labelMonthNext: 'Muaji tjetër',
  labelMonthPrev: 'Muaji i kaluar',
  labelMonthSelect: 'Zgjidh një muaj',
  labelYearSelect: 'Zgjidh një vit',
  errorMonth: 'Muaj i pavlefshëm. Muaji duhet të jetë midis 1 dhe 12.',
  errorYear: 'Viti i pavlefshëm. Viti duhet të jetë midis 1900 dhe 2100.',
  errorDay: 'Dita e pavlefshme. Dita duhet të jetë midis 1 dhe 31.',
  errorLocale: 'Gjuha e vendndodhjes së pavlefshme. Gjuha e vendndodhjes duhet të jetë një string. Për shembull: "sq-AL".',
  errorOptions: 'Opsionet e pavlefshme. Opsionet duhet të jenë një objekt. Shihni https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString për më shumë informacione.'
};
