import React from "react";
import Image from "next/image";

type Props = {
  smallImage?: string;
  largeImage?: string;
  text?: string;
  buttonText?: string;
  bottomLeft?: boolean;
  bottomRight?: boolean;
};

export default function QuestionsAbout({
  smallImage,
  largeImage,
  text,
  buttonText,
  bottomLeft,
  bottomRight,
}: Props) {
  return (
    <div>
      <div className="relative lg:aspect-[192/70] aspect-[43/58] w-full flex lg:flex-col justify-center items-center mb-20 p-4">
        <div className="lg:hidden">
          <Image
            src={smallImage ? smallImage : "/IMG_0103Klar.jpg"}
            alt="Image"
            fill
            sizes="100vw"
            className={`object-cover object-center brightness-[0.80] ${
              bottomLeft ? "rounded-bl-[20vw]" : "rounded-none"
            } ${bottomRight ? "rounded-br-[20vw]" : "rounded-none"}`}
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src={largeImage ? largeImage : "/image-13-4000.jpg"}
            alt="Image"
            fill
            sizes="100vw"
            className={`object-cover object-center brightness-[0.80] ${
              bottomLeft ? "rounded-bl-[70px]" : "rounded-none"
            } ${bottomRight ? "rounded-br-[70px]" : "rounded-none"}`}
          />
        </div>
        <div className="w-full flex flex-col items-center z-10 gap-2.5 lato text-center text-c-White">
          <h3 className="averiaSerifLibre text-4xl font-bold">
            {text ? text : "Letter sticker"}
          </h3>
          <button className="w-40 h-11 bg-c-Purple rounded-[22px] font-semibold">
            {buttonText ? buttonText : "Awesome cta"}
          </button>
        </div>
      </div>
    </div>
  );
}
