type HomeFeaturesContentProps = {
  children: JSX.Element;
};

const HomeFeaturesContent = ({ children }: HomeFeaturesContentProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-16 gap-x-0 items-start lg:gap-x-9 md:mx-[150px] lg:mx-0">
      {children}
    </div>
  );
};

export default HomeFeaturesContent;
