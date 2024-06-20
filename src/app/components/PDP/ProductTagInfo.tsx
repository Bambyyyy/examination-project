"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import ProductTag from "./ProductTag";
import { tagCategories } from "@/app/Utilities/ExtraInfo";

type Props = {
  mainImage: string | undefined;
  matchedCategory: string | undefined;
};

export default function ProductTagInfo({ mainImage, matchedCategory }: Props) {
  const { handleProductTagMenuToggler, isProductTagMenuOpen } = useMenuSlider();

  return (
    <>
      {matchedCategory && (
        <div className="w-full xl:max-w-[110rem] mx-auto xl:px-8 mb-8 xl:mb-20">
          <div className="cmd:grid cmd:grid-cols-2 overflow-hiddenx xl:rounded-2xl xl:overflow-hidden">
            <div className="relative aspect-[21/30] cmd:aspect-square">
              {mainImage && (
                <Image
                  src={mainImage}
                  alt="Image"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              )}
              {tagCategories[matchedCategory].map((tag, index) => (
                <ProductTag
                  key={index}
                  menuId={index + 1}
                  topPosition={tag.tagLocationTop}
                  leftPosition={tag.tagLocationLeft}
                />
              ))}
            </div>
            <div className="relative aspect-[21/30] cmd:aspect-square">
              <div className="cmd:hidden">
                <Image
                  src={"/heroimage.jpg"}
                  alt="Image"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="hidden cmd:block">
                <Image
                  src={"/heroimage.jpg"}
                  alt="Image"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div
            onClick={handleProductTagMenuToggler}
            className={`h-full w-full z-10 fixed inset-0 duration-300 ease-in-out ${
              isProductTagMenuOpen
                ? "bg-black opacity-50"
                : "pointer-events-none"
            }`}
          ></div>
        </div>
      )}
    </>
  );
}
