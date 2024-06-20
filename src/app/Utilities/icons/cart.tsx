import * as React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    className={twMerge(className, "")}
  >
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(.5 .5)"
    >
      <rect
        width={11}
        height={8}
        data-name="Rectangle 3"
        rx={1}
        transform="translate(0 3)"
      />
      <path
        d="M8.239 2.5V.833A.833.833 0 0 0 7.405 0H4.072a.833.833 0 0 0-.833.833V2.5"
        data-name="Path 1"
      />
    </g>
  </svg>
);
export default SvgComponent;
