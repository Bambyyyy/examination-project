import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  fill?: string;
};
const SvgComponent: React.FC<Props> = ({ className = "", fill = "black" }) => (
  <svg className={twMerge("Phone", className ?? "")} height={24} width={16.217}>
    <g
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="translate(.75 .75)"
    >
      <rect data-name="Rectangle 733" height={22.5} rx={1.957} width={14.717} />
      <path
        d="M10.379 3.302h-6.04a1.06 1.06 0 0 1-1.049-.9L2.935 0h8.848l-.355 2.4a1.06 1.06 0 0 1-1.049.9Z"
        data-name="Path 447"
      />
    </g>
  </svg>
);
export default SvgComponent;
