import { Button } from "components/button";
import LayoutPageVer2 from "components/layout/LayoutPageVer2";
import { SubHeadLine } from "module/common/subheadline";
import React from "react";

const HomeCTA = () => {
  return (
    <section className="cta">
      <LayoutPageVer2>
        <SubHeadLine heading="Start your free trial">
          Join over 4,000+ startups already growing with Untitled.
        </SubHeadLine>
        <div className="mb-8 md:mb-10"></div>
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-y-4 md:gap-y-0 md:gap-x-3 w-full mb-16 md:mb-24">
          <Button className="rounded-lg border border-gray-300 text-gray-900 h-[48px] w-full md:w-[135px]">
            Learn more
          </Button>
          <Button className="rounded-lg text-white bg-primary-600 h-[48px] w-full md:w-[135px]">
            Get started
          </Button>
        </div>
      </LayoutPageVer2>
    </section>
  );
};

export default HomeCTA;
