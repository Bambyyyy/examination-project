import * as React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14.918}
    height={17.213}
    className={twMerge(className, "")}
  >
    <path d="M7.87.002a3.569 3.569 0 0 0-.9.114.811.811 0 0 0-.585.792L6.139 12.36a1.345 1.345 0 1 1-2.689 0 1.236 1.236 0 0 1 .367-.92 1.636 1.636 0 0 1 .9-.417.624.624 0 0 0 .543-.572l.109-2.342a.554.554 0 0 0-.586-.586A4.881 4.881 0 0 0 0 12.361a4.8 4.8 0 1 0 9.6 0l-.125-5.816a9.474 9.474 0 0 0 4.51 1.334.8.8 0 0 0 .867-.568 3.074 3.074 0 0 0 0-1.293.886.886 0 0 0-.835-.607 5.35 5.35 0 0 1-3.043-1.55 5.334 5.334 0 0 1-1.6-2.979.876.876 0 0 0-.61-.768A3.569 3.569 0 0 0 7.87.002Z" />
  </svg>
);
export default SvgComponent;
