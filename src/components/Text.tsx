type RGB = 'red' | 'green' | 'blue';
interface IProps<C extends React.ElementType> {
  as?: C;
  color?: RGB | 'black';
};

// Create a robust polymorphic component with its own props
// Omit an element if its available by default and use default
type Props<C extends React.ElementType> = React.PropsWithChildren<
  IProps<C> & Omit<React.ComponentPropsWithoutRef<C>, keyof IProps<C>>
>;

const Text = <C extends React.ElementType = "span">({
  as,
  children,
  ...restProps
}: Props<C>) => {
  const Component = as || "span";
  return <Component {...restProps}>{children}</Component>;
};

export default Text;
