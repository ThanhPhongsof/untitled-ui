import { Badge } from "components/badge";
import React from "react";
import classNames from "utils/classNames";

type SubHeadLineProps = {
  badge?: string;
  heading: string;
  children: string;
  type: string;
};

const SubHeadLine = ({
  badge = "",
  heading,
  children,
  type = "default",
}: SubHeadLineProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center mt-16 md:mt-24 mb-12 md:mb-16 mx-4 text-sm font-medium",
        type === "default"
          ? "items-center md:mx-28 lg:mx-[224px]"
          : "items-start text-left mx-4 md:mx-14"
      )}
    >
      {badge.length > 0 && (
        <Badge text={badge} className="md:py-1 mb-4 md:mb-3"></Badge>
      )}
      <h2 className="font-semibold text-3xl md:text-4xl text-gray-900 mb-4 lg:mb-[20px] lg:whitespace-nowrap">
        {heading}
      </h2>
      <p className="text-lg md:text-xl text-gray-500">{children}</p>
    </div>
  );
};

export default SubHeadLine;
