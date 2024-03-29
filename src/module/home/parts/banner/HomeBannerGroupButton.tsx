import { Button } from "components/button";
import React from "react";

const HomeBannerGroupButton = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-start md:justify-center gap-y-4 md:gap-y-0 md:gap-x-3 w-full">
      <Button className="border border-gray-300 flex items-center gap-x-3 rounded-lg text-gray-700 w-full md:w-10 h-10 md:min-h-[56px] md:min-w-[130px]">
        <span>
          <svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
              stroke="#344054"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 7L15 11L9 15V7Z"
              stroke="#344054"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>Demo</span>
      </Button>
      <Button className="rounded-lg text-white bg-primary-600 w-full md:w-10 h-10 md:min-h-[56px] md:min-w-[130px]">
        Sign In
      </Button>
    </div>
  );
};

export default HomeBannerGroupButton;
