import React from "react";
import classNames from "utils/classNames";

type LayoutPageVer2Props = {
  className?: string;
  // children: JSX.Element[] | JSX.Element;
  children: any;
};

const LayoutPageVer2 = ({ className = "", children }: LayoutPageVer2Props) => {
  return (
    <div
      className={classNames(
        "text-center mb-16 md:mb-24 mx-4 md:mx-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default LayoutPageVer2;
