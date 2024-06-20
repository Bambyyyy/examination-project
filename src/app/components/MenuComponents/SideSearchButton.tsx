import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import Search from "@/app/Utilities/icons/search";
import React from "react";

export default function SideSearchButton() {
  const { handleSearchMenuToggler } = useMenuSlider();
  return (
    <div onClick={() => handleSearchMenuToggler()} className="px-5 mb-5">
      <button className="flex items-center px-5 py-3 w-full bg-c-Gray rounded-[10px]">
        <Search className={"mr-5 scale-[0.8]"} />
        <span className="text-sm">Vad söker du efter...</span>
      </button>
    </div>
  );
}
