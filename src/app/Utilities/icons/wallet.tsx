import * as React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12.5}
    className={twMerge(className, "")}
  >
    <g
      fill="none"
      stroke={twMerge(fill ?? "#FFFFFF")}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 9v2a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1V3.5a3 3 0 0 1 3-3H10V3" />
      <path d="M13 6H9.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 13 6ZM12 6V4a1 1 0 0 0-1-1H3.5" />
    </g>
  </svg>
);
export default SvgComponent;
