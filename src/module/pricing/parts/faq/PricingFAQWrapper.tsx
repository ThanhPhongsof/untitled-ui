import PricingFAQContent from "./PricingFAQContent";
import PricingFAQImage from "./PricingFAQImage";

const PricingFAQWrapper = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 mt-12 md:mt-16 px-8">
      <PricingFAQContent />
      <PricingFAQImage />
    </div>
  );
};

export default PricingFAQWrapper;
