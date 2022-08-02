import { IconCheck } from "components/icon";
import React from "react";

type PricingContentProps = {
  content: string;
};

const PricingContent = ({ content }: PricingContentProps) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="text-primary-600 bg-primary-100 rounded-[28px] p-3">
        <IconCheck></IconCheck>
      </span>
      <span className="text-gray-500 text-left">{content}</span>
    </div>
  );
};

export default PricingContent;
