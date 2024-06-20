import React from "react";
import FooterListElement from "./FooterListElement";
import Plus from "@/app/Utilities/icons/plus";

type Props = {
  array: Array<any>;
  title: string;
  button?: boolean;
  menuId?: number;
  isOpen?: number | null;
  handleClick?: (id: number) => void;
};

export default function FooterLargeListElement({
  title,
  array,
  button,
  menuId,
  isOpen,
  handleClick,
}: Props) {
  return button && menuId && handleClick ? (
    <li>
      {menuId && handleClick && (
        <button className="w-full" onClick={() => handleClick(menuId)}>
          <div className="flex justify-between items-center text-lg font-bold">
            <h4>{title}</h4>
            <Plus
              fill={"#FFFFFF"}
              className={`${
                isOpen === menuId ? "rotate-45" : "rotate-0"
              } transition-all duration-300 scale-125`}
            />
          </div>
        </button>
      )}
      <div
        className={`${
          isOpen === menuId ? "!max-h-40" : "max-h-0"
        }  duration-500 text-sm h-auto transition-all overflow-hidden`}
      >
        <ul>
          {array?.map((item, index) => (
            <FooterListElement
              key={index}
              liText={item.anchorTag}
              liLink={item.anchorLink}
              liMobile={true}
            />
          ))}
        </ul>
      </div>
    </li>
  ) : (
    <li>
      <div className="text-lg font-bold">
        <h4 className="mb-5">{title}</h4>
        <ul className="text-sm font-normal">
          {array?.map((item, index) => (
            <FooterListElement
              key={index}
              liText={item.anchorTag}
              liLink={item.anchorLink}
            />
          ))}
        </ul>
      </div>
    </li>
  );
}
