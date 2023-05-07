const sidebars = {
  docs: [
    'introduction',
    {
      type: 'doc',
      label: 'Calendar',
      id: 'calendar',
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
    'code-of-conduct',
  ],
};

module.exports = sidebars;
