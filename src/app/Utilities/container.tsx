import React, { Children } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children?: any;
};

export default function container({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        className,
        "flex max-w-[120rem] w-full h-full items-center cxl:justify-between px-7"
      )}
    >
      {children}
    </div>
  );
}
