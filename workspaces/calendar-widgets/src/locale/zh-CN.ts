import {Locale} from './types';

export const locale: Locale = {
  locale: '英语 (美国)',
  daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
  daysOfWeekFull: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  monthsFull: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  today: '今天',
  clear: '清除',
  close: '关闭',
  firstDay: 0,
  labelMonthNext: '下一个月',
  labelMonthPrev: '上一个月',
  labelMonthSelect: '选择一个月份',
  labelYearSelect: '选择一个年份',
  errorMonth: '无效的月份。月份必须在1和12之间。',
  errorYear: '无效的年份。年份必须在1900和2100之间。',
  errorDay: '无效的日期。日期必须在1和31之间。',
  errorLocale: '无效的语言环境。语言环境必须是一个字符串。例如："en-US"。',
  errorOptions: '无效的选项。选项必须是一个对象。请参阅https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString以获取更多信息。'
};
