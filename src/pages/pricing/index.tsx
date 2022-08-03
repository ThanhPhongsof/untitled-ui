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
        <PricingCTA heading="Start your 30-day">
          Join over 4,000+ startups already growing with Untitled.
        </PricingCTA>
        <PricingFeaturres
          badge="Features"
          heading="Analytics that feels like it's from the future"
          number={6}
        >
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </PricingFeaturres>
        <PricingSocial></PricingSocial>
        <PricingFAQ></PricingFAQ>
        <PricingCTA heading="Start your free trial" kind="secondary">
          Join over 4,000+ startups already growing with Untitled.
        </PricingCTA>
      </Layout>
    </>
  );
};

export default Pricing;
