import { IconThreeLayer, IconTwoLayer, IconZap } from "components/icon";
import { PricingCardModel } from "services/models/indes";
import PricingCardItem from "./PricingCardItem";

const priceCards = [
  {
    icon: <IconZap></IconZap>,
    heading: "Basic plan",
    price: "$10/mth",
    desc: "Billed annually.",
    contents: [
      "Access to all basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
  },
  {
    icon: <IconTwoLayer></IconTwoLayer>,
    heading: "Business plan",
    price: "$20/mth",
    desc: "Billed annually.",
    contents: [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "40GB individual data each user",
      "Priority chat and email support",
    ],
  },
  {
    icon: <IconThreeLayer></IconThreeLayer>,
    heading: "Enterprise plan",
    price: "$40/mth",
    desc: "Billed annually.",
    contents: [
      "Advanced custom fields",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalised+priotity service",
    ],
  },
];

const PricingCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8  flex-wrap mb-16 md:mb-24">
      {priceCards?.map((item: PricingCardModel) => (
        <PricingCardItem key={item.heading} item={item}></PricingCardItem>
      ))}
    </div>
  );
};

export default PricingCard;
