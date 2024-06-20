"use client";
import React, { useEffect, useState } from "react";
import Close from "../../Utilities/icons/close";
import { useMenuSlider } from "../../Utilities/SliderMenuContext";
import Mobile from "../../Utilities/icons/mobile";
import Arrowsmalldown from "../../Utilities/icons/arrowsmalldown";
import Heart from "../../Utilities/icons/heart";
import TopProductsMenu from "./TopProductsMenu";
import SideSearchButton from "./SideSearchButton";
import SideMenuFooter from "./SideMenuFooter";
import SideButtonInfluence from "./SideButtonInfluence";
import SideImage from "./SideImage";
import SideCategoryList from "./SideCategoryList";
import { phoneModels } from "@/app/Utilities/ExtraInfo";

export default function SideMenu() {
  const {
    handleMenuToggler,
    isMenuOpen,
    isInsideMenuOpen,
    setIsInsideMenuOpen,
    handleMenuClick,
    favoriteItems,
    handleFavoriteMenuToggler,
  } = useMenuSlider();
  const [model, setModel] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (isMenuOpen === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  const changeModel = (modelValue: string) => {
    if (modelValue === "Allt") {
      setModel(undefined);
      setIsInsideMenuOpen(null);
    } else {
      setModel(modelValue);
      setIsInsideMenuOpen(null);
    }
  };

  return (
    <>
      <div className="fixed z-30 w-full h-full">
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 bottom-0 left-0 right-0 z-50 inset-0 bg-c-White transition-transform duration-200 ease-in-out transform w-[88%] max-w-[434px] overflow-y-auto custom-scrollbar`}
        >
          <header className="flex justify-between w-full p-5">
            <div className="flex justify-between w-full">
              <div className="relative">
                <button
                  onClick={() => handleMenuClick(0)}
                  className="flex items-center "
                >
                  <Mobile />
                  <span className="mx-2.5 text-xs">
                    {model === undefined ? "Select Model" : model}
                  </span>
                  <Arrowsmalldown
                    fill="#000"
                    className={`${
                      isInsideMenuOpen === 0 ? "-rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`absolute transition-all duration-300 top-8 z-20 bg-c-White p-5 border-2 border-black rounded-2xl min-w-52 w-full ${
                    isInsideMenuOpen === 0
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="pr-4 max-h-[50vh] overflow-y-auto custom-scrollbar">
                    <div className="flex flex-col items-start">
                      {phoneModels.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => changeModel(item.modelName)}
                          className="py-1 my-1"
                        >
                          <span
                            className={`${
                              model === item.modelName ||
                              (model === undefined && item.modelName === "Allt")
                                ? "text-c-DarkPurple underline"
                                : ""
                            } w-full font-semibold hover:underline`}
                          >
                            {item.modelName}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleFavoriteMenuToggler}
                className="mr-6 relative"
              >
                <Heart stroke="#000" />
                {favoriteItems.length > 0 && (
                  <div className="absolute flex justify-center items-center bg-[#ffc5e5] size-5 rounded-full text-xs font-bold -top-1.5 -right-[18px]">
                    {favoriteItems.length}
                  </div>
                )}
              </button>
            </div>
            <button
              className="ml"
              onClick={() => {
                handleMenuToggler();
              }}
            >
              <Close />
            </button>
          </header>
          <div>
            <TopProductsMenu />
            <SideSearchButton />
            <SideCategoryList />
            <SideImage />
            <SideButtonInfluence />
            <SideMenuFooter />
          </div>
        </div>
        <div
          onClick={handleMenuToggler}
          className={`h-full w-full z-10 fixed inset-0 duration-300 ease-in-out ${
            isMenuOpen ? "bg-black opacity-50" : "pointer-events-none"
          }`}
        ></div>
      </div>
    </>
  );
}
