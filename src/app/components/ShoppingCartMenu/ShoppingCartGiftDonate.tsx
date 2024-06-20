import React from "react";
import Button from "../ButtonComponentFolder/Button";

export default function ShoppingCartGiftDonate() {
  return (
    <div className="space-y-2.5 mb-10">
      <input
        type="text"
        className="placeholder:text-black text-[0.75rem] border-black border-[1px] rounded-full text-center h-10 px-4 py-2 font-semibold w-full"
        placeholder="+ Gift or discount code?"
      />
      <Button className="w-full text-[0.75rem]" variant="black">
        Skänk 10kr till Vi-Skogen
      </Button>
    </div>
  );
}
