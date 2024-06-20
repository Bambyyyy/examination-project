import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import Close from "@/app/Utilities/icons/close";
import React from "react";

export default function ShoppingCartHeader() {
  const { handleShoppingCartMenuToggler } = useMenuSlider();
  return (
    <header className="flex justify-between p-5 shadow-md">
      <h3 className="font-bold text-2xl">Kassa</h3>
      <button onClick={handleShoppingCartMenuToggler}>
        <Close />
      </button>
    </header>
  );
}
