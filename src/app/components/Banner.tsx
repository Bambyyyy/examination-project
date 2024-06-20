import React from "react";
import Marquee from "react-fast-marquee";

export default function Banner() {
  return (
    <div className="w-full h-[100%]">
      <Marquee
        speed={60}
        autoFill={true}
        className="bg-[#4ABC72] text-c-White averiaSerifLibre text-2xl font-bold h-[66px]"
      >
        <p className="mr-14">Betala enkelt med Swish eller Klarna</p>
        <p className="mr-14">Snabb leverans på 1-3 arbetsdagar</p>
        <p className="mr-14">100% veganskt sortiment</p>
      </Marquee>
    </div>
  );
}
