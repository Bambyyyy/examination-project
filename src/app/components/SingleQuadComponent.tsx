import React from "react";
import Image from "next/image";
import Button from "./ButtonComponentFolder/Button";

type Props = {
  image: string;
  index: number;
};

export default function SingleQuadComponent({ image, index }: Props) {
  return (
    <div className="relative flex items-end justify-center w-full p-5 lg:pb-20 h-[100%] aspect-[21/30] lg:h-[682px] lg:w-[25%]">
      <Image
        src={image}
        alt="Image"
        fill
        sizes="100vw"
        className={`object-cover object-center lg:rounded-none ${
          index % 2
            ? "rounded-tl-[20px] rounded-bl-[20px]"
            : "rounded-tr-[20px] rounded-br-[20px]"
        }`}
      />

      <div className="flex flex-col z-10 items-center text-c-White gap-5">
        <h4 className="averiaSerifLibre font-bold text-2xl">On our mind</h4>
        <Button size="s" variant="white-outlined">
          Läs mer
        </Button>
      </div>
      <div
        className={`bg-gradient-to-t absolute z-0 bottom-0 left-0 from-black to-transparent w-full h-[70%] lg:rounded-none ${
          index % 2 ? "rounded-bl-[20px]" : "rounded-br-[20px]"
        }`}
      ></div>
    </div>
  );
}
