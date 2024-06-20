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
        fill={twMerge(fill, "#FF3E3E")}
        rx={15}
        className="scale-[0.95] origin-center"
      />
      <path
        fill="#fff"
        className="scale-[0.95] origin-center"
        fillRule="evenodd"
        d="M16.756 23.438c1.373 0 2.54-.456 3.494-1.367.87-.807 1.313-1.786 1.313-2.944s-.435-2.136-1.313-2.943l-.198-.194-6.462 6.372c.893.717 1.945 1.076 3.166 1.076Zm2.327-8.45.176-.163 1.434-1.412c.58-.718.87-1.554.87-2.518 0-1.113-.39-2.062-1.168-2.846L9.607 18.68l2.923 2.771 6.553-6.461ZM12.377 8.55l-6.752 6.596 2.891 2.83 6.57-6.677-2.71-2.75Zm6.69-1.353c-.724-.418-1.54-.635-2.463-.635-1.16 0-2.167.337-3.006 1.009l2.548 2.465 2.922-2.839Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect
          width={30}
          height={30}
          fill={twMerge(textColor, "#fff")}
          rx={15}
        />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
