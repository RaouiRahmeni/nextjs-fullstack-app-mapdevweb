import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
