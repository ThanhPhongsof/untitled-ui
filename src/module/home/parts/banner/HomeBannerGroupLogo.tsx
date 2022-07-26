import React from "react";
import HomeBannerAmount from "./HomeBannerAmount";
import HomeBannerLogo from "./HomeBannerLogo";

const HomeBannerGroupLogo = () => {
  return (
    <div className="flex flex-col items-center gap-y-8 w-full">
      <HomeBannerAmount>Join 4,000+ companies already growing</HomeBannerAmount>
      <HomeBannerLogo></HomeBannerLogo>
    </div>
  );
};

export default HomeBannerGroupLogo;
