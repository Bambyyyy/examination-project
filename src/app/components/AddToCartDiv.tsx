import React from "react";
import Cart from "../Utilities/icons/cart";
import Plus from "../Utilities/icons/plus";

export default function AddToCartDiv() {
  return (
    <div className="pr-2.5">
      <button className="flex justify-center gap-1 items-center border-[1px] border-black rounded-[13px] w-14 h-6">
        <Cart /> <Plus />
      </button>
    </div>
  );
}
