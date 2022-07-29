type HomeFAQIconProps = {
  onClick: any;
  children: JSX.Element;
};

const HomeFAQIcon = ({ onClick = () => {}, children }: HomeFAQIconProps) => {
  return (
    <span className="inline-flex items-center w-6 h-6 rounded-full border border-primary-600 text-primary-600 cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};

export default HomeFAQIcon;
