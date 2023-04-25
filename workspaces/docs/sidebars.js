/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Components',
      items: ['Components/Calendar'],
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
    'road-map',
    'code-of-conduct',
  ],
};

module.exports = sidebars;
