import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import React from "react";

type Props = {
  menuId: number;
  topPosition: string;
  leftPosition: string;
};

export default function ProductTag({
  menuId,
  topPosition,
  leftPosition,
}: Props) {
  const {
    handleProductTagMenuToggler,
    handleTagText,
    productTagText,
    isProductTagMenuOpen,
  } = useMenuSlider();

  return (
    <div
      className={`absolute ${topPosition} ${leftPosition} -translate-x-1/2 -translate-y-1/2`}
    >
      <button
        onClick={() => {
          handleProductTagMenuToggler(), handleTagText(menuId);
        }}
        className={`${
          productTagText === menuId && isProductTagMenuOpen ? "scale-75" : ""
        } size-12 flex justify-center items-center bg-black bg-opacity-45 rounded-full duration-500`}
      >
        <div className={`size-6 bg-c-White rounded-full duration-500`}></div>
      </button>
    </div>
  );
}
