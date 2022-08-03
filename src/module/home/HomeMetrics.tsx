import LayoutPage from "components/layout/LayoutPage";
import LayoutPageVer2 from "components/layout/LayoutPageVer2";
import React from "react";
import { HomeMetricsBody, HomeMetricsHeader } from "./parts/metrics";

const HomeMetrics = () => {
  return (
    <section className="metrics">
      <LayoutPage>
        <HomeMetricsHeader></HomeMetricsHeader>
        <HomeMetricsBody></HomeMetricsBody>
      </LayoutPage>
    </section>
  );
};

export default HomeMetrics;
