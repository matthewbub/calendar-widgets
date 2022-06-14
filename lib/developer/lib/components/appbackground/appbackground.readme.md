# AppBackground

Used as the primary app background.

```jsx
import {AppBackground} from './lib/components';

export const Example = () => (
  <AppBackground>
    <h1>{'Hello, World!'}</h1>
  </AppBackground>
);
```

## Props

- `children` - accepts a string or other valid JSX elements.
- `...rest` - accepts misc args as needed