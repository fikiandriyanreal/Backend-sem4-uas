import SideBars from "./SideBars";

const Layout = ({ children }) => {
  return (
    <>
      <SideBars> {children} </SideBars>
    </>
  );
};

export default Layout;
