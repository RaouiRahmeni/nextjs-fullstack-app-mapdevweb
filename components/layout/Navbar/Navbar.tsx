import { useRouter } from 'next/router';
import { AiOutlineCode } from 'react-icons/ai';
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-amber-400">
      <div className="inline-flex p-2">
        <AiOutlineCode className="text-4xl rounded cursor-pointer block float-left mr-2 duration-500" />
        <h1
          className={` origin-left font-medium text-2xl duration-300 ${
            !open && 'scale-0'
          }`}
        >
          code path academy{' '}
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
