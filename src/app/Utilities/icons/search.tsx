import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24.811}
    height={24.811}
    className={twMerge(className ?? "")}
  >
    <g
      fill="none"
      stroke={twMerge(fill ?? "#000")}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M.75 10.75a10 10 0 1 0 10-10 10 10 0 0 0-10 10ZM23.75 23.75l-5.929-5.929" />
    </g>
  </svg>
);
export default SvgComponent;
