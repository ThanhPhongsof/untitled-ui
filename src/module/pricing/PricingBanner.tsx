import LayoutPage from "components/layout/LayoutPage";
import { SubHeadLine } from "module/common/subheadline";
import { PricingCard } from "./parts/banner";

const PricingBanner = () => {
  return (
    <section className="banner">
      <LayoutPage>
        <SubHeadLine badge="Pricing plans" heading="Plans for all sizes">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </SubHeadLine>
        <PricingCard></PricingCard>
      </LayoutPage>
    </section>
  );
};

export default PricingBanner;
