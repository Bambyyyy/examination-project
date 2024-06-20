import * as React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  fill?: string;
};

const SvgComponent: React.FC<Props> = ({ className, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17.213}
    height={17.213}
    className={twMerge(className, "")}
  >
    <path d="M8.606 5.546a3.06 3.06 0 1 0 3.06 3.06 3.06 3.06 0 0 0-3.06-3.06Z" />
    <path
      fill={twMerge(fill, "#000")}
      fillRule="evenodd"
      d="M8.606 17.213a89.29 89.29 0 0 1-4.415-.1 4.253 4.253 0 0 1-4.09-4.09c-.058-1.147-.1-2.609-.1-4.415s.043-3.268.1-4.415A4.253 4.253 0 0 1 4.191.1C5.338.042 6.8 0 8.606 0s3.268.043 4.415.1a4.253 4.253 0 0 1 4.09 4.09c.058 1.147.1 2.609.1 4.415s-.043 3.268-.1 4.415a4.253 4.253 0 0 1-4.09 4.09 86.296 86.296 0 0 1-4.415.103Zm-4.59-8.606a4.59 4.59 0 1 1 4.59 4.59 4.59 4.59 0 0 1-4.59-4.591Zm9.563-6.12a.765.765 0 0 0 0 1.53h.383a.765.765 0 0 0 0-1.53Z"
    />
  </svg>
);
export default SvgComponent;
