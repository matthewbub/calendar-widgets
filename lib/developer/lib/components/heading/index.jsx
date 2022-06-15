import {join} from "lodash";

const Heading = ({root, children, className, ...rest}) => {
  const rootElement = (root === 'h1' ? 'h1' : root === 'h2' ? 'h2' : root === 'h3' ? 'h3' : 'h1');
  const Root = rootElement;
  const rootStyles = join([
    (className && className) /** more classNames */
  ], ' ');

  return (
    <Root className={rootStyles} {...rest}>
      {children}
    </Root>
  )
}

export default Heading;
