/* eslint-disable react/display-name */
import Link from "next/link";
import React, { useEffect } from "react";
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
    const expandClass = "is-expand";

    useEffect(() => {
      const sideBar = document.querySelector(".header-menu");

      if (showMenu) {
        sideBar?.classList.add(expandClass);
      } else {
        sideBar?.classList.remove(expandClass);
      }
    }, [showMenu]);

    return (
      <ul className="header-menu" ref={ref}>
        {menuLinks?.map((item) => (
          <li
            className={classNames(
              "font-semibold text-gray-500 md:hover:text-primary-500 md:hover:scale-125 md:transition-transform md:duration-300"
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
