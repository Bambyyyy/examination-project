import React from "react";
import Image from "next/image";

export default function DoubleImage() {
  return (
    <div className="flex w-full max-w-[110rem] h-auto mb-10 mx-auto ">
      <div className="relative aspect-[21/30] h-[100%] lg:aspect-square w-full">
        <Image
          src={"/quad6.jpg"}
          alt="Image"
          fill
          sizes="100vw"
          className="lg:rounded-tl-[20px] lg:rounded-bl-[20px] object-cover"
        />
      </div>
      <div className="relative aspect-[21/30] h-[100%] lg:aspect-square w-full">
        <Image
          src={"/blueway.jpg"}
          alt="Image"
          fill
          sizes="100vw"
          className="lg:rounded-tr-[20px] lg:rounded-br-[20px] object-cover"
        />
      </div>
    </div>
  );
}
