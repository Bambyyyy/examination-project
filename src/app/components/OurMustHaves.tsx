"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductSetTwo } from "../Utilities/ExtraInfo";
import Button from "./ButtonComponentFolder/Button";

export default function OurMustHaves() {
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 max-w-[110rem] mb-20 mx-auto lg:px-[47px]">
      <div className="flex justify-between items-end px-5 lg:px-0 pt-5">
        <h3 className="averiaSerifLibre text-2xl font-bold">Our must haves</h3>
        <p className="underline font-semibold">Visa alla</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:flex py-5 px-5 gap-5 lg:gap-5 lg:overflow-x-auto lg:px-0">
        {isMobileWidth
          ? ProductSetTwo.slice(0, 4).map((item, index) => (
              <ProductCard key={index} item={item} />
            ))
          : ProductSetTwo.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
      </div>

      <div className="flex justify-center w-full">
        <Button variant="yellow">Ladda fler</Button>
      </div>
    </div>
  );
}
