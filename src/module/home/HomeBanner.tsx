import React from "react";
import { Button } from "../../components/button";

const HomeBanner = () => {
  return (
    <div className="container h-[312px] text-center">
      <span className=" py-1 px-[10px] inline-flex items-center gap-3 rounded-2xl bg-primary-50 text-primary-700">
        <span className="bg-white rounded-2xl p-1">New feature</span> Check out
        the team dashboard
      </span>
      <h1>Beautiful analytics to grow smarter</h1>
      <p>
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <Button>Demo</Button>
    </div>
  );
};

export default HomeBanner;
