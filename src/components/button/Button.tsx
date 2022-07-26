import React from "react";
import classNames from "utils/classNames";

type ButtonProps = {
  type: "button" | "submit";
  children: string | JSX.Element;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  // onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({
  type,
  className = "w-10 h-10 min-h-[56px] min-w-[120px]",
  children,
  isLoading,
}: ButtonProps) => {
  const child = !!isLoading ? (
    <div className="rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );

  return (
    <button
      type={type}
      className={classNames(
        "p-4 text-base lg:text-lg font-normal flex items-center justify-center rounded-lg",
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
    >
      {child}
    </button>
  );
};

export default Button;
