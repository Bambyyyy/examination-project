import React from "react";
import { Product } from "../Utilities/ExtraInfo";
import Image from "next/image";

type Props = {
  itemImage: string;
};

export default function SmallProductCard({ itemImage }: Props) {
  return (
    <div className="w-auto relative aspect-squarex">
      <Image
        src={itemImage}
        alt="Image"
        height={350}
        width={350}
        className="object-cover object-center aspect-square rounded-[20px]"
      />
    </div>
  );
}
