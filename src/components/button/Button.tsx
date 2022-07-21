import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  children: string | JSX.Element;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  // onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({ type, className, children, isLoading }: ButtonProps) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );

  return (
    <button
      type={type}
      className={`p-4 text-base font-semibold flex items-center justify-center rounded-lg min-h-[56px] ${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
    >
      {child}
    </button>
  );
};

export default Button;
