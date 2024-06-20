import React from "react";
import Image from "next/image";

export default function AboutUsImageTextBlock() {
  return (
    <div className="w-full flex mb-20 lg:rounded-tr-[70px] overflow-hidden">
      <div className="flex items-end rounded-tr-[20vw] overflow-hidden w-full mb-20 aspect-[43/61] relative z-0 p-6 md:w-1/2 md:aspect-[96/61] md:rounded-tr-none md:mb-0">
        <div className="md:hidden">
          <Image
            src={"/image-2.jpg"}
            alt="Image"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src={"/image-2.jpg"}
            alt="Image"
            fill
            sizes="50vw"
            className="object-fill"
          />
        </div>
        <div className="relative z-10 md:hidden">
          <h3 className="averiaSerifLibre font-bold text-4xl text-c-White">
            Ready to step into a world where fashion meets function?
          </h3>
        </div>
        <div className="absolute bottom-0 left-0 z-0 w-full bg-gradient-to-t from-black to-transparent opacity-30 h-full md:hidden"></div>
      </div>
      <div className="hidden bg-c-LightPurple z-10 md:flex items-center justify-center text-center md:w-1/2">
        <h3 className="averiaSerifLibre font-bold text-3xl text-c-White">
          Ready to step into a world where fashion meets function?
        </h3>
      </div>
    </div>
  );
}
