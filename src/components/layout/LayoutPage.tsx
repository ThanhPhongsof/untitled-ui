import classNames from "utils/classNames";

type LayoutPageProps = {
  className?: string;
  // children: JSX.Element[] | JSX.Element;
  children: any;
};

const LayoutPage = ({ className = "", children }: LayoutPageProps) => {
  return (
    <div
      className={classNames(
        "w-full my-0 py-0 text-center mb-16 md:mb-24 max-w-[1440px] mx-auto px-4 xl:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default LayoutPage;
