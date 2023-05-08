---
sidebar_position: 1
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Introduction

A completely open source React component library that aims to ease the pain of Calendar and time management related development. An extremely light-weight, simplification of the calendar and time-management development experience. 

Calendar Widget does not depend on 3rd party packages beyond React and React-DOM, but those are just peer dependencies. 

## Getting Started

:::caution

This SDK is actively being worked on and improved. It's in the alpha stages of development and is not ready for public use just yet.

:::

To begin, you'll want to add the `calendar-widgets` package to a new or existing React project. 

<Tabs defaultValue="pnpm">
  <TabItem value="npm" label="npm" default>
    <CodeBlock language="sh">
      {`npm install calendar-widgets`}
    </CodeBlock>
  </TabItem>
  <TabItem value="yarn" label="yarn">
     <CodeBlock language="sh">
      {`yarn add calendar-widgets`}
    </CodeBlock>
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
     <CodeBlock language="sh">
      {`pnpm add calendar-widgets`}
    </CodeBlock>
  </TabItem>
</Tabs>

## Examples
To help you get started, take a look at this simple implementation of a Calendar. 

```jsx
import React from 'react';
import { Calendar } from 'calendar-widgets';

const App = () => {
  return <Calendar />
}
```

## Design Principles

- **Tiny learning curve.** If you're already familiar with basic React concepts such as the passing of props, you'll do great.
- **Intuitive.** Library users won't feel restricted in capability or design. 
- **Component driven architecture.** All components are designed using a component driven architecture for ease-of-maintainability.
- **No vendor lock-in.** Utilize your own state management libraries, CSS Frameworks, localization managers. We're only using React and React-DOM as peer dependencies here allowing your team to choose their preferred tools.
- **Sensible default behavior** Components do what you expect them to do, out-of-the box. 
- **Liftable.** All components, helpers and type declarations utilize JSDocs and are safe and accessible for you to use in your application. 


## Is this the right solution for me?

Our focus here is to provide library-users with the bare-bones functionality needed to develop calendar and date related interfaces. With an approach like this, there is less room for us to press our opinions on your team and more room for your team to focus on what matters - _extending the components to meet a products needs._

You could also explore comparable tools within the open source community. These libraries usually come with additional features and functionalities, though they may require a steeper learning curve.

- [FullCalendar](https://fullcalendar.io/)
- [react-big-calendar](http://jquense.github.io/react-big-calendar/)
