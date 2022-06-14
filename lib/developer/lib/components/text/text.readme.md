# Text

```jsx
import {Text} from './lib/components';

export const Example = () => (
  <Text root={'span'} size={'text-lg lg:text-xl'}>
    {'Hello, World!'}
  </Text>
);
```

## Props
- `root` - accepts a string value of `'span' | 'p'` and fall's back to `'p'` if no value is provided.
- `size` - accepts a string value TailwindCSS style classnames. Intended to override the `font-size`. 
- `className` - accepts a string of classNames to be append at the end of what is default.
- `children` - accepts a string or other valid JSX elements.
- `...rest` - accepts misc args as needed