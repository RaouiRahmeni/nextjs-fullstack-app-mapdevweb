import { useRouter } from 'next/router';
import { AiOutlineCode } from 'react-icons/ai';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-amber-400">
      <div className="flex justify-between items-center p-2">
        <div className="items-center flex">
          <AiOutlineCode className="text-4xl rounded cursor-pointer block float-left mr-2 duration-500" />
          <h1 className="origin-left flex">code path academy </h1>
        </div>
        <div className="mr-5">
          {/* <Dropdown /> */}
          {/* <Register /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
