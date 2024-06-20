import React from "react";
import FooterLargeListElement from "./FooterLargeListElement";

type Props = {
  arrayOne: Array<any>;
  arrayTwo: Array<any>;
  arrayThree: Array<any>;
};

export default function FooterDesktopUnorderedList({
  arrayOne,
  arrayTwo,
  arrayThree,
}: Props) {
  return (
    <div className="lg:block hidden">
      <ul className="flex justify-start lg:justify-between gap-[20%] lg:gap-28 xl:gap-52">
        <FooterLargeListElement title="Shopping" array={arrayOne} />
        <FooterLargeListElement title="Hjälp" array={arrayTwo} />
        <FooterLargeListElement title="Om LOGO" array={arrayThree} />
      </ul>
    </div>
  );
}
