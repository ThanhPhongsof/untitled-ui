import LayoutPage from "components/layout/LayoutPage";
import { SubHeadLine } from "module/common/subheadline";
import { FeaturesModel } from "services/models/indes";
import {
  HomeFeaturesContent,
  FeaturesList,
  HomeFeaturesContentItem,
} from "./parts/features";

type HomeFeaturesProps = {
  badge: string;
  heading: string;
  children: string;
  number: number;
  kind?: boolean;
};

const HomeFeatures = ({
  badge,
  heading,
  children,
  number = 6,
  kind,
}: HomeFeaturesProps) => {
  return (
    <section className="features">
      <LayoutPage>
        <SubHeadLine badge={badge} heading={heading}>
          {children}
        </SubHeadLine>
        {kind && (
          <div className="bg-[url('../images/features_2.png')] lg:bg-[url('../images/features_1.png')] bg-cover bg-no-repeat bg-center w-full h-full min-h-[360px] lg:min-h-[719px] max-w-[375px] lg:max-w-full md:mx-[180px] lg:mx-0 mb-12 lg:mb-0"></div>
        )}
        {number > 0 && (
          <HomeFeaturesContent>
            {FeaturesList?.slice(0, number).map((item: FeaturesModel) => (
              <HomeFeaturesContentItem
                key={item.heading}
                item={item}
              ></HomeFeaturesContentItem>
            ))}
          </HomeFeaturesContent>
        )}
      </LayoutPage>
    </section>
  );
};

export default HomeFeatures;
