import { PricingFAQContent } from "services/models/indes";

type PricingFAQContentItemProps = {
  item: PricingFAQContent;
};

const PricingFAQContentItem = ({ item }: PricingFAQContentItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <span className="w-12 h-12 p-3 bg-primary-100 text-purple-600 rounded-full flex justify-center items-center">
        {item.icon}
      </span>
      <div className="flex-1 text-left">
        <h4 className="text-gray-900 font-medium text-xl mb-2">
          {item.heading}
        </h4>
        <p className="text-gray-500">{item.desc}</p>
      </div>
    </div>
  );
};

export default PricingFAQContentItem;
