import { LogoDefaut } from "components/logo";
import { FooterItem } from "module/footer";
import { FooterModel } from "services/models/indes";
import LayoutPageVer2 from "./LayoutPageVer2";

const footers = [
  {
    heading: "Product",
    linkFooters: [
      {
        link: "Overview",
        status: false,
      },
      {
        link: "Features",
        status: false,
      },
      {
        link: "Solutions",
        status: true,
      },
      {
        link: "Tutorials",
        status: false,
      },
      {
        link: "Pricing",
        status: false,
      },
      {
        link: "Releases",
        status: false,
      },
    ],
  },
  {
    heading: "Company",
    linkFooters: [
      {
        link: "About us",
        status: false,
      },
      {
        link: "Careers",
        status: false,
      },
      {
        link: "Press",
        status: false,
      },
      {
        link: "News",
        status: false,
      },
      {
        link: "Media kit",
        status: false,
      },
      {
        link: "Contact",
        status: false,
      },
    ],
  },
  {
    heading: "Resources",
    linkFooters: [
      {
        link: "Blog",
        status: false,
      },
      {
        link: "Newsletter",
        status: false,
      },
      {
        link: "Events",
        status: false,
      },
      {
        link: "Help centre",
        status: false,
      },
      {
        link: "Tutorials",
        status: false,
      },
      {
        link: "Support",
        status: false,
      },
    ],
  },
  {
    heading: "Use cases",
    linkFooters: [
      {
        link: "Startups",
        status: false,
      },
      {
        link: "Enterprise",
        status: false,
      },
      {
        link: "Government",
        status: false,
      },
      {
        link: "SaaS",
        status: false,
      },
      {
        link: "Marketplaces",
        status: false,
      },
      {
        link: "Ecommerce",
        status: false,
      },
    ],
  },
  {
    heading: "Social",
    linkFooters: [
      {
        link: "Twitter",
        status: false,
      },
      {
        link: "LinkedIn",
        status: false,
      },
      {
        link: "Facebook",
        status: false,
      },
      {
        link: "GitHub",
        status: false,
      },
      {
        link: "AngelList",
        status: false,
      },
      {
        link: "Dribbble",
        status: false,
      },
    ],
  },
  {
    heading: "Legal",
    linkFooters: [
      {
        link: "Terms",
        status: false,
      },
      {
        link: "Privacy",
        status: false,
      },
      {
        link: "Cookies",
        status: false,
      },
      {
        link: "Licenses",
        status: false,
      },
      {
        link: "Settings",
        status: false,
      },
      {
        link: "Contact",
        status: false,
      },
    ],
  },
];

const Footer = () => {
  return (
    <LayoutPageVer2>
      <div className="md:mx-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 lg:gap-y-16 gap-x-8 items-start text-left mb-16">
          {footers?.map((item: FooterModel) => (
            <FooterItem key={item.heading} item={item}></FooterItem>
          ))}
        </div>
        <div className="border-t-2 border-t-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8">
            <LogoDefaut></LogoDefaut>
            <span className="text-gray-400 mt-8 md:mt-0">
              © 2077 Untitled UI. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </LayoutPageVer2>
  );
};

export default Footer;
