# calendar-widgets

Easy-to-use, _slightly_ un-styled React-based components that provide the out-of-the-box behavior you might see in popular Calendar applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/9mbs/calendar-widgets/blob/v0.0.13/LICENSE)
![Current bundle size: 8.01 kB](https://img.shields.io/badge/Bundle_Size-8.01_kB-blue.svg)


- [Documentation](https://calendar-widgets.com)
- [Changelog](https://calendar-widgets.com/changelog)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Local Setup](#local-setup)
- [Changelog](#changelog)

## Getting Started

> ⚠️ Under active development ⚠️

## Contributing

We'd be appreciative of bug reports/ fixes, and would gladly accept new proposals. If you'd like to contribute to an existing issue, kindly communicate through the designated ticket to avoid overlapping efforts. Check out the [Open Issues](https://github.com/9mbs/calendar/issues?q=is%3Aissue+is%3Aopen) and our [Contributing Guide](./CONTRIBUTING.md) for more information.

If you're interested in maintainer-level stuff, we're using an agile workflow via GitHub Projects. Here's a [link to our project.](https://github.com/users/9mbs/projects/14/views/5).

## Local Setup 

This project requires [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/) to be installed. If needed, you can install them from Node.js website and pnpm website.

### Contributors Setup

1. Fork this repository
2. Clone the forked repository to your local machine, or open a new Code Space 
3. Checkout to a clean branch. e.g `git checkout feature/addSomeCode` (Please be more descriptive)
4. Install the dependencies via `pnpm install`
5. You're all set up. Run `pnpm run build` to run the production build and ensure everything is working. If not, please open an issue in https://github.com/9mbs/calendar-widgets/issues 🙂

**Scripts**

- `pnpm run build` Run the build that we push to NPM
- `pnpm run dev` Run the dev build that does not minify the code 
- `pnpm run storybook` Run Storybook for local development
- `pnpm run lint` Run ESLint to catch errors
- `pnpm run lint:fix` Run ESLint to catch auto-fix errors
