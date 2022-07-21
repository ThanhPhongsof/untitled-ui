import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";
import HomeBanner from "../module/home/HomeBanner";

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
