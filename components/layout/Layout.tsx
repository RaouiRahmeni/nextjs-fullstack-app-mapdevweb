import { FC, ReactNode, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />
      <div className="flex">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
