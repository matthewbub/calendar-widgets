import {join} from "lodash";

const Text = ({root, children, size, className = '', ...rest}) => {
  const rootElement = (root === 'p' ? 'p' : root === 'span' ? 'span' : 'p');
  const Root = rootElement;

  const rootTextSizes = {
    'p': '',
    'span': ''
  }

  const rootStyles = join([
    // 'text-gray-800 dark:text-gray-100', /** text-color */
    // 'font-mono', /** font-family */,    
    (size || rootTextSizes[rootElement]) /** prefer overrides */,
    (className && className) /** more classNames */
  ], ' ');

  return (
    <Root className={rootStyles} {...rest}>
      {children}
    </Root>
  )
}

export default Text;
