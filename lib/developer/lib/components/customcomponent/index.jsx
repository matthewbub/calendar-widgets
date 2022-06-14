const CustomComponent = ({root, children, className = '', ...rest}) => {
  const rootElement = (root || 'div');
  const Root = rootElement;

  return (
    <Root className={className} {...rest}>
      {children}
    </Root>
  )
}

export default CustomComponent;
