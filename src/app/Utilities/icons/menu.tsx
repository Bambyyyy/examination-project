import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className = "", fill = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23.5}
    height={15.5}
    className={twMerge(className ?? "")}
  >
    <g
      fill="none"
      stroke={twMerge(fill ?? "#000")}
      strokeLinecap="round"
      strokeWidth={1.5}
    >
      <path d="M.75.75h22M.75 7.75h22M.75 14.75h22" />
    </g>
  </svg>
);
export default SvgComponent;
