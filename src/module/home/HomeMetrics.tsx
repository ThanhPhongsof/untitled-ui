import LayoutPageVer2 from "components/layout/LayoutPageVer2";
import React from "react";
import { HomeMetricsBody, HomeMetricsHeader } from "./parts/metrics";

const HomeMetrics = () => {
  return (
    <section className="metrics">
      <LayoutPageVer2>
        <HomeMetricsHeader></HomeMetricsHeader>
        <HomeMetricsBody></HomeMetricsBody>
      </LayoutPageVer2>
    </section>
  );
};

export default HomeMetrics;
