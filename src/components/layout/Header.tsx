import SideBar from "components/sidebar/SideBar";
import Link from "next/link";
import LayoutPage from "./LayoutPage";
import Image from "next/image";
import { useClickOutSide } from "services/hooks";
import { IconMenu } from "components/icon";
import { Button } from "../button";
import { LogoDefaut } from "components/logo";

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
    <header>
      <LayoutPage>
        <div className="flex justify-center items-center mt-6 mb-[96px]">
          <LogoDefaut></LogoDefaut>
          <button
            className="cursor-pointer block ml-auto md:ml-0 md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="pointer-events-none">
              <IconMenu></IconMenu>
            </span>
          </button>
          <SideBar
            menuLinks={menuLinks}
            showMenu={showMenu}
            ref={nodeRef}
          ></SideBar>
          <div className="hidden md:flex ml-auto">
            <Button type="button" className="text-white bg-primary-600">
              Sign In
            </Button>
          </div>
        </div>
      </LayoutPage>
    </header>
  );
};

export default Header;
