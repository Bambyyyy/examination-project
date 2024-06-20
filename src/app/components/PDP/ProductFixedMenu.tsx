"use client";
import { SampleProduct, iPhoneModels } from "@/app/Utilities/ExtraInfo";
import Arrowsmalldown from "@/app/Utilities/icons/arrowsmalldown";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  product: SampleProduct | undefined;
  addToCart: (product: SampleProduct) => void;
};

export default function ProductFixedMenu({ product, addToCart }: Props) {
  const [mobileModelMenu, setMobileModelMenu] = useState<boolean>(false);
  const [choosenModel, setChoosenModel] = useState<string>("iPhone 13");
  const [position, setPosition] = useState<boolean>(false);

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  const handleMobileModel = (model: string) => {
    choosenModel === model
      ? setMobileModelMenu(!mobileModelMenu)
      : (setChoosenModel(model), setMobileModelMenu(!mobileModelMenu));
  };

  useEffect(() => {
    if (entry) {
      const { boundingClientRect } = entry;
      if (boundingClientRect.top > 840) {
        setPosition(false);
      } else {
        setPosition(true);
      }
    }
  }, [entry]);

  return (
    <>
      {product && (
        <div className="mb-8 lg:hidden">
          <div ref={ref} className=" h-[88px]">
            <div
              className={`${
                inView || position ? "relative" : "fixed bottom-0"
              } bg-c-White w-full z-[9] p-4`}
            >
              <div className="lato flex justify-between">
                <div className="relative">
                  <button
                    onClick={() => setMobileModelMenu(!mobileModelMenu)}
                    className="flex items-center border-b-[1px] border-black mb-1"
                  >
                    <span className="mr-2.5">{choosenModel}</span>
                    <Arrowsmalldown
                      fill="#000"
                      className={`${
                        mobileModelMenu ? "-rotate-180" : "rotate-0"
                      } transition-all duration-300`}
                    />
                  </button>
                  <p className="font-bold">{product?.itemPrice}.00 SEK</p>
                  <div
                    className={`${
                      mobileModelMenu
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    } absolute bottom-14 left-0 z-30 bg-c-White w-[200px] border-[1px] border-black rounded-2xl p-5 transition-all `}
                  >
                    <div className="text-left pr-6 max-h-[50vh]">
                      {iPhoneModels.map((phoneModel, index) => (
                        <button
                          onClick={() =>
                            handleMobileModel(phoneModel.modelName)
                          }
                          className="py-1 my-1"
                          key={index}
                        >
                          <span className="font-bold">
                            {phoneModel.modelName}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => addToCart(product)}
                    className="lato font-bold py-4 px-6 sm:px-9  rounded-full overflow-hidden bg-black text-c-White"
                  >
                    <span>Lägg i varukorg</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
