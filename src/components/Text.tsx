type IProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<C>;

const Text = <C extends React.ElementType>({ as, children }: IProps<C>) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};

export default Text;
