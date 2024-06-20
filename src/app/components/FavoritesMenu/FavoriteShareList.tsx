"use client";
import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import React from "react";

export default function FavoriteShareList() {
  const { favoriteItems } = useMenuSlider();

  return (
    <div className="lato mt-10">
      <h3 className="text-xl font-bold">
        Dela ({favoriteItems.length} Produkter)
      </h3>
      <div className="mt-5">
        <button className="border-[1px] border-black font-bold py-3 px-9 rounded-full w-full">
          <span>Kopiera länk</span>
        </button>
        <input
          className="mt-2.5 h-[49px] border-[1px] border-black py-3 px-9 rounded-full w-full text-sm text-center placeholder:text-black"
          type="text"
          placeholder="https://LOGO.com/wishlist/5215%2C5218"
        />
      </div>
    </div>
  );
}
