"use client";
import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import React, { useEffect } from "react";
import Image from "next/image";
import Heart from "@/app/Utilities/icons/heart";
import Trashbin from "@/app/Utilities/icons/trashbin";

export default function FavoriteProducts() {
  const { favoriteItems, toggleFavoriteMarked, addToCartFromFavorites } =
    useMenuSlider();

  console.log(favoriteItems);
  return (
    <div className="grid grid-cols-2 gap-5">
      {favoriteItems.map((item, index) => (
        <div key={index} className="space-y-2.5">
          <div className="relative aspect-[185/231]">
            <a href={`http://localhost:3000/p/${item.itemUrl}`}>
              <Image
                src={item.itemImage}
                alt="Image"
                height={800}
                width={600}
                sizes="100vw"
                className="object-cover rounded-3xl overflow-hidden "
              />
            </a>
            <div className="absolute flex justify-center items-center p-2 bg-c-White rounded-full size-7 top-2.5 right-2.5">
              <button onClick={() => toggleFavoriteMarked(item.itemId)}>
                <Heart
                  stroke={"#ff7ab8"}
                  liked={item.itemLiked}
                  className="scale-1"
                />
              </button>
            </div>
          </div>
          <div className="lato space-y-2.5x">
            <p className="font-bold text-sm mb-2.5">{item.itemName}</p>
            <div className="text-xs opacity-60 mb-2.5">
              <p>{item.itemColor}</p>
              <p>{item.itemTag.replaceAll("-", " ")} +Fler modeller</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold text-sm">{item.itemPrice} SEK</p>
              <button onClick={() => toggleFavoriteMarked(item.itemId)}>
                <Trashbin className="scale-[0.6]" />
              </button>
            </div>
          </div>
          <button
            onClick={() => addToCartFromFavorites(item)}
            className="w-full mt-5 rounded-full border-black border-[1px] py-3 px-4 font-medium"
          >
            <span>Lägg i varukorg</span>
          </button>
        </div>
      ))}
    </div>
  );
}
