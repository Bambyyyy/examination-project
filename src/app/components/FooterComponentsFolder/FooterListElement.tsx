import React from "react";

type Props = {
  liText: string;
  liLink: string;
  liMobile?: boolean;
};

export default function FooterListElement({ liText, liLink, liMobile }: Props) {
  return (
    <li className={`${liMobile ? "my-1 py-1" : "my-1 py-2"}`}>
      <a href={liLink}>{liText}</a>
    </li>
  );
}
