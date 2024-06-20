import * as React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6.981}
    height={11.454}
    className={twMerge(className, "")}
  >
    <path
      fill="none"
      stroke={twMerge(fill ?? "#000")}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1.059 10.396 5.1-4.516a.2.2 0 0 0 0-.3l-5.1-4.517"
    />
  </svg>
);
export default SvgComponent;
