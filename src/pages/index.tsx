import type { NextPage } from "next";
import Layout from "components/layout/Layout";
import {
  HomeBanner,
  HomeCTA,
  HomeFAQ,
  HomeFeatures,
  HomeMetrics,
  HomeSisyphus,
} from "module/home";
import { Social } from "module/common/social";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <HomeBanner></HomeBanner>
        <Social></Social>
        <HomeFeatures
          badge="Features"
          heading="Analytics that feels like it's from the future"
        >
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </HomeFeatures>
        <HomeSisyphus></HomeSisyphus>
        <HomeFeatures
          badge="Features"
          heading="Cutting-edge features for advanced analytics"
          number={3}
          kind={true}
        >
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </HomeFeatures>
        <HomeFeatures heading="Frequently asked questions" number={0}>
          Everything you need to know about the product and billing.
        </HomeFeatures>
        <HomeFAQ></HomeFAQ>
        <HomeMetrics></HomeMetrics>
        <HomeCTA></HomeCTA>
      </Layout>
    </>
  );
};

export default Home;
