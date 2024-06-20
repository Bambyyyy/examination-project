import * as React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.626"
    height="42"
    viewBox="0 0 20.626 42"
  >
    <g id="Group_538" data-name="Group 538" transform="translate(1.414 1)">
      <path
        id="Path_100"
        data-name="Path 100"
        d="M24.3,18.5l-8.9,8.9L6.5,18.5"
        transform="translate(-6.5 12.604)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Path_101"
        data-name="Path 101"
        d="M11.5,40.5V.5"
        transform="translate(-2.601 -0.497)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
  </svg>
);
export default SvgComponent;
