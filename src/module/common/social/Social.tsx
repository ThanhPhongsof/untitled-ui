import LayoutPage from "components/layout/LayoutPage";
import React from "react";
import SocialGrid from "./SocialGrid";

const Social = () => {
  return (
    <section className="social">
      <LayoutPage>
        <div className="flex flex-col items-center gap-y-8 w-full">
          <span className="font-medium text-gray-500">
            Join 4,000+ companies already growing
          </span>
          <SocialGrid></SocialGrid>
        </div>
      </LayoutPage>
    </section>
  );
};

export default Social;
