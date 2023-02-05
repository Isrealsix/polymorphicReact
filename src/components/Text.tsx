type IProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<C>;

const Text = <C extends React.ElementType = 'span'>({
  as,
  children,
  ...restProps
}: IProps<C>) => {
  const Component = as || 'span';
  return <Component {...restProps}>{children}</Component>;
};

export default Text;
