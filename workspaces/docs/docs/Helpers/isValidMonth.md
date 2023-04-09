---
title: isValidMonth
slug: /helpers/isValidMonth
---

# `isValidMonth`

The `isValidMonth` function determines whether a given month is a valid month between 1 and 12.

## Syntax 

```ts
import {isValidMonth} from 'calendar-widgets';

isValidMonth(month);
```

## Parameters

The function takes the following parameter:

- `month` - Required. The month to validate, between 1 and 12.

## Return value

The function returns a boolean value. Returns true if the month parameter is a valid month between 1 and 12, false otherwise.

## Usage Example

```js
import { isValidMonth } from 'calendar-widgets';

const isValid = isValidMonth(4);
console.log(isValid); // Output: true
```