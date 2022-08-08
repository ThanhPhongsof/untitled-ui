import Layout from "components/layout/Layout";
import { Social } from "module/common/social";
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
        <Social></Social>
        <PricingFAQ badge="Support" heading="Frequently asked questions">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </PricingFAQ>
        <PricingCTA heading="Start your free trial" kind="secondary">
          Join over 4,000+ startups already growing with Untitled.
        </PricingCTA>
      </Layout>
    </>
  );
};

export default Pricing;
