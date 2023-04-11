import {Locale} from './types';

export const locale: Locale = {
  locale: 'Español (España)',
  daysOfWeek: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  daysOfWeekFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  today: 'Hoy',
  clear: 'Limpiar',
  close: 'Cerrar',
  firstDay: 0,
  labelMonthNext: 'Próximo mes',
  labelMonthPrev: 'Mes anterior',
  labelMonthSelect: 'Seleccionar un mes',
  labelYearSelect: 'Seleccionar un año',
  errorMonth: 'Mes inválido. El mes debe estar entre 1 y 12.',
  errorYear: 'Año inválido. El año debe estar entre 1900 y 2100.',
  errorDay: 'Día inválido. El día debe estar entre 1 y 31.',
  errorLocale: 'Configuración regional inválida. La configuración regional debe ser una cadena. Por ejemplo: "es-ES".',
  errorOptions: 'Opciones inválidas. Las opciones deben ser un objeto. Consulte https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString para obtener más información.'
};
