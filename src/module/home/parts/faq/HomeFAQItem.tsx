import { IconMinus, IconPlus } from "components/icon";
import React from "react";
import { useToggleValue } from "services/hooks";
import { HomeFAQModel } from "services/models/indes";
import classNames from "utils/classNames";
import HomeFAQIcon from "./HomeFAQIcon";

type HomeFAQItemProps = {
  item: HomeFAQModel;
  className: string;
};

const HomeFAQItem = ({ item, className = "" }: HomeFAQItemProps) => {
  const { value: showItem, handleToggleValue: handleShowItem } =
    useToggleValue(false);

  return (
    <li
      className={classNames(
        " flex justify-between items-start flex-1 relative before:absolute before:w-full before:h-[1px] before:bg-primary-600 before:left-0 before:right-0 before:bottom-0 before:translate-y-8 mb-8",
        className
      )}
    >
      <div className="flex flex-col gap-y-2 transition-all">
        <span className="font-medium text-lg text-gray-900">{item.title}</span>
        <p
          className={classNames(
            "text-gray-500 text-left break-all transition-all duration-300 ",
            showItem ? "block animate-slideDown" : "hidden"
          )}
        >
          {item.desc}
        </p>
      </div>
      {!showItem && (
        <HomeFAQIcon onClick={handleShowItem}>
          <IconPlus></IconPlus>
        </HomeFAQIcon>
      )}
      {showItem && (
        <HomeFAQIcon onClick={handleShowItem}>
          <IconMinus></IconMinus>
        </HomeFAQIcon>
      )}
    </li>
  );
};

export default HomeFAQItem;
