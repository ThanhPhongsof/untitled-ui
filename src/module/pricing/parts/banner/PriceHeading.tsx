type PriceHeadingProps = {
  icon: JSX.Element;
  heading: string;
  price: string;
  desc: string;
};

const PriceHeading = ({ icon, heading, price, desc }: PriceHeadingProps) => {
  return (
    <div className="flex flex-col items-center pb-8">
      <span className="text-primary-600 bg-primary-100 rounded-[28px] p-3 mb-5">
        {icon}
      </span>
      <span className="text-primary-700 font-semibold text-[20px] leading-[30px] mb-2">
        {heading}
      </span>
      <h3 className="text-gray-900 text-4xl md:text-5xl font-semibold mb-2">
        {price}
      </h3>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
};

export default PriceHeading;
