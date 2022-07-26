import React from 'react';

type HomeBannerAmountProps = {
  children: string
}

const HomeBannerAmount = ({children}:HomeBannerAmountProps) => {
  return (
    <span className="font-medium text-gray-500">{children}</span>
  );
};

export default HomeBannerAmount;