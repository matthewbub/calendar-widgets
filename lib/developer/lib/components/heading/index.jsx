import {join} from "lodash";

const Heading = ({root, children, size, className, ...rest}) => {
  const rootElement = (root === 'h1' ? 'h1' : root === 'h2' ? 'h2' : root === 'h3' ? 'h3' : 'h1');
  const Root = rootElement;

  const rootHeadingSizes = {
    'h1': '',
    'h2': '',
    'h3': ''
  }

  const rootHeadingMarkup = {
    'h1': '#',
    'h2': '#',
    'h3': '#'
  }

  const rootStyles = join([
    // 'text-gray-900 dark:text-gray-50', /** text-color */
    // 'font-mono', /** font-family */,
    // 'font-bold', /** font-weight */
    (size || rootHeadingSizes[rootElement]), /** prefer overrides */
    (className && className) /** more classNames */
  ], ' ');

  return (
    <Root className={rootStyles} {...rest}>
      {join([rootHeadingMarkup[rootElement], children], ' ')}
    </Root>
  )
}

export default Heading;
