import React from "react";
import Recycled from "../Utilities/icons/recycled";
import Heart from "../Utilities/icons/heart";
import Image from "next/image";
import { Product } from "../Utilities/ExtraInfo";
import ColorDiv from "./ColorDiv";
import AddToCartDiv from "./AddToCartDiv";

type Props = {
  item: Product;
};

export default function ProductCard({ item }: Props) {
  return (
    <div className={`h-auto w-full`}>
      <div className={`relative`}>
        <Image
          src={item.productImage}
          alt="Test"
          height={800}
          width={600}
          sizes="100vw"
          className="object-fill object-center"
        />
        <div className="flex flex-col gap-[10px] absolute top-[10px] left-[10px]">
          <Recycled />
          <div className="flex justify-center items-center rounded-[22px] w-[89px] text-[10px] h-[23px] text-c-Green bg-c-LGreen">
            Spring news!
          </div>
        </div>
        <div className="absolute top-[10px] flex justify-center items-center bg-c-White right-[10px] size-[22px] rounded-full">
          <Heart className="scale-1" stroke="#ff7ab8" />
        </div>
      </div>
      <div>
        <h4 className="text-sm my-[10px] font-bold">Mobilskal silikon</h4>
        <p className="text-[12px] my-2.5 opacity-[0.5] w-auto sm:w-48 md:w-auto lg:w-48">
          Gradient Bright Pink/Orange Juice iPhone 14 Pro Max +12 modeller
        </p>
        <span className="flex gap-2 mt-[10px] font-bold lato text-sm">
          <s>199SEK</s>
          <p>129SEK</p>
        </span>
        <div className="flex items-end justify-between">
          <ColorDiv />
          <AddToCartDiv />
        </div>
      </div>
    </div>
  );
}
