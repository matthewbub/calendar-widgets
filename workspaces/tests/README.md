# Calendar Widgets Tests 

This package contains test suites for the calendar-widgets package. It is imported as a relative path for local testing.

## Installation

This package requires [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/) to be installed. You can install them from Node.js website and pnpm website.

To install this package, clone the repository and run the following command:

```shell
pnpm install

# development build command
pnpm run build:tests
```

## Usage

To run the tests, use the following command:

```shell
pnpm run tests
```

This will execute the test suites using Jest.

## Scripts
This package includes the following scripts:

- `test`: Runs the test suites using Mocha.
- `build:calendar-widgets`: Changes the directory to the `calendar-widgets` package and runs the `build` script using pnpm.
- `clean`: Removes the `node_modules` directory and `pnpm-lock.yaml` file, then runs `pnpm install`.
- `build:tests`: Runs the `build:calendar-widgets`, `clean`, and `test` scripts in order. Probably the safest option to use during development of the `calendar-widgets` package.
