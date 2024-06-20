import * as React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21.5}
    className={twMerge(className ?? "")}
  >
    <g fill="none" stroke="#000" strokeWidth={1.5}>
      <path d="M0 4.75h22M3 4.75h16v16H3ZM8 8.75v8M14 8.75v8M7 4.75a4 4 0 0 1 4-4 4 4 0 0 1 4 4" />
    </g>
  </svg>
);
export default SvgComponent;
