import React from "react";
import FooterLargeListElement from "./FooterLargeListElement";

type Props = {
  arrayOne: Array<any>;
  arrayTwo: Array<any>;
  arrayThree: Array<any>;
  isOpen: number | null;
  handleClick: (id: number) => void;
};

export default function FooterMobileUnorderedList({
  arrayOne,
  arrayTwo,
  arrayThree,
  isOpen,
  handleClick,
}: Props) {
  return (
    <div className="lg:hidden mb-8 lg:mb-0">
      <ul>
        <FooterLargeListElement
          title="Shopping"
          array={arrayOne}
          button
          isOpen={isOpen}
          menuId={1}
          handleClick={handleClick}
        />
        <hr className="my-4 opacity-[0.3]" />
        <FooterLargeListElement
          title="Hjälp"
          array={arrayTwo}
          button
          isOpen={isOpen}
          menuId={2}
          handleClick={handleClick}
        />
        <hr className="my-4 opacity-[0.3]" />
        <FooterLargeListElement
          title="Om LOGO"
          array={arrayThree}
          button
          isOpen={isOpen}
          menuId={3}
          handleClick={handleClick}
        />
        <hr className="my-4 opacity-[0.3]" />
      </ul>
    </div>
  );
}
