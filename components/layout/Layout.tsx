import { FC, ReactNode, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);

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
