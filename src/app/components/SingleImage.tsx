import React from "react";
import Image from "next/image";
import { SingleImageProp } from "@/app/Utilities/ExtraInfo";
import Button from "./ButtonComponentFolder/Button";

type Props = {
  block: SingleImageProp;
};

export default function SingleImage({ block }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative min-w-[390px]x lg:min-w-[541px]x">
        <div className="relative w-full h-[610px]x lg:h-[853px]x">
          <Image
            src={block.tripleImage}
            alt="Image"
            height={800}
            width={600}
            sizes="100vw"
            className="object-cover rounded-[20px] lg:rouned-[10px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 h-full w-full flex justify-start items-end p-5 lg:pb-20 lg:justify-center">
          <div className="absolutex z-10x flex flex-col items-start lg:items-center w-auto gap-5 lg:bottom-[91px]x lg:left-1/2x lg:-translate-x-1/2x">
            <h4 className="averiaSerifLibre lg:text-center text-4xl text-c-White">
              Hitta din stil
            </h4>
            <div className="lg:flex lg:justify-center">
              <Button variant="bright-yellow">Läs mer</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
