---
title: isValidDay
slug: /helpers/isValidDay
---

# `isValidDay`

The `isValidDay` function determines whether a given day is a valid day between 1 and 31.

## Syntax 

```ts
import {isValidDay} from 'calendar-widgets';

isValidDay(day: number);
```

## Parameters

The function takes the following parameter:

- `day` - Required. The day to validate, between 1 and 31.

## Return Value

The function returns a boolean value. Returns true if the day parameter is a valid day between 1 and 31, false otherwise.

## Usage Example

```js
import { isValidDay } from 'calendar-widgets';

const isValid = isValidDay(15);
console.log(isValid); // Output: true
```