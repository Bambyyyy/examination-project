"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Instagram } from "@/app/Utilities/ExtraInfo";
import Button from "../ButtonComponentFolder/Button";

export default function InstagramGadget() {
  const [loadMore, setLoadMore] = useState(10);
  const InstagramSlides = Instagram.slice(0, loadMore);

  useEffect(() => {
    const updateImageAmount = () => {
      if (window.innerWidth > 600) {
        setLoadMore(10);
      } else if (window.innerWidth < 600) {
        setLoadMore(4);
      }
    };

    updateImageAmount();

    window.addEventListener("resize", updateImageAmount);
    return () => {
      window.removeEventListener("resize", updateImageAmount);
    };
  }, []);

  const showMore = () => {
    setLoadMore(loadMore + 10);
  };

  return (
    <div className="w-full mx-auto max-w-[110rem] mb-20 px-5 lg:px-5 2xl:px-0">
      <h3 className="lato text-lg mb-5 font-semibold text-center">@LOGO</h3>
      <div className="grid grid-cols-2 smd:grid-flow-row-5 grid-flow-row-2 smd:grid-cols-5 lg:flex gap-5 mb-10">
        {InstagramSlides.map((item, index) => (
          <div key={index} className={`aspect-square relative h-[100%] w-full`}>
            <Image
              src={item.productImage}
              alt="Image"
              fill
              sizes="50vw"
              className="object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          variant="black"
          onClick={() => showMore()}
          className="lato p-2.5 inline-block bg-black font-bold uppercase text-c-White rounded-[22px]"
        >
          Visa mer
        </Button>
      </div>
    </div>
  );
}
