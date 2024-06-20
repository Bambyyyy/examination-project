import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  fill?: string;
  stroke?: string;
  liked?: boolean;
};

const SvgComponent: React.FC<Props> = ({ className, fill, stroke, liked }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15.516}
    height={12.948}
    className={twMerge(className ?? "scale-[1.5]")}
    style={{ transition: "fill 0.3s" }}
  >
    <g
      className="transition-all duration-200"
      fill={`${liked ? "#ff7ab8" : "transparent"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      data-name="Path 53"
    >
      <path d="M7.763 12.948 1.178 6.984C-2.4 3.405 2.86-3.465 7.763 2.093c4.9-5.559 10.139 1.336 6.584 4.891Z" />
      <path
        fill={twMerge(stroke) ?? ""}
        d="m7.763 11.599 5.893-5.338c.873-.886 1.1-2.125.604-3.32-.487-1.177-1.525-1.937-2.645-1.937-1.019 0-2.092.605-3.102 1.75a1 1 0 0 1-1.5 0C6 1.608 4.924 1 3.9 1c-1.12 0-2.159.758-2.645 1.932C.76 4.126.99 5.369 1.869 6.26l5.894 5.338m0 1.35L1.178 6.983C-2.4 3.406 2.86-3.466 7.763 2.094c4.902-5.56 10.139 1.335 6.584 4.89l-6.584 5.964Z"
      />
    </g>
  </svg>
);
export default SvgComponent;
