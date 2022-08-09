import { Avartar } from "components/avartar";
import React from "react";

const HomeGroupAvartar = () => {
  return (
    <div className="flex jusity-center items-center my-6 md:my-8">
      <Avartar
        src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        className="bg-[#ABB677] w-12 h-12 translate-x-4"
        alt="Alec Whitten"
      ></Avartar>
      <Avartar
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        className="bg-[#C7B9DA] border-2 border-white w-14 h-14"
        alt="Olivia Rhye"
      ></Avartar>
      <Avartar
        src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        className="bg-[#D9B9BB] w-12 h-12 -translate-x-4"
        alt="Lori Bryson"
      ></Avartar>
    </div>
  );
};

export default HomeGroupAvartar;
