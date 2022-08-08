import {
  IconHeart,
  IconPlusCircle,
  IconRefresh,
  IconSlash,
} from "components/icon";
import { PricingFAQContent } from "services/models/indes";
import PricingFAQContentItem from "./PricingFAQContentItem";

const faqContents = [
  {
    icon: <IconHeart />,
    heading: "Is there a free trial available?",
    desc: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
  },
  {
    icon: <IconRefresh />,
    heading: "Can I change my plan later?",
    desc: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
  },
  {
    icon: <IconSlash />,
    heading: "What is your cancellation policy?",
    desc: "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
  },
  {
    icon: <IconPlusCircle />,
    heading: "Can other info be added to an invoice?",
    desc: "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.",
  },
];

const PricingFAQContent = () => {
  return (
    <div className="basis-full md:basis-1/2">
      <div className="px-4">
        <div className="flex flex-col items-start gap-12">
          {faqContents?.map((item: PricingFAQContent) => (
            <PricingFAQContentItem key={item.heading} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingFAQContent;
