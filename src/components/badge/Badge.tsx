import React from "react";
import classNames from "utils/classNames";

type BadgeProps = {
  kind: string;
  text: string;
  className?: string;
};

const Badge = ({ kind = "primary", className = "", text }: BadgeProps) => {
  let defaultBadgeColor = "";
  switch (kind) {
    case "success":
      defaultBadgeColor = "text-success-700 bg-success-50";
      break;
    case "important":
      defaultBadgeColor = "text-error-700 bg-error-50";
      break;
    default:
      defaultBadgeColor = "text-primary-700 bg-primary-100";
      break;
  }

  return (
    <span
      className={classNames(
        "px-[10px] py-[2px] md:px-3 rounded-2xl",
        className,
        defaultBadgeColor
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
