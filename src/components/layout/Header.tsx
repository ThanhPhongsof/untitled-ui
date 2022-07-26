import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";
import LayoutPage from "./LayoutPage";

const menuLink = [
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
  return (
    <LayoutPage>
      <div className="flex items-center mt-6 mb-[96px]">
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
        <ul className="flex items-start flex-row gap-x-5 ml-10 font-normal list-none text-gray-500 text-base leading-6">
          {menuLink?.map((item) => (
            <li className="" key={item.title}>
              <Link href={item.url} className="">
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex ml-auto">
          <Button type="button" className="text-white bg-primary-600">
            Sign In
          </Button>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Header;
