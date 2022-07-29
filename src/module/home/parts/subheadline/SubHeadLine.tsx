import React from "react";

type SubHeadLineProps = {
  badge?: string;
  heading: string;
  children: string;
};

const SubHeadLine = ({ badge = "", heading, children }: SubHeadLineProps) => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 md:mt-24 mb-12 md:mb-16 mx-4 md:mx-28 lg:mx-[224px] text-sm font-medium">
      {badge.length > 0 && (
        <span className="text-primary-700 bg-primary-100 px-[10px] py-[2px] md:px-3 md:py-1 mb-4 md:mb-3 rounded-2xl">
          {badge}
        </span>
      )}
      <h2 className="font-semibold text-3xl md:text-4xl text-gray-900 mb-4 lg:mb-[20px] lg:whitespace-nowrap">
        {heading}
      </h2>
      <p className="text-lg md:text-xl text-gray-500">{children}</p>
    </div>
  );
};

export default SubHeadLine;
