import { Anchor } from "@mantine/core";

export const heroMsgs = {
  title: 'A Free & Open Source Calendar',
  desc: () => (
    <>
      {'A simple API intended to return a list of calendar dates for a given year. Built with '}
      <Anchor href="https://day.js.org/" target="_blank">{'day.js'}</Anchor>
      {' & typescript.'}
    </>
  ),
  primaryBtnLabel: 'GitHub',
  primaryBtnHref: 'https://github.com/yeahmat/calendar',
  secondaryBtnLabel: 'Open Source',
  secondaryBtnHref: 'https://github.com/yeahmat/calendar/issues'
};
