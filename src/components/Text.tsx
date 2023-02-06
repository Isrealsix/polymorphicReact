type RGB = "red" | "green" | "blue";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

// type TextProps<C extends React.ElementType> = AsProp<C> & {
//   color?: RGB | "black";
// };

// Create a robust polymorphic component with its own props
// Omit an element if its available by default and use default
// type Props<C extends React.ElementType> = React.PropsWithChildren<
//   TextProps<C>
// > &
//   Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

  type TextProps = {
    color?: RGB | "black";
  }
const Text = <C extends React.ElementType = "span">({
  as,
  style,
  children,
  ...restProps
}: PolymorphicComponentProps<C, TextProps>) => {
  const Component = as || "span";
  return <Component {...restProps}>{children}</Component>;
};

export default Text;
