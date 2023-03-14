import Register from 'components/auth/Register';
import { useRouter } from 'next/router';
import { SiCodecademy } from 'react-icons/si';
import { BsArrowLeftShort } from 'react-icons/bs';
import { FC, ReactNode, useState } from 'react';
import Login from 'components/auth/Login';

const Navbar = ({ open, setOpen }) => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="bg-amber-400">
      <div className="flex justify-between items-center p-2">
        <div className="items-center flex">
          <SiCodecademy className="text-4xl rounded cursor-pointer block float-left mr-2 duration-500" />
          <h1 className="origin-left flex">code path academy </h1>
          <BsArrowLeftShort
            className={`text-black-800 text-3xl rounded-full  top-9 border border-30 border-amber-400 cursor-pointer ${
              !open && 'rotate-180'
            } `}
            size="35"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mr-5">{/* <Dropdown /> */}</div>
        <div>
          <button
            className="hover:text-purple-600 text-gray-800 font-bold py-2 px-4 rounded-full"
            onClick={() => setShowLoginModal(true)}
          >
            Log In
          </button>
          <button
            className=" bg-gray-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setShowModal(true)}
          >
            Get started
          </button>
        </div>
      </div>
      <Register
        showModal={showModal}
        setShowLoginModal={setShowLoginModal}
        setShowModal={setShowModal}
      />
      <Login
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Navbar;
