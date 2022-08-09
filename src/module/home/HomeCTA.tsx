import { Button } from "components/button";
import LayoutPage from "components/layout/LayoutPage";
import { SubHeadLine } from "module/common/subheadline";
import React from "react";

const HomeCTA = () => {
  return (
    <section className="cta bg-gray-50">
      <LayoutPage>
        <div className="md:py-24 md:px-8">
          <SubHeadLine heading="Start your free trial">
            Join over 4,000+ startups already growing with Untitled.
          </SubHeadLine>
          <div className="mb-8 md:mb-10"></div>
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-y-4 md:gap-y-0 md:gap-x-3 w-full">
            <Button className="rounded-lg border border-gray-300 text-gray-900 h-[48px] w-full md:w-[135px]">
              Learn more
            </Button>
            <Button className="rounded-lg text-white bg-primary-600 h-[48px] w-full md:w-[135px]">
              Get started
            </Button>
          </div>
        </div>
      </LayoutPage>
    </section>
  );
};

export default HomeCTA;
