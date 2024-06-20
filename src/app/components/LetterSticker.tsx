import React from "react";
import Image from "next/image";
import Button from "./ButtonComponentFolder/Button";

type Props = {
  smallImage?: string;
  largeImage?: string;
  text?: string;
  buttonText?: string;
  bottomLeft?: boolean;
  bottomRight?: boolean;
};

export default function LetterSticker({
  smallImage,
  largeImage,
  text,
  buttonText,
  bottomLeft,
  bottomRight,
}: Props) {
  return (
    <div>
      <div className="relative w-full max-w-[120rem] lg:mx-auto mb-20">
        <Image
          src={smallImage ? smallImage : "/lettersticker1.jpg"}
          alt="Image"
          height={650}
          width={712}
          className={`md:hidden object-cover object-center ${
            bottomLeft ? "rounded-bl-[90px]" : "rounded-none"
          } ${bottomRight ? "rounded-br-[90px]" : "rounded-none"}`}
        />
        <div className="hidden md:block h-[700px] w-full brightness-[0.70]">
          <Image
            src={largeImage ? largeImage : "/heroimage3.jpg"}
            alt="Image"
            fill
            sizes="100vw"
            className="md:object-cover md:object-top"
          />
        </div>
        <div className="w-auto flex flex-col items-center gap-[10px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lato">
          <h3 className="text-nowrap averiaSerifLibre text-5xl text-c-White">
            {text ? text : "Letter sticker"}
          </h3>
          <Button variant="bright-yellow">Se mer</Button>
        </div>
      </div>
    </div>
  );
}
