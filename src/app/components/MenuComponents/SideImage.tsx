import React from "react";
import Image from "next/image";

export default function SideImage() {
  return (
    <div className="relative mb-5 aspect-[36/42]">
      <Image
        src={"/iPhoneDisplay.jpg"}
        alt="Image"
        fill
        sizes="(max-width: 500px) 90vw, (max-width: 900px) 50vw, 25vw"
        className="object-cover"
      />
      <div className="relative z-10 p-8 h-[100%] w-full flex flex-col justify-end items-start text-c-White">
        <h3 className="averiaSerifLibre font-bold text-2xl">
          Summer Collection
        </h3>
        <p className="mb-4">Ute nu!</p>
        <a className="text-center px-9 py-3 font-bold text-black bg-c-White rounded-full">
          Se mer
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-3/4 opacity-60 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
