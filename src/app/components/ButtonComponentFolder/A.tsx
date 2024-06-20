import React from "react";
import Link from "next/link";

type Props = {
  href?: any;
  children?: any;
  className?: string;
};

export default function A({ href, children, className }: Props) {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
