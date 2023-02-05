interface IProps<C> {
  as?: C;
  children: React.ReactNode;
}

const Text = <C extends React.ElementType>({ as, children }: IProps<C>) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};

export default Text;
