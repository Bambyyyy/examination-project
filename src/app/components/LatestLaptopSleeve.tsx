import React from "react";
import Image from "next/image";
import Button from "./ButtonComponentFolder/Button";

export default function LatestLaptopSleeve() {
  return (
    <div className="w-fullx lg:mx-auto mb-10 max-w-[120rem] lg:flex lg:!mb-20">
      <div className="relative w-full lg:w-[50%] h-[610px]">
        <Image
          src={"/latestmobilecases.jpg"}
          alt="Image"
          fill
          sizes="100vw"
          className="object-cover object-center rounded-tr-[90px] lg:rounded-none"
        />
        <div className="lg:hidden absolute inset-0 flex justify-center items-end">
          <div className="bg-gradient-to-t from-black to-transparent w-full h-[40%]" />
          <div className="absolute bottom-10 left-10 z-20">
            <h4 className="averiaSerifLibre mb-1 w-[230px] text-4xl text-c-White">
              The Latest Mobile Cases
            </h4>
            <p className="w-64 mb-5 text-c-White">
              Kolla in vår nya sommarkollektion
            </p>
            <Button variant="yellow">Shoppa nu</Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center items-center text-center bg-c-Purple lg:w-[50%] h-[610px]">
        <h4 className="averiaSerifLibre mb-1 w-[230px] text-4xl text-c-White">
          The Latest Mobile Cases
        </h4>
        <p className="mb-5 text-white">Kolla in vår nya sommarkollektion</p>
        <Button variant="yellow">Shoppa nu</Button>
      </div>
    </div>
  );
}
