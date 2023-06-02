const sidebars = {
  docs: [
    'introduction',
    {
      type: 'doc',
      label: 'Calendar',
      id: 'calendar',
    },
    {
      type: 'doc',
      label: 'MonthSelector',
      id: 'month-selector',
    },
    {
      type: 'category',
      label: 'Helpers',
      items: ['Helpers/listCalendarYear', 'Helpers/listDaysInMonths'],
    },
    {
      type: 'category',
      label: 'Utilities',
      items: ['Utilities/formatDate', 'Utilities/getDaysInMonth', 'Utilities/isValidDay', 'Utilities/isValidMonth', 'Utilities/isValidYear'],
    },

  ],
};

module.exports = sidebars;
