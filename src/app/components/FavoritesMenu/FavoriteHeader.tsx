import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import Close from "@/app/Utilities/icons/close";
import React from "react";

export default function FavoriteHeader() {
  const { handleFavoriteMenuToggler } = useMenuSlider();

  return (
    <header className="lato flex justify-between items-center p-5 shadow-md">
      <h3 className="text-[22px] font-bold">Dina favoriter</h3>
      <button className="p-2" onClick={() => handleFavoriteMenuToggler()}>
        <Close />
      </button>
    </header>
  );
}
