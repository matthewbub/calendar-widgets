<p align="center">
  <img src="./docs/static/branding-assets/CW-Logo-Medium-50x50_3@3x.png"/>
</p>

# Calendar Widgets

> Archived; this project has been archived and will no longer be actively maintained.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/9mbs/calendar-widgets/blob/v0.0.13/LICENSE)
![Current bundle size: 9.29 kB](https://img.shields.io/badge/Bundle_Size-9.29_kB-blue.svg)

Craft beautifully robust **date** components in React.

- [Documentation](https://calendar-widgets.com)
- [Changelog](https://calendar-widgets.com/changelog)
- [Getting Started](#getting-started)
- [Contributing & Bug Reports](#contributing--bug-reports)

## Getting Started

To begin, you'll want to add the `calendar-widgets` package to a new or existing React project.

```sh
# npm
npm install calendar-widgets

# yarn
yarn add calendar-widgets

# pnpm
pnpm add calendar-widgets
```

## Examples

To help you get started, take a look at this simple implementation of a Calendar. Here we're overriding the default component used to display a particular date with our custom variation.

We're also passing an array of custom dates. When the custom date's `date` aligns with the `date` in our `CustomDay` component, we'll have access to that custom date.

```jsx
import React from 'react';
import { Calendar } from 'calendar-widgets';
import 'calendar-widgets/styles/Calendar-grid.css';

/* defining an optional custom day component */
const CustomDay = ({date, customDate}) => (
  <div>
    <b>{date.getDate()}</b>
    {customDate?.name && <small>{customDate?.name}</small>}
  </div>
);

const App = () => {
  return (
    <Calendar 
      customDay={CustomDay}
      customDates={[
        {
          name: 'Lisa\'s Birthday',
          date: new Date(2023, 4, 10)
        }
        // ...
      ]}
    />
  )
};
```

## Contributing / Bug Reports

We'd be appreciative of bug reports/ fixes, and would gladly accept new proposals.

If you'd like to contribute to an existing issue, kindly communicate through the designated ticket to avoid overlapping efforts. Check out the [Open Issues](https://github.com/9mbs/calendar/issues?q=is%3Aissue+is%3Aopen) and our [Contributing Guide](./CONTRIBUTING.md) for more information.

This project requires [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/) to be installed. If needed, you can install them from Node.js website and pnpm website.

### Contributors Setup

1. Fork this repository
2. Clone the forked repository to your local machine, or open a new Code Space
3. Checkout to a clean branch. e.g `git checkout feature/addSomeCode` (Please be more descriptive)
4. Install the dependencies via `pnpm install`
5. You're all set up. Run `pnpm run build` to run the production build and ensure everything is working. If not, please open an issue in <https://github.com/9mbs/calendar-widgets/issues> 🙂

### Scripts

- `pnpm run build` Run the build that we push to NPM
- `pnpm run dev` Run the dev build that does not minify the code
- `pnpm run storybook` Run Storybook for local development
- `pnpm run lint` Run ESLint to catch errors
- `pnpm run lint:fix` Run ESLint to catch auto-fix errors

