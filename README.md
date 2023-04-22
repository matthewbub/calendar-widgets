# calendar-widgets

Easy-to-use, un-styled React components that provide the out-of-the-box behavior you might see in popular Calendar applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Current bundle size: 32.32 kB](https://img.shields.io/badge/Bundle_Size-32.32_kB-green.svg)

Website: [http://www.calendar-widgets.com/](http://www.calendar-widgets.com/)

## On this page

- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Local Setup](#local-setup)
- [Changelog](#changelog)

## Getting Started

**⚠️ Under active development ⚠️**

To begin, install the [`calendar-widgets`](https://www.npmjs.com/package/calendar-widgets) package from the NPM Registry. **You'll also need to ensure you have React setup in your development environment.**

```shell
# npm
npm install calendar-widgets

# yarn
yarn add calendar-widgets

# pnpm
pnpm install calendar-widgets
```

### Calendar
Just a simple calendar. You can style the the day component as you'd prefer. 

```jsx
import {Calendar} from 'calendar-widgets';

// ...
<Calendar 
  year={2021}
  month={1}
  day={1}
  dayComponent={({ date }) => (
    <div>
      {date.getDate()}
    </div>
  )}}
/>
```

### DraggableDay
The DraggableDay component is a React-based calendar interface that allows users to drag and drop events between different days in the calendar. It uses native HTML5 drag and drop functionality and custom React event handlers for a smooth and responsive user experience.

```jsx
import {DraggableDay} from 'calendar-widgets';

<DraggableDay
  startRow={"7am"}
  endRow={"5pm"}
  initialDraggables={[
    {
      id: 1,
      position: { x: 0, y: 0 },
      height: 1,
    },
    {
      id: 2,
      position: { x: 0, y: 50 },
      height: 1,
    },
  ]}
/>
```

## Context

**Setup**

Before you're able to use the hooks within the `useCalendarWidgetsContext` api, you'll want to wrap your app in the `CalendarWidgetsProvider` context provider. 

_Parent.jsx_
```jsx
import {CalendarWidgetsProvider} from 'calendar-widgets';
import MyCustomCalendarComponent from './MyCustomCalendarComponent';

// ...
<CalendarWidgetsProvider>
  <MyCustomCalendarComponent />
</CalendarWidgetsProvider>
```

_MyCustomCalendarComponent.jsx_
```jsx
import {useCalendarWidgetsContext} from 'calendar-widgets'

//..
const {draggableDay, setDraggableDay} = useCalendarWidgetsContext();
```

If this isn't setup properly, you'll see this error message:

```sh
useCalendarWidgetsContext must be used within a CalendarWidgetsProvider
```


### useCalendarWidgetsContext

Under active development

## Contributing

I'd be appreciative of bug reports/ fixes, and I'd gladly accept new proposals. If you'd like to contribute to an existing issue, kindly communicate through the designated ticket to avoid overlapping efforts. Check out the [Open Issues](https://github.com/9mbs/calendar/issues?q=is%3Aissue+is%3Aopen) and our [Contributing Guide](./CONTRIBUTING.md) for more information.

## Local Setup 

This project requires [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/) to be installed. If needed, you can install them from Node.js website and pnpm website.

### Contributors Setup

1. Fork this repository
2. Clone the forked repository to your local machine, or open a new Code Space 
3. Checkout to a clean branch. e.g `git checkout feature/addSomeCode` (Please be more descriptive)
4. Install the dependencies via `pnpm install`
5. You're all set up. Run `pnpm run build` to run the production build and ensure everything is working. If not, please open an issue in https://github.com/9mbs/calendar-widgets/issues 🙂

**Scripts**

- Run the build that we push to NPM `pnpm run build` 
- Run the dev build that does not minify the code `pnpm run dev`
- Run Storybook for local development `pnpm run storybook`
- Run ESLint to catch errors `pnpm run lint`
- Run ESLint to catch auto-fix errors `pnpm run lint:fix`

## Changelog

We're actively maintaining a changelog at https://calendar-widgets.com/changelog 