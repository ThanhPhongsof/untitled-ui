import SideBar from "components/sidebar/SideBar";
import Link from "next/link";
import LayoutPage from "./LayoutPage";
import Image from "next/image";
import { useClickOutSide } from "services/hooks";
import { IconMenu } from "components/icon";
import { Button } from "../button";

const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/product",
    title: "Product",
  },
  {
    url: "/resources",
    title: "Resources",
  },
  {
    url: "/pricing",
    title: "Pricing",
  },
];

const Header = () => {
  const {
    value: showMenu,
    setValue: setShowMenu,
    nodeRef,
  } = useClickOutSide("button");

  return (
    <LayoutPage>
      <div className="flex items-center mt-6 mb-[96px] relative">
        <Link href="/">
          <a className="flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="untitled-ui"
              width={50}
              height={50}
              objectFit="cover"
              objectPosition="center"
            />
            <span>Untitled Ui</span>
          </a>
        </Link>
        <button
          id="sidebar-menu-icon"
          className="cursor-pointer block ml-auto lg:ml-0 lg:hidden"
        >
          <IconMenu></IconMenu>
        </button>
        <SideBar
          menuLinks={menuLinks}
          showMenu={showMenu}
          ref={nodeRef}
        ></SideBar>
        <div className="hidden lg:flex ml-auto">
          <Button type="button" className="text-white bg-primary-600">
            Sign In
          </Button>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Header;
