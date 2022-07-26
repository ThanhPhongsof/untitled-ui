import React from "react";

type HomeBannerDescProps = { children: string };

const HomeBannerDesc = ({ children }: HomeBannerDescProps) => {
  return (
    <p className="text-lg md:text-xl text-gray-500 mx-4 md:mx-24 lg:mx-56 2xl:mx-80">
      {children}
    </p>
  );
};

export default HomeBannerDesc;
