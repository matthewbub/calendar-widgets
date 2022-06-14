# Heading

```jsx
import {Heading} from './lib/components';

export const Example = () => (
  <Heading root={'h1'} size={'text-lg lg:text-xl'}>
    {'Hello, World!'}
  </Heading>
);
```

## Props
- `root` - accepts a string value of `'h1' | 'h2' | 'h3'` and fall's back to `'h1'` if no value is provided.
- `size` - accepts a string value TailwindCSS style classnames. Intended to override the `font-size`. 
- `className` - accepts a string of classNames to be append at the end of what is default.
- `children` - accepts a string or other valid JSX elements.
- `...rest` - accepts misc args as needed