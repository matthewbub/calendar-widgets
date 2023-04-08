const { months: enMonths } = require('./en');
const { months: esMonths } = require('./es');

const locale = {
  en: {
    months: enMonths
  },
  es: {
    months: esMonths
  }
};

module.exports = { locale };