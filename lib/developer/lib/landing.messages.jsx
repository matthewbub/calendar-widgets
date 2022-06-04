export const landingMessages = {
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
  outputPreviewAPI: (year) => `https://calendar.whilethiscompiles.com/api/calendar?year=${year}`,
}