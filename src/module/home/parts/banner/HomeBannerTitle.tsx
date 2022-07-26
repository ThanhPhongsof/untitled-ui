import { IconArrow } from "components/icon";
import React from "react";

type HomeBannerTitleProps = {
  title: string;
  titleLight: string;
};

const HomeBannerTitle = ({ titleLight, title }: HomeBannerTitleProps) => {
  return (
    <span className=" py-1 pl-[10px] pr-1 flex items-center justify-between gap-2 md:gap-3 rounded-2xl bg-primary-50 text-primary-700 mb-4 md:mb-5 text-xs md:text-sm max-w-[307px] md:max-w-[355px] mx-auto">
      <span className="bg-white rounded-2xl p-[2px] md:p-1">{titleLight}</span>{" "}
      {title}
      <IconArrow></IconArrow>
    </span>
  );
};

export default HomeBannerTitle;
