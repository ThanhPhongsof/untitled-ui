import type { NextPage } from "next";
import Layout from "components/layout/Layout";
import HomeBanner from "module/home/HomeBanner";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <HomeBanner></HomeBanner>
      </Layout>
    </>
  );
};

export default Home;
