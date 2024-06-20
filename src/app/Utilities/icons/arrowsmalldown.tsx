import * as React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11.454}
    height={7.981}
    className={twMerge(className, "transition-all duration-300")}
  >
    <path
      fill="none"
      stroke={twMerge(fill ?? "#FFFFFF")}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1.059 1.059 4.516 5.1a.2.2 0 0 0 .3 0l4.517-5.1"
    />
  </svg>
);
export default SvgComponent;
