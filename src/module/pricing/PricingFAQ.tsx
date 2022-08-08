import LayoutPage from "components/layout/LayoutPage";
import { SubHeadLine } from "module/common/subheadline";
import { PricingFAQWrapper } from "./parts/faq";

type PricingFeaturresProps = {
  badge: string;
  heading: string;
  children: string;
};

const PricingFAQ = ({ badge, heading, children }: PricingFeaturresProps) => {
  return (
    <section className="faq">
      <LayoutPage>
        <SubHeadLine badge={badge} heading={heading} type="left">
          {children}
        </SubHeadLine>
        <PricingFAQWrapper />
      </LayoutPage>
    </section>
  );
};

export default PricingFAQ;
