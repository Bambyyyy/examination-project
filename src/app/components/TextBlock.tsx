import React from "react";
import Button from "./ButtonComponentFolder/Button";

export default function TextBlock() {
  return (
    <div className="flex justify-start w-full max-w-[110rem] mx-auto mb-20 px-5 lg:px-0 smd:justify-center smd:!items-center smd:text-center">
      <div className="flex flex-col gap-5 smd:items-center">
        <h3 className="averiaSerifLibre font-bold text-2xl lg:text-5xl">
          Letter stickers
        </h3>
        <p className="">Köp 2, fä 20% Köp 3, fä30% Kop minst 4, fa 40%</p>
        <button className="lato font-semibold w-40 h-11 bg-c-Green text-c-White rounded-[22px] smd:m-autox">
          Awesome cta
        </button>
      </div>
    </div>
  );
}
