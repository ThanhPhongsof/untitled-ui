import { Button } from "components/button";
import LayoutPage from "components/layout/LayoutPage";
import React from "react";
import classNames from "utils/classNames";

type PricingCTAProps = {
  heading: string;
  kind?: string;
};

const PricingCTA = ({ heading, kind = "default" }: PricingCTAProps) => {
  //
  let SectionBG =
    "bg-primary-100 lg:max-w-[1440px] lg:mx-auto lg:rounded-2xl lg:border lg:border-primary-100 lg:h-[216px]";
  let HeadingColor = "text-primary-900";
  let DescColor = "text-primary-700";
  let ButtonBG = "bg-primary-600";

  if (kind === "secondary") {
    SectionBG = "bg-primary-800";
    HeadingColor = "text-white";
    DescColor = "text-primary-200";
    ButtonBG = "bg-primary-500";
  }

  return (
    <section className={classNames("cta", SectionBG)}>
      <LayoutPage>
        <div
          className={classNames(
            "flex flex-col md:flex-row items-start justify-between gap-[53px] p-16 rounded-2xl"
          )}
        >
          <div className="flex flex-col items-start gap-4 text-left">
            <h3
              className={classNames(
                " text-3xl font-semibold ",
                HeadingColor,
                kind === "default" ? "" : "whitespace-nowrap"
              )}
            >
              {heading}{" "}
              {kind === "default" && (
                <span className="hidden md:inline-block">free trial</span>
              )}
            </h3>
            <p className={classNames("text-lg md:text-xl", DescColor)}>
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-3 w-full flex-1 lg:flex-[0]">
            <Button className="rounded-lg text-gray-700 bg-white border border-gray-300 shadow-md w-full md:w-10 h-10 md:min-h-[48px] md:min-w-[132px] font-medium">
              Learn more
            </Button>
            <Button
              className={classNames(
                "rounded-lg text-white  shadow-md w-full md:w-10 h-10 md:min-h-[48px] md:min-w-[132px] font-medium",
                ButtonBG
              )}
            >
              Get started
            </Button>
          </div>
        </div>
      </LayoutPage>
    </section>
  );
};

export default PricingCTA;
