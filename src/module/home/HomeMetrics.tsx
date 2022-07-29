import LayoutPageVer2 from 'components/layout/LayoutPageVer2';
import React from 'react';
import { HomeMetricsBody, HomeMetricsHeader } from './parts/metrics';

const HomeMetrics = () => {
  return (
    <LayoutPageVer2>
      <HomeMetricsHeader></HomeMetricsHeader>
      <HomeMetricsBody></HomeMetricsBody>
    </LayoutPageVer2>
  );
};

export default HomeMetrics;