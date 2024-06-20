"use client";
import { SampleProduct } from "@/app/Utilities/ExtraInfo";
import React from "react";

type Props = {
  products: SampleProduct[];
  addAllToCartFromFavorites: (products: SampleProduct[]) => void;
};

export default function AddAllToCartButton({
  products,
  addAllToCartFromFavorites,
}: Props) {
  return (
    <button
      onClick={() => addAllToCartFromFavorites(products)}
      className="lato w-full bg-black text-c-White py-3 px-9 rounded-full font-bold mt-10"
    >
      <span>Lägg till allt i kundvagnen</span>
    </button>
  );
}
