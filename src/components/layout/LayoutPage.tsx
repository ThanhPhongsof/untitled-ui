import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "utils/classNames";

declare namespace JSXs {
  interface IntrinsicElements {
    DetailHTML: DetailedHTMLProps<
      HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >;
  }
}

type LayoutPageProps = {
  className?: string;
  // children: JSX.Element[] | JSX.Element;
  children: any;
};

const LayoutPage = ({ className = "", children }: LayoutPageProps) => {
  return (
    <div
      className={classNames(
        "w-full my-0 py-0 px-5 text-center mb-16 md:mb-24",
        className
      )}
    >
      {children}
    </div>
  );
};

export default LayoutPage;
