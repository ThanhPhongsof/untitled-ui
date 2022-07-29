import { HomeMetricsNumberModel } from "services/models/indes";
import { HomeMetricsNumber } from ".";
import HomeMetricsBG from "./HomeMetricsBG";

const metricsNumbers = [
  {
    number: "4,000+",
    title: "Global customers",
    desc: "We've helped over 4,000 amazing global companies.",
  },
  {
    number: "600%",
    title: "Return on investment",
    desc: "Our customers have reported an average of ~600% ROI.",
  },
  {
    number: "10k",
    title: "Global downloads",
    desc: "Our app has been downloaded over 10k times.",
  },
  {
    number: "200+",
    title: "5-star reviews",
    desc: "We're proud of our 5-star rating with over 200 reviews.",
  },
];

const HomeMetricsBody = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start mb-12 lg:mb-0 lg:my-20">
          {metricsNumbers?.map((item: HomeMetricsNumberModel) => (
            <HomeMetricsNumber
              key={item.number}
              item={item}
            ></HomeMetricsNumber>
          ))}
        </div>
        <HomeMetricsBG></HomeMetricsBG>
      </div>
    </div>
  );
};

export default HomeMetricsBody;
