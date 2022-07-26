import {
  LogoCatalog,
  LogoCircooles,
  LogoHourglass,
  LogoLayer,
  LogoQuotient,
  LogoSisphus,
} from "components/logo";

const bannerLogos = [
  {
    logo: <LogoLayer></LogoLayer>,
    title: "Layer",
  },
  {
    logo: <LogoSisphus></LogoSisphus>,
    title: "Sisphus",
  },
  {
    logo: <LogoCircooles></LogoCircooles>,
    title: "Circooles",
  },
  {
    logo: <LogoCatalog></LogoCatalog>,
    title: "Catalog",
  },
  {
    logo: <LogoQuotient></LogoQuotient>,
    title: "Quotient",
  },
  {
    logo: <LogoHourglass></LogoHourglass>,
    title: "Hourglass",
  },
];

const HomeBannerLogo = () => {
  return (
    <div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-8 md:gap-6 lg:gap-24 w-full">
      {bannerLogos?.map((item) => (
        <div
          key={item.title}
          className="flex items-center gap-x-[14px] md:last:hidden"
        >
          <span>{item.logo}</span>
          <span className="text-gray-900 font-bold text-lg">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default HomeBannerLogo;
