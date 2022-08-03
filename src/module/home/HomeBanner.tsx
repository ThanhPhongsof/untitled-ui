import LayoutPage from "components/layout/LayoutPage";
import {
  HomeBannerBackground,
  HomeBannerDesc,
  HomeBannerGroupButton,
  HomeBannerHeading,
  HomeBannerTitle,
} from "./parts/banner";

const HomeBanner = () => {
  return (
    <section className="banner">
      <LayoutPage>
        <div className="h-[402px] md:h-[410px] lg:h-[312px] mb-16 md:mb-24">
          <div className="mb-12">
            <HomeBannerTitle
              titleLight="New feature"
              title="Check out the team dashboard"
            ></HomeBannerTitle>
            <HomeBannerHeading>
              Beautiful analytics to grow smarter
            </HomeBannerHeading>
            <HomeBannerDesc>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </HomeBannerDesc>
          </div>
          <HomeBannerGroupButton></HomeBannerGroupButton>
        </div>
        <div className="flex flex-col items-center">
          <HomeBannerBackground></HomeBannerBackground>
        </div>
      </LayoutPage>
    </section>
  );
};

export default HomeBanner;
