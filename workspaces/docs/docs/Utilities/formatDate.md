---
title: formatDate
slug: /utilities/formatDate
---

# `formatDate` 
The `formatDate` function formats a date in a locale-specific format. Under the hood, it's basically only calling the [`Date.prototype.toLocaleDateString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) method with improved user-error handling.

## Syntax
```ts
import {formatDate} from 'calender-widgets';

formatDate(month: number, day: number, year: number, locale?: string, options?: Intl.DateTimeFormatOptions);
```

## Parameters
- `month` - Required. An integer representing the month of the date, between 1 and 12.
- `day` - Required. An integer representing the day of the date, between 1 and 31.
- `year` - Required. An integer representing the year of the date, between 1900 and 2100.
- `locale` - Optional. A string representing the locale to use when formatting the date. Defaults to the user's locale.
- `options` - Optional. An object containing additional options to pass to the toLocaleDateString method. See the [official MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) for more information.

## Return Value
The function returns a string representing the formatted & localized date.

## Errors
The function throws an error if any of the following conditions are met:

- The `month` parameter is not an integer between 1 and 12.
- The `day` parameter is not an integer between 1 and 31.
- The `year` parameter is not an integer between 1900 and 2100.
- The `locale` parameter is a string.

## Usage example

```js
import { formatDate } from 'calendar-widgets';

const formattedDate = formatDate(4, 9, 2023);
console.log(formattedDate); // Output: 04/09/2023
```
