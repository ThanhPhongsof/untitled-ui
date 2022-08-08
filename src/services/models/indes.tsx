export interface HomeFAQModel {
  title: string;
  desc: string;
}

export interface FeaturesModel {
  id: number;
  icon: JSX.Element;
  heading: string;
  desc: string;
}

export interface HomeMetricsNumberModel {
  number: string;
  title: string;
  desc: string;
}

export interface FooterModel {
  heading: string;
  linkFooters: Array<FooterLinkModel>;
}

export interface FooterLinkModel {
  link: string;
  status: boolean;
}

export interface PricingCardModel {
  icon: JSX.Element;
  heading: string;
  price: string;
  desc: string;
  contents: Array<string>;
}

export interface PricingFAQContent {
  icon:JSX.Element;
  heading:string;
  desc: string;
}
