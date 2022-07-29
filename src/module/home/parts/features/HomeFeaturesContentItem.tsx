import React from "react";
import { FeaturesModel } from "./HomeFeaturesList";

type HomeFeaturesContentItemProps = {
  item: FeaturesModel;
};

const HomeFeaturesContentItem = ({ item }: HomeFeaturesContentItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-primary-600 bg-primary-100 rounded-[28px] p-3 mb-5">
        {item.icon}
      </span>
      <h3 className="font-medium text-xl text-gray-900 whitespace-nowrap mb-2">
        {item.heading}
      </h3>
      <p className="text-base text-gray-500">{item.desc}</p>
    </div>
  );
};

export default HomeFeaturesContentItem;
