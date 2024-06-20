"use client";
import { TestProducts, tagCategories } from "@/app/Utilities/ExtraInfo";
import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import Close from "@/app/Utilities/icons/close";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductTagMenu() {
  const { productTagText, isProductTagMenuOpen, handleProductTagMenuToggler } =
    useMenuSlider();
  const [matchedCategory, setMatchedCategory] = useState<string | undefined>(
    undefined
  );

  const keywords = ["slim", "ipad", "silicone", "magsafe", "card", "wavy"];
  const [productImage, setProductImage] = useState<string | "">("");

  useEffect(() => {
    fetchProduct();
    if (isProductTagMenuOpen === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isProductTagMenuOpen]);

  const fetchProduct = () => {
    const completeUrl = window.location.href;
    const productPart = completeUrl.split("/");
    const productUrl = productPart[4];
    const clickedProduct = TestProducts.filter((p) => p.itemUrl === productUrl);

    if (productUrl) {
      const findCategory = keywords.find((keyword) =>
        productUrl.includes(keyword)
      );
      setMatchedCategory(findCategory);
    }
    if (clickedProduct) setProductImage(clickedProduct[0]?.itemImage);
  };

  return (
    <>
      {matchedCategory && (
        <div
          className={`${
            isProductTagMenuOpen
              ? "translate-y-0 max-h-72"
              : "translate-y-full max-h-0"
          } fixed w-full max-w-[32rem] bottom-0 left-1/2 -translate-x-1/2 z-30 bg-white overflow-y-auto transition-all rounded-t-3xl px-4 py-6`}
        >
          <div className="w-full flex justify-end mb-2">
            <button onClick={handleProductTagMenuToggler}>
              <Close />
            </button>
          </div>
          <div className="flex space-x-5">
            <div className="w-1/4 relative">
              {productImage && (
                <Image
                  src={productImage}
                  alt="Image"
                  sizes="100vw"
                  height={440}
                  width={240}
                  className="object-cover rounded-lg"
                />
              )}
            </div>
            <div className="w-3/4">
              {tagCategories[matchedCategory].map((tag, index) => (
                <React.Fragment key={index}>
                  {productTagText === index + 1 && (
                    <>
                      <p className="font-bold mb-2.5">{tag.tagHeader}</p>
                      <p className="text-sm/5">{tag.tagText}</p>
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
