import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    className={twMerge(className ?? "")}
  >
    <g
      fill="none"
      stroke={twMerge(fill ?? "#000")}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="translate(.75 .75)"
    >
      <circle cx={5.25} cy={5.25} r={5.25} transform="translate(6 3.75)" />
      <path d="M18.163 20.126a9.746 9.746 0 0 0-13.826 0" />
      <circle cx={11.25} cy={11.25} r={11.25} />
    </g>
  </svg>
);
export default SvgComponent;
