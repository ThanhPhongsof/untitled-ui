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
    <picture>
      <source srcSet={src} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={classNames(
          "rounded-full object-cover object-center",
          className
        )}
      />
    </picture>
  );
};

export default Avartar;
