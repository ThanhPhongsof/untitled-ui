import LayoutPage from "components/layout/LayoutPage";
import {
  HomeFeaturesContent,
  FeaturesList,
  FeaturesModel,
  HomeFeaturesContentItem,
} from "./parts/features";
import { SubHeadLine } from "./parts/subheadline";

type HomeFeaturesProps = {
  badge: string;
  heading: string;
  children: string;
  number: number;
  kind: string;
};

const HomeFeatures = ({
  badge,
  heading,
  children,
  number = 6,
  kind,
}: HomeFeaturesProps) => {
  return (
    <LayoutPage>
      <SubHeadLine badge={badge} heading={heading}>
        {children}
      </SubHeadLine>
      <HomeFeaturesContent>
        {FeaturesList?.slice(0, number).map((item: FeaturesModel) => (
          <HomeFeaturesContentItem
            key={item.heading}
            item={item}
          ></HomeFeaturesContentItem>
        ))}
      </HomeFeaturesContent>
    </LayoutPage>
  );
};

export default HomeFeatures;
