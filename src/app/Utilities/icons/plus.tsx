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
    height={6.12}
    className={twMerge(className, "mt-[1px]")}
    fill={twMerge(fill, "")}
  >
    <path d="M2.544 0v2.6H0v.924h2.544v2.592h1.02V3.528H6.12v-.924H3.564v-2.6Z" />
  </svg>
);
export default SvgComponent;
