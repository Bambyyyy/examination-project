import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  fill?: string;
  textColor?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill, textColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    className={twMerge(className, "")}
  >
    <g clipPath="url(#a)">
      <rect
        width={30}
        height={30}
        fill={twMerge(fill ?? "#01A0D7")}
        rx={15}
        className="scale-[0.95] origin-center"
      />
      <path
        className="scale-[0.95] origin-center"
        fill={twMerge(textColor ?? "#fff")}
        fillRule="evenodd"
        d="M8.289 11.168S9.144 10 11.019 10c2.741 0 4.292 2.126 4.286 4.788 0 2.593-1.773 4.736-4.531 4.736-1.693 0-2.485-.843-2.485-.843v3.146H5V10.29h3.289v.877Zm-.097 3.62c0 1.054.74 1.835 1.824 1.835 1.1 0 1.806-.78 1.806-1.835 0-1.117-.723-1.881-1.806-1.881-1.1 0-1.824.758-1.824 1.88Zm10.886-3.62S19.773 10 21.694 10C23.826 10 25 11.282 25 13.75v5.5h-3.323V14.92c0-1.072-.148-1.915-1.163-1.915-1.014 0-1.436.518-1.436 1.653v4.593H15.79v-8.96h3.29v.878Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={30} height={30} fill="#fff" rx={15} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
