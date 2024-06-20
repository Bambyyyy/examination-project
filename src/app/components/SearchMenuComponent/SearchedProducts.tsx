"use client";
import React from "react";
import { SampleProduct, TestProducts } from "@/app/Utilities/ExtraInfo";
import { phoneModels } from "@/app/Utilities/ExtraInfo";
import Image from "next/image";
import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import Cart from "@/app/Utilities/icons/cart";
import Plus from "@/app/Utilities/icons/plus";
import Heart from "@/app/Utilities/icons/heart";
import Link from "next/link";

type Props = {
  filter: string;
  filteredProducts: SampleProduct[];
};

export default function SearchedProducts({ filter, filteredProducts }: Props) {
  const { choosenCurrency, toggleFavoriteMarked, addToCart } = useMenuSlider();

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5 bg-c-White p-5 lato">
      {filteredProducts.map((item, index) => (
        <div className="space-y-2.5" key={index}>
          <div className="relative aspect-[18/22] rounded-3xl overflow-hidden">
            <a
              href={`https://examination-project-delta.vercel.app/p/${item.itemUrl}`}
            >
              <Image
                src={item.itemImage}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </a>
            <div className="absolute top-[10px] flex justify-center items-center bg-c-White right-[10px] size-[22px] rounded-full">
              <button onClick={() => toggleFavoriteMarked(item.itemId)}>
                <Heart
                  className="scale-1"
                  stroke="#ff7ab8"
                  liked={item.itemLiked}
                />
              </button>
            </div>
          </div>
          <div className="space-y-2.5">
            <Link
              href={`https://examination-project-delta.vercel.app/p/${item.itemUrl}`}
            >
              <h3 className="font-bold">{item.itemName.replace(/-/g, " ")}</h3>
            </Link>
            <div className="text-xs opacity-50">
              <p>{item.itemColor}</p>
              <p>{item.itemDescription}</p>
            </div>
            <p className="font-bold text-xs">
              {item.itemPrice}
              {".00 "}
              {choosenCurrency.currency === undefined
                ? "SEK"
                : choosenCurrency.currency}
            </p>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-1">
              <div className="size-2 rounded-full bg-c-Purple"></div>
              <div className="size-2 rounded-full bg-c-Pink"></div>
              <div className="size-2 rounded-full bg-c-Blue"></div>
              <p className="text-[10px]">+9</p>
            </div>
            <div className="pr-[10px]">
              <button
                onClick={() => addToCart(item)}
                className="flex justify-center gap-1 items-center border-[1px] border-black rounded-[13px] w-14 h-6"
              >
                <Cart /> <Plus />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
