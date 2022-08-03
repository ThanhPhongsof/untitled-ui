import classNames from "utils/classNames";

type FeaturesContentProps = {
  children: JSX.Element;
  type: string;
};

const FeaturesContent = ({
  children,
  type = "default",
}: FeaturesContentProps) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-16 gap-x-0 items-start lg:gap-x-9",
        type === "default" ? "md:mx-[150px] lg:mx-0" : "md:mx-16"
      )}
    >
      {children}
    </div>
  );
};

export default FeaturesContent;
