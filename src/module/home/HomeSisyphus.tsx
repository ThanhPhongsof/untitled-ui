import { Avartar } from "components/avartar";
import LayoutPage from "components/layout/LayoutPage";
import { LogoSisphus } from "components/logo";
import React from "react";

const HomeSisyphus = () => {
  return (
    <section className="sispyphu bg-gray-50">
      <LayoutPage>
        <div>
          <div className="md:mx-20 md:my-24">
            <div className="text-gray-900 font-semibold text-lg px-[10px] py-[2px] md:px-3 md:py-1 my-8 flex justify-center items-center gap-x-3 mx-auto">
              <span>
                <LogoSisphus></LogoSisphus>
              </span>
              <span>Sisyphus</span>
            </div>
            <h2 className="font-medium text-3xl md:text-5xl text-gray-900 mb-8 text-center">
              We&apos;ve been using Untitled to kick start every new project and
              can&apos;t imagine working without it.
            </h2>
            <div className="flex flex-col items-center">
              <Avartar src="https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"></Avartar>
              <h2 className="font-semibold text-lg text-gray-900 lg:mb-[20px] lg:whitespace-nowrap mb-1">
                Candice Wu
              </h2>
              <p className="text-gray-500 mb-16 lg:mb-24">
                Product Manager, Sisyphus
              </p>
            </div>
          </div>
        </div>
      </LayoutPage>
    </section>
  );
};

export default HomeSisyphus;
