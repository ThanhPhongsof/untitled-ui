import React from "react";
import classNames from "utils/classNames";

type AvartarProps = {
  src: string;
  alt: string;
  className: string;
};

const Avartar = ({
  src,
  alt = "Landscape picture",
  className = "w-16 h-16 mb-4",
}: AvartarProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      srcSet={src}
      alt={alt}
      className={classNames(
        "rounded-full object-cover object-center",
        className
      )}
    />
  );
};

export default Avartar;
