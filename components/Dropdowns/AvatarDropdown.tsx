import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { UrlObject } from 'url';
const AvatarDropdown = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const handleClick = (href: string | UrlObject) => {
    // e.preventDefault();
    router.push(href);
  };
  return (
    <div>
      <ul>
        <li
          className={`text-sm flex w-100 justify-start items-center gap-x-4 cursor-pointer p-2 hover:bg-amber-300 rounded-lg`}
          onClick={() => setOpen(!open)}
        >
          <span className={`text-base font-medium flex-1 duration-300 `}>
            user profile
          </span>

          <BsChevronDown className={`duration-300 ${open && 'rotate-180'}`} />
        </li>
        {open && (
          <ul className=" absolute right-0 mr-7 mt-1 bg-blue-500">
            <li className="text-sm flex justify-start gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-500 rounded-md">
              logout
            </li>
          </ul>
        )}
      </ul>
      {/* <div className="text-sm flex justify-start items-center cursor-pointer p-2 hover:bg-slate-500 rounded-lg">
        <select className="bg-gray-600 text-gray-400 appearance-none border-none inline-block py-3 pl-3 pr-8 rounded w-full">
          <option className="pt-6">GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
      </div> */}
    </div>
  );
};

export default AvatarDropdown;
