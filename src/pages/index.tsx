import type { NextPage } from "next";
import Layout from "components/layout/Layout";
import { HomeBanner, HomeFeatures, HomeSisyphus } from "module/home";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <HomeBanner></HomeBanner>
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
        >
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </HomeFeatures>
      </Layout>
    </>
  );
};

export default Home;
