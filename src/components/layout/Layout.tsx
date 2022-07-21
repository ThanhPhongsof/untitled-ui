import Header from "./Header";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default Layout;
