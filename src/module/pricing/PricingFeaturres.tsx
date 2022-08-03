import LayoutPage from "components/layout/LayoutPage";
import { SubHeadLine } from "module/common/subheadline";
import { FeaturesModel } from "services/models/indes";
import {
  FeaturesContent,
  FeaturesContentItem,
  FeaturesList,
} from "module/common/features";

type PricingFeaturresProps = {
  badge: string;
  heading: string;
  children: string;
  number: number;
};

const PricingFeaturres = ({
  badge,
  heading,
  children,
  number = 6,
}: PricingFeaturresProps) => {
  return (
    <section className="features">
      <LayoutPage>
        <SubHeadLine badge={badge} heading={heading} type="left">
          {children}
        </SubHeadLine>
        {number > 0 && (
          <FeaturesContent type="left">
            {FeaturesList?.slice(0, number).map((item: FeaturesModel) => (
              <FeaturesContentItem
                key={item.id}
                item={item}
                type="left"
              ></FeaturesContentItem>
            ))}
          </FeaturesContent>
        )}
      </LayoutPage>
    </section>
  );
};

export default PricingFeaturres;
