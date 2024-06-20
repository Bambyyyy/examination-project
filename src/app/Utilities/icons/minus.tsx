import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6.12}
    height={0.924}
    viewBox="0 0 6.12 0.924"
    className={twMerge(className, "mt-[1px]")}
    fill={twMerge(fill, "")}
  >
    <path d="M2.544 0H0v.924h6.12V0H2.544Z" />
  </svg>
);
export default SvgComponent;
