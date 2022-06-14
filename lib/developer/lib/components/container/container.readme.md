# Container

Used as the primary app background.

```jsx
import {Container} from './lib/components';

export const Example = () => (
  <Container>
    <h1>{'Hello, World!'}</h1>
  </Container>
);
```

## Props

- `root` - accepts a string value of `'section' | 'main' | 'div'` and fall's back to `'div'` if no value is provided.
- `children` - accepts a string or other valid JSX elements.
- `...rest` - accepts misc args as needed
