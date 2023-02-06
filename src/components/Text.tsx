import React from "react";

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
};

// Specifying component props with ref and taking only the ref elements
type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"]

type Props<C extends React.ElementType, P> = PolymorphicComponentProps<C, P>;


// Combined ref item with component props
type PolymorphicComponentPropsWithRef<C extends React.ElementType, P> = PolymorphicComponentProps<C, P> & {
  ref?: PolymorphicRef<C>
}

type TextComponent = <C extends React.ElementType>(props: PolymorphicComponentPropsWithRef<C, TextProps>) => React.ReactElement | null;

const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = "span">(
    { as, style, children, ...restProps }: Props<C, TextProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "span";
    return <Component {...restProps} ref={ref}>{children}</Component>;
  }
);

export default Text;
