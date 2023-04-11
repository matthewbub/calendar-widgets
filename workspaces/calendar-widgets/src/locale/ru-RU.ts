import { Locale } from "./types";

export const locale: Locale = {
  locale: 'Английский (Соединенные Штаты)',
  daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  daysOfWeekFull: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  monthsFull: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  today: 'Сегодня',
  clear: 'Очистить',
  close: 'Закрыть',
  firstDay: 0,
  labelMonthNext: 'Следующий месяц',
  labelMonthPrev: 'Предыдущий месяц',
  labelMonthSelect: 'Выберите месяц',
  labelYearSelect: 'Выберите год',
  errorMonth: 'Неверный месяц. Месяц должен быть от 1 до 12.',
  errorYear: 'Неверный год. Год должен быть от 1900 до 2100.',
  errorDay: 'Неверный день. День должен быть от 1 до 31.',
  errorLocale: 'Неверная локаль. Локаль должна быть строкой. Например: "ru-RU".',
  errorOptions: 'Неверные параметры. Параметры должны быть объектом. См. https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString для получения дополнительной информации.'
};
