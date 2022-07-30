export interface HomeFAQModel {
  title: string;
  desc: string;
}

export interface FeaturesModel {
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
