import { Anchor, Mark } from "@mantine/core";
import { Typography } from "../reuse";

export const heroMsgs = {
  title: () => <Typography innerHTML={'<h1>A Free & Open Source <br/> Calendar-As-JSON</h1>'} />,
  desc: () => (
    <>
      {'A user friendly SDK & API that '} 
      <Mark>{'returns a list of calendar dates for a given year'}</Mark >
      {' in JSON format. Built with '}
      <Anchor href="https://day.js.org/" target="_blank">{'day.js'}</Anchor>
      {' & typescript.'}
    </>
  ),
  primaryBtnLabel: 'GitHub',
  primaryBtnHref: 'https://github.com/yeahmat/calendar',
  secondaryBtnLabel: 'Open Source',
  secondaryBtnHref: 'https://github.com/yeahmat/calendar/issues'
};
