---
title: isValidYear
slug: /helpers/isValidYear
---

# `isValidYear`

The `isValidYear` function determines whether a given year is a valid year between 1900 and 2100.

## Syntax

```ts
import {isValidYear} from 'calendar-widgets';

isValidYear(year: number);
```

## Parameters

The function takes the following parameter:

- `year` - Required. The year to validate, between 1900 and 2100.

## Return Value

The function returns a boolean value. Returns true if the year parameter is a valid year between 1900 and 2100, false otherwise.

## Usage Example

```js
import { isValidYear } from 'calendar-widgets';

const isValid = isValidYear(2023);
console.log(isValid); // Output: true
```