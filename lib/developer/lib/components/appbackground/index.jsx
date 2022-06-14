import {join} from "lodash";

const AppBackground = ({children, ...rest}) => {
  const Root = 'div';
  const rootStyles = join([
    // 'bg-gray-50 dark:bg-gray-800', /** bg-color */
  ], ' ');

  return (
    <Root className={rootStyles} {...rest}>
      {children}
    </Root>
  );
}

export default AppBackground;
