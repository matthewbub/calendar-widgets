import {Anchor} from '@mantine/core';

export const landingMessages = {
  pageTitle: '@whilethiscompiles/calendar',
  pageDescription: () => [
    'A simple API intended to return a list of calendar dates for a given year. Built with ',
    <Anchor href="https://day.js.org/" target="_blank">{'day.js'}</Anchor>,
    ' & typescript.'
  ],
  primaryButtonLabel: 'GitHub',
  primaryButtonHref: 'https://github.com/yeahmat/calendar',
  secondaryButtonLabel: 'Open Source',
  secondaryButtonHref: 'https://github.com/yeahmat/calendar/issues',
  installHeading: 'Install',
  installFlagNPM: 'npm',
  installFlagYarn: 'yarn',
  installCommandNPM: 'npm install @whilethiscompiles/calendar',
  installCommandYarn: 'yarn add @whilethiscompiles/calendar',
  tryItOutHeading: 'Try It Out',
  yearInputLabel: 'Enter Year',
  yearInputSubLabel: 'Get a list of dates for a given year.',
  segmentedControlSdkLabel: 'SDK',
  segmentedControlSdkValue: 'sdk',
  segmentedControlApiLabel: 'REST API',
  segmentedControlApiValue: 'restapi',
  /** ignore whitespace in next value */
  outputPreviewSDK: (year) => `import {calendar} from '@whilethiscompiles/calendar';

calendar(${year})`,

}