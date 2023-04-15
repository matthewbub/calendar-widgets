import { Locale } from './types';

export const locale: Locale = {
  locale: 'Japanese (Japan)',
  daysOfWeek: ['日', '月', '火', '水', '木', '金', '土'],
  daysOfWeekFull: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  monthsFull: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  today: '今日',
  clear: 'クリア',
  close: '閉じる',
  firstDay: 0,
  labelMonthNext: '来月',
  labelMonthPrev: '先月',
  labelMonthSelect: '月を選択',
  labelYearSelect: '年を選択',
  errorMonth: '無効な月です。月は1〜12の間である必要があります。',
  errorYear: '無効な年です。年は1900〜2100の間である必要があります。',
  errorDay: '無効な日です。日は1〜31の間である必要があります。',
  errorLocale: '無効なロケールです。ロケールは文字列である必要があります。例："ja-JP"。',
  errorOptions: '無効なオプションです。オプションはオブジェクトである必要があります。詳細については、https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString を参照してください。'
};
