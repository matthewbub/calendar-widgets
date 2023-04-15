---
title: getDaysInMonth
slug: /helpers/getDaysInMonth
---

# `getDaysInMonth`

The getDaysInMonth function calculates the number of days in a given month and year.

## Syntax

```ts
import {getDaysInMonth} from 'calendar-widgets';

getDaysInMonth(year: number, month: number);
```

## Parameters

The function takes the following parameters:

- `year` - Required. An integer representing the year for which to calculate the number of days, between 1900 and 2100.
- `month` - Required. An integer representing the month for which to calculate the number of days, between 1 and 12.

## Return Value

The function returns an integer representing the number of days in the specified month and year.

## Errors
The function throws an error if the year parameter is not a valid year between 1900 and 2100, or if the month parameter is not a valid month between 1 and 12.

## Usage Example

```js
import { getDaysInMonth } from 'calendar-widgets';

const daysInFebruary = getDaysInMonth(2023, 2);
console.log(daysInFebruary); // Output: 28
```