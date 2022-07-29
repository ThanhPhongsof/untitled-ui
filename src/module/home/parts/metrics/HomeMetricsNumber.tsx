import { HomeMetricsNumberModel } from "services/models/indes";

type HomeMetricsNumberProps = {
  item: HomeMetricsNumberModel;
};

const HomeMetricsNumber = ({ item }: HomeMetricsNumberProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center lg:mx-8 mb-8 lg:mb-16">
      <h2 className="text-5xl text-primary-600 font-semibold lg:text-6xl mb-3">
        {item.number}
      </h2>
      <span className="text-lg text-gray-900 mb-2 font-medium">
        {item.title}
      </span>
      <p className="text-gray-500">{item.desc}</p>
    </div>
  );
};

export default HomeMetricsNumber;
