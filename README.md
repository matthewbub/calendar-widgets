# calendar-widgets

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Current bundle size: 171.23 kB](https://img.shields.io/badge/Bundle_Size-171.23_kB-green.svg)

Working with dates sucks, working with calendars sucks even more. Here's an attempt at making things less sucky. Website: [http://www.calendar-widgets.com/](http://www.calendar-widgets.com/)

## On this page

- [Getting Started](#getting-started)
- [Helpers](#helpers)
- [Utilities](#utilities)
- [Contributing](#contributing)
- [Local Setup](#local-setup)
- [This repo](#this-repo)
- [Changelog](#changelog)

## Getting Started

**Under active development**

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

### Helpers
- [`listCalendarYear`](https://calendar-widgets.com/helpers/listCalendarYear) function
- [`listDaysInMonth`](https://calendar-widgets.com/helpers/listDaysInMonth) function
- `listLocalizedMonths` function

### Utilities
- [`formatDate`](https://calendar-widgets.com/utilities/formatDate) function
- [`getDaysInMonth`](https://calendar-widgets.com/utilities/getDaysInMonth) function
- [`isValidDay`](https://calendar-widgets.com/utilities/isValidDay) function
- [`isValidYear`](https://calendar-widgets.com/utilities/isValidYear) function
- [`isValidMonth`](https://calendar-widgets.com/utilities/isValidMonth) function

## Contributing

I'd be appreciative of bug reports/ fixes, and I'd gladly accept new proposals. 🙂 If you'd like to contribute to an existing issue, kindly communicate through the designated ticket to avoid overlapping efforts. Check out the [Open Issues](https://github.com/9mbs/calendar/issues?q=is%3Aissue+is%3Aopen) and our [Contributing Guide](./CONTRIBUTING.md) for more information.

## Local Setup 
This project requires [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/) to be installed. You can install them from Node.js website and pnpm website.

To begin, clone the repository then run the following commands:

```shell
# install root project dependencies
pnpm install 

# install dependencies in child projects
pnpm run new
```

From there, you may want to refer to the [this repo](#this-repo) section for further navigation. If you're looking to contribute to the actual `calendar-widgets` code, you'll likely want to run your build commands from the [`/workspaces/tests`](./workspaces/tests/README.md) directory to ensure nothing is breaking. 

## This repo

- [`/workspaces/calendar-widgets`](./workspaces/calendar-widgets/README.md) - NPM Package
- [`/workspaces/tests`](./workspaces/tests/README.md) - Test suites for calendar-widgets as a package
- [`/workspaces/docs`](./workspaces/docs/README.md) - Documentation

## Changelog

We're actively maintaining a changelog at https://calendar-widgets.com/changelog 🙂