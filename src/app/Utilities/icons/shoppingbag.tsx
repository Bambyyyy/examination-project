import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className = "", fill = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20.5}
    height={24.5}
    className={twMerge(className ?? "")}
  >
    <g fill="none" stroke={twMerge(fill ?? "#000")} strokeWidth={1.5}>
      <path d="M6.003 15.25a.25.25 0 0 1 0-.5M6.003 15.25a.25.25 0 0 0 0-.5M14.581 15.25a.25.25 0 0 1 0-.5M14.581 15.25a.25.25 0 0 0 0-.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.995 17.75a4.5 4.5 0 0 1-7.485 0M5.753 9.75v-4.5a4.5 4.5 0 1 1 9 0v4.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.719 20.75-.9-13a1.072 1.072 0 0 0-1.069-1H2.753a1.072 1.072 0 0 0-1.069 1l-.9 13q-.034.5-.034 1a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2q.003-.5-.031-1Z"
      />
    </g>
  </svg>
);
export default SvgComponent;
