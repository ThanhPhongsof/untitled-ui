import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoDefaut = () => {
  return (
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
        <span className="text-gray-900 font-semibold">Untitled UI</span>
      </a>
    </Link>
  );
};

export default LogoDefaut;
