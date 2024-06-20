import * as React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14.174}
    height={14}
    className={twMerge(className, "")}
  >
    <g
      fill="none"
      stroke={twMerge(fill ?? "#FFFFFF")}
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(.5 .5)"
    >
      <circle cx={6.5} cy={6.5} r={6.5} />
      <path d="M.5 9h1.75A1.75 1.75 0 0 0 4 7.25v-1.5A1.75 1.75 0 0 1 5.75 4 1.75 1.75 0 0 0 7.5 2.25V.07M13 6.4a3.56 3.56 0 0 0-1.62-.4H9.25a1.75 1.75 0 0 0 0 3.5 1.25 1.25 0 0 1 1.25 1.25v.87" />
    </g>
  </svg>
);
export default SvgComponent;
