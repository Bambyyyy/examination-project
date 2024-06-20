import * as React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17.678}
    height={17.677}
    className={twMerge(className, "")}
  >
    <g fill="none" stroke="#000" strokeLinecap="round" strokeWidth={1.5}>
      <path d="M1.061 16.617 16.617 1.061M1.061 1.061l15.556 15.556" />
    </g>
  </svg>
);
export default SvgComponent;
