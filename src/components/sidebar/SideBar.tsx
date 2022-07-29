/* eslint-disable react/display-name */
import Link from "next/link";
import React from "react";
import classNames from "utils/classNames";

interface MenuItem {
  url: string;
  title: string;
}

type SideBarProps = {
  menuLinks: Array<MenuItem>;
  showMenu: boolean;
};

const SideBar = React.forwardRef(
  ({ menuLinks, showMenu }: SideBarProps, ref: any) => {
    return (
      <ul
        id="sidebar-menu"
        className={classNames(
          "hidden lg:flex flex-col lg:flex-row items-start lg:gap-x-5 lg:ml-10 font-normal list-none text-base leading-6"
        )}
        ref={ref}
      >
        {menuLinks?.map((item) => (
          <li
            className={classNames(
              "hover:text-white lg:hover:text-primary-500",
              showMenu
                ? " hover:bg-primary-500 hover:bg-opacity-10 mb-3 w-full p-4 rounded-md"
                : ""
            )}
            key={item.title}
          >
            <Link href={item.url} className="">
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
);

export default SideBar;
