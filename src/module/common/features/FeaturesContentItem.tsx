import React from "react";
import { FeaturesModel } from "services/models/indes";
import classNames from "utils/classNames";

type FeaturesContentItemProps = {
  item: FeaturesModel;
  type: string;
};

const FeaturesContentItem = ({
  item,
  type = "default",
}: FeaturesContentItemProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center",
        type === "default"
          ? "items-center"
          : "items-start text-left mx-4 lg:mx-0"
      )}
    >
      <span className="text-primary-600 bg-primary-100 rounded-[28px] p-3 mb-5">
        {item.icon}
      </span>
      <h3
        className={classNames(
          "font-medium text-xl text-gray-900 mb-2 ",
          type === "default" ? "whitespace-nowrap" : "lg:h-14 xl:h-auto"
        )}
      >
        {item.heading}
      </h3>
      <p className="text-base text-gray-500">{item.desc}</p>
    </div>
  );
};

export default FeaturesContentItem;
