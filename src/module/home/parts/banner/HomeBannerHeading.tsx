import React from "react";

type HomeBannerHeadingProps = {
  children: string;
};

const HomeBannerHeading = ({ children }: HomeBannerHeadingProps) => {
  return (
    <h1 className="mb-4 md:mb-6 mx-auto font-semibold text-4xl md:text-6xl text-gray-900 md:-tracking-wide">
      {children}
    </h1>
  );
};

export default HomeBannerHeading;
