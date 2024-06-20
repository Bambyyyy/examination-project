"use client";
import { Currency } from "@/app/Utilities/ExtraInfo";
import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import Arrowsmalldown from "@/app/Utilities/icons/arrowsmalldown";
import Wallet from "@/app/Utilities/icons/wallet";
import React from "react";

type Props = {
  id: number;
  zIndex?: boolean;
  top?: boolean;
};

export default function WalletCurrencyComponent({ id, zIndex, top }: Props) {
  const { handleMenuClick, choosenCurrency, isInsideMenuOpen, selectCurrency } =
    useMenuSlider();

  return (
    <div className={`${zIndex ? "z-50" : ""} relative`}>
      <button onClick={() => handleMenuClick(id)}>
        <div className="flex items-center">
          <div>
            <Wallet fill={zIndex ? "#FFFFFF" : "#000"} />
          </div>
          <span className="mx-1 text-xs">
            {choosenCurrency.currency === undefined
              ? "SEK"
              : choosenCurrency.currency}
          </span>
          <div>
            <Arrowsmalldown
              fill={zIndex ? "#FFFFFF" : "#000"}
              className={`${
                isInsideMenuOpen === id ? "-rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </button>
      <div
        className={`bg-c-White transition-all p-5 border-[1px] border-black rounded-lg z-20 min-w-40 duration-300 absolute ${
          top ? "top-6 text-black" : "bottom-7"
        } ${
          isInsideMenuOpen === id
            ? "opacity-100 scale-100"
            : `opacity-0 scale-95 ${top ? "pointer-events-none" : ""}`
        }`}
      >
        <div className="flex flex-col items-start pr-4 overflow-y-auto max-h-[50vh] custom-scrollbar">
          {Currency.map((item, index) => (
            <button
              key={index}
              className="my-1 py-1"
              onClick={() => selectCurrency(item.country, item.currency)}
            >
              <span
                className={`${
                  choosenCurrency.country === item.country
                    ? "text-c-DarkPurple underline"
                    : ""
                } font-bold text-[13px] hover:underline hover:text-c-DarkPurple`}
              >
                {item.country}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
