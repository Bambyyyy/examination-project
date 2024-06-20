import React from "react";
import Image from "next/image";

export default function ImageWithText() {
  return (
    <div className="mb-20">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full p-4 aspect-[43/61] lg:aspect-[192/70] h-full relative bg-white">
        <div className="lg:hidden">
          <Image
            src={"/heroimage5.jpg"}
            alt="Image"
            fill
            sizes="100vw"
            className="object-cover object-center rounded-br-[100px]"
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src={"/heroimage5.jpg"}
            alt="Image"
            fill
            sizes="100vw"
            className="object-cover object-center rounded-br-[100px]"
          />
        </div>
        <div className="z-10 text-c-White text-center">
          <p className="lato max-w-[576px]">
            Genom att bli medlem ger du oss helt enkelt chansen att ge mer
            tillbaka till dig, som ett tack för att du handlar hos oss och gör
            vår familj större 🤍
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full opacity-20 z-0 bg-black rounded-br-[100px]"></div>
      </div>
    </div>
  );
}
