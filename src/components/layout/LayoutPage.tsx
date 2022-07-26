import React from "react";
import classNames from "utils/classNames";

type LayoutPageProps = {
  className?: string;
  children: JSX.Element[] | JSX.Element;
};

const LayoutPage = ({ className = "", children }: LayoutPageProps) => {
  return (
    <div
      className={classNames(
        "w-full my-0 mx-auto py-0 px-5 text-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default LayoutPage;
