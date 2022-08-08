import { Button } from "components/button";
import { IconCheck } from "components/icon";
import { PricingCardModel } from "services/models/indes";
import PriceHeading from "./PriceHeading";
import PricingContent from "./PricingContent";

type PricingCardItemProps = {
  item: PricingCardModel;
};

const PricingCardItem = ({ item }: PricingCardItemProps) => {
  return (
    <div className="flex flex-col border border-gray-200 shadow-lg rounded-2xl overflow-hidden">
      <div className="p-6 md:p-8">
        <PriceHeading
          icon={item.icon}
          heading={item.heading}
          price={item.price}
          desc={item.desc}
        ></PriceHeading>
        <div className="flex flex-col items-start gap-4 mb-8">
          {item.contents?.map((content: string) => (
            <PricingContent key={content} content={content}></PricingContent>
          ))}
        </div>
        <Button className="rounded-lg text-white bg-primary-600 w-full md:w-10 h-10 md:min-h-[48px] md:min-w-[320px]">
          Get started
        </Button>
      </div>
    </div>
  );
};

export default PricingCardItem;
