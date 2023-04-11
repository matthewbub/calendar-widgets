import { Locale } from "./types";

export const locale: Locale = {
  locale: 'Inglês (Estados Unidos)',
  daysOfWeek: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  daysOfWeekFull: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  today: 'Hoje',
  clear: 'Limpar',
  close: 'Fechar',
  firstDay: 0,
  labelMonthNext: 'Próximo mês',
  labelMonthPrev: 'Mês anterior',
  labelMonthSelect: 'Selecione um mês',
  labelYearSelect: 'Selecione um ano',
  errorMonth: 'Mês inválido. O mês deve estar entre 1 e 12.',
  errorYear: 'Ano inválido. O ano deve estar entre 1900 e 2100.',
  errorDay: 'Dia inválido. O dia deve estar entre 1 e 31.',
  errorLocale: 'Local inválido. O local deve ser uma string. Por exemplo: "pt-BR".',
  errorOptions: 'Opções inválidas. As opções devem ser um objeto. Consulte https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString para obter mais informações.'
};
