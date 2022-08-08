import Image from "next/image";
import React from "react";

const PricingFAQImage = () => {
  return (
    <div className="basis-full md:basis-1/2">
      <Image
        src="/pricing-faq.png"
        width={560}
        height={560}
        layout="intrinsic"
        alt="Frequently asked questions"
        objectFit="cover"
        objectPosition="center"
        className="rounded-2xl overflow-hidden"
      />
    </div>
  );
};

export default PricingFAQImage;
