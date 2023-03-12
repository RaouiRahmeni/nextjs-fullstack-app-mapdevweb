import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting,
} from 'react-icons/ai';
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFillImageFill,
  BsPerson,
  BsReverseLayoutTextWindowReverse,
  BsSearch,
} from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { UrlObject } from 'url';
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const router = useRouter();
  const handleClick = (href: string | UrlObject) => {
    // e.preventDefault();
    router.push(href);
  };
  const Menus = [
    { title: 'Dashboard' },
    { title: 'Pages', icon: <AiOutlineFileText /> },
    { title: 'Media', spacing: true, icon: <BsFillImageFill /> },
    {
      title: 'Projects',
      icon: <BsReverseLayoutTextWindowReverse />,
      submenu: true,
      submenuItems: [
        { title: 'submenu 1' },
        { title: 'submenu 2' },
        { title: 'submenu 3' },
      ],
    },
    { title: 'Analytics', icon: <AiOutlineBarChart /> },
    { title: 'Index', icon: <AiOutlineMail /> },
    { title: 'Profile', spacing: true, icon: <BsPerson /> },
    { title: 'Settings', icon: <AiOutlineSetting /> },
    { title: 'logout', icon: <AiOutlineLogout /> },
  ];
  return (
    <div
      className={`bg-gray-800 h-100 ${
        open ? 'w-72' : 'w-20'
      } p-5 pt-8  duration-300 `}
    >
      <BsArrowLeftShort
        className={`bg-white text-black-800 text-3xl rounded-full  top-9 border border-30 border-yellow-400 cursor-pointer ${
          !open && 'rotate-180'
        } `}
        size="35"
        onClick={() => setOpen(!open)}
      />
      <div
        className={`flex items-center rounded-md bg-gray-500 py-2 ${
          !open ? 'px-2.5' : 'px-4'
        }`}
      >
        <BsSearch
          className={`text-white text-lg block float-left cursor-pointer ${
            open && 'mr-2'
          }`}
        />
        <input
          type={'search'}
          className={`text-base bg-transparent w-100 text-white focus:outline-none ${
            !open && 'hidden'
          }`}
          placeholder="search"
        />
      </div>
      <div className="p-5 pl-0">
        <ul>
          {Menus.map((menu, i) => (
            <>
              <li
                key={i}
                className={`text-gray-300 text-sm flex items-center justify-start gap-x-4 cursor-pointer p-2 hover:bg-slate-500 rounded-md ${
                  menu.spacing ? 'mt-9' : 'mt-2'
                }`}
                onClick={() => handleClick(menu.title)}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base  font-medium flex-1 duration-300 ${
                    !open && 'scale-0'
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`duration-300 ${submenuOpen && 'rotate-180'}`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenu, i) => (
                    <li
                      className="text-gray-300 text-sm flex justify-start gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-500 rounded-md"
                      key={i}
                    >
                      {submenu.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
