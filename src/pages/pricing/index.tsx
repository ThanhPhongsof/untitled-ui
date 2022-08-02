import Layout from "components/layout/Layout";
import {
  PricingBanner,
  PricingCTA,
  PricingFAQ,
  PricingFeaturres,
  PricingSocial,
} from "module/pricing";
import { NextPage } from "next";

const Pricing: NextPage = () => {
  return (
    <>
      <Layout>
        <PricingBanner></PricingBanner>
        <PricingCTA></PricingCTA>
        <PricingFeaturres></PricingFeaturres>
        <PricingSocial></PricingSocial>
        <PricingFAQ></PricingFAQ>
        <PricingCTA></PricingCTA>
      </Layout>
    </>
  );
};

export default Pricing;
