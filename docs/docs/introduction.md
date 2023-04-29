---
sidebar_position: 1
slug: /introduction
---

# Introduction

:::caution

This SDK is actively being worked on and improved. It's in the alpha stages of development and is not ready for public use just yet.

:::

Working with dates sucks, working with calendars sucks even more. Here's an attempt at making things less sucky. 

Calendar Widgets is an extremely light-weight React library that does not depend on 3rd party packages, instead we use native JavaScript objects [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and [`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) both of which are hardly "cutting edge". 

## Getting Started

To begin, install the [`calendar-widgets`](https://www.npmjs.com/package/calendar-widgets) package from the NPM Registry.

```shell
# npm
npm install calendar-widgets

# yarn
yarn add calendar-widgets

# pnpm
pnpm install calendar-widgets
```

Once the package is installed, you'll have access to an array of helpers and utilities that do a lot of the heavy lifting when it comes to dates and calendars. 

## Helpers
- [`listCalendarYear`](helpers/listCalendarYear) function
- [`listDaysInMonth`](helpers/listDaysInMonth) function
- `listLocalizedMonths` function

## Utilities
- [`formatDate`](utilities/formatDate) function
- [`getDaysInMonth`](utilities/getDaysInMonth) function
- [`isValidDay`](utilities/isValidDay) function
- [`isValidYear`](utilities/isValidYear) function
- [`isValidMonth`](utilities/isValidMonth) function


:::info

This document is actively being working on, more info coming soon!

:::
