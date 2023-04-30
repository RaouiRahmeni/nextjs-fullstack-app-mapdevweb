import classNames from 'classnames';
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
import style from './Sidebar.module.css';

const Sidebar = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div
      className={classNames(
        'bg-gray-800 h-screen',
        open ? 'w-60' : 'w-14',
        'p-2 pt-4  duration-300'
      )}
    >
      {/* <div
        className={classNames(
          'flex items-center rounded-md bg-gray-500 py-2',
          !open ? 'px-2.5' : 'px-4'
        )}
      >
        <BsSearch
          className={classNames(
            'text-white text-lg block float-left cursor-pointer',
            open ? 'mr-2' : '',
            style.link
          )}
          size={24}
          color="white"
        />
        <input
          type={'search'}
          className={classNames(
            'text-base bg-transparent w-100 text-white focus:outline-none',
            !open && 'hidden'
          )}
          placeholder="search"
        />
      </div> */}
      <div className="pl-0">
        <ul>
          {Menus.map((menu, i) => (
            <>
              <li
                key={i}
                className={classNames(
                  'text-gray-300 text-sm flex items-center justify-start gap-x-4 cursor-pointer p-2 hover:bg-slate-500 rounded-md',
                  menu.spacing ? 'mt-9' : 'mt-2'
                )}
                onClick={() => {
                  if (menu.submenu && open) {
                    setSubmenuOpen(!submenuOpen);
                  }
                  if (!menu.submenu) {
                    router.push(menu.title);
                  }
                }}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={classNames(
                    'text-base  font-medium flex-1 duration-300',
                    !open && 'scale-0'
                  )}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={classNames(
                      'duration-300',
                      submenuOpen && 'rotate-180'
                    )}
                    // onClick={() => }
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenu, i) => (
                    <li
                      className="text-gray-300 text-sm flex justify-start gap-x-4 cursor-pointer p-2 px-5 ml-5 hover:bg-slate-500 rounded-md"
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
