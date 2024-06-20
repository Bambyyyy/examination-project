import React from "react";
import Image from "next/image";
import InstagramGadget from "../components/Login/InstagramGadget";
import AboutUsTextOne from "../components/AboutsUsFolder/AboutUsTextOne";
import AboutUsTextTwo from "../components/AboutsUsFolder/AboutUsTextTwo";
import AboutUsImageTextBlock from "../components/AboutsUsFolder/AboutUsImageTextBlock";

export default function AboutUs() {
  return (
    <div className="w-full h-full">
      <div className="flex items-end justify-start p-6 pb-12 relative h-[610px] w-full mb-10">
        <Image
          src={"/aboutus.jpg"}
          alt="Image"
          fill
          sizes="100vw"
          className="object-cover brightness-75"
        />
        <div className="relative z-10">
          <h3 className="averiaSerifLibre font-bold text-4xl text-c-White">
            About us
          </h3>
        </div>
        <div className="absolute z-0 bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-30"></div>
      </div>
      <AboutUsTextOne />
      <AboutUsTextTwo />
      <AboutUsImageTextBlock />
      <InstagramGadget />
    </div>
  );
}
