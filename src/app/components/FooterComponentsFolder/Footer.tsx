"use client";
import React, { useState } from "react";
import Banner from "../Banner";
import {
  FooterAboutLOGO,
  FooterHelp,
  FooterShopping,
} from "@/app/Utilities/ExtraInfo";
import FooterPartners from "./FooterPartners";
import FooterNewsLetter from "./FooterNewsLetter";
import FooterDesktopUnorderedList from "./FooterDesktopUnorderedList";
import FooterMobileUnorderedList from "./FooterMobileUnorderedList";

export default function Footer() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleClick = (id: number) => {
    isOpen === id ? setIsOpen(null) : setIsOpen(id);
  };

  return (
    <>
      <Banner />
      <footer className="w-full p-5 bg-c-Purple text-c-White text-lg lg:py-20">
        <div className="max-w-[90rem] mx-auto smd:max-w-[42rem] px-6 lg:max-w-[90rem]">
          <h6 className="text-2xl font-bold lato">LOGO</h6>
          <hr className="my-4 opacity-[0.3]" />
        </div>
        <div className="lg:flex lg:justify-between max-w-[90rem] mx-auto smd:max-w-[42rem] px-6 lg:max-w-[90rem]">
          <FooterMobileUnorderedList
            arrayOne={FooterShopping}
            arrayTwo={FooterHelp}
            arrayThree={FooterAboutLOGO}
            isOpen={isOpen}
            handleClick={handleClick}
          />
          <FooterDesktopUnorderedList
            arrayOne={FooterShopping}
            arrayTwo={FooterHelp}
            arrayThree={FooterAboutLOGO}
          />

          <FooterNewsLetter />
        </div>
        <FooterPartners />
        <p className="text-xs text-center mb-8">©2023 LOGO AB</p>
      </footer>
    </>
  );
}
