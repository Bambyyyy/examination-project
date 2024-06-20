"use client";
import React, { useEffect, useState } from "react";
import Menu from "../Utilities/icons/menu";
import Search from "../Utilities/icons/search";
import Login from "../Utilities/icons/login";
import Shoppingbag from "../Utilities/icons/shoppingbag";
import Veganproducts from "../Utilities/icons/veganproducts";
import Container from "../Utilities/container";
import Heart from "../Utilities/icons/heart";
import { useMenuSlider } from "../Utilities/SliderMenuContext";
import EarthLanguageComponent from "./MenuComponents/EarthLanguageComponent";
import WalletCurrencyComponent from "./MenuComponents/WalletCurrencyComponent";
import { usePathname } from "next/navigation";

export default function Header() {
  const router = usePathname();
  const isStartingPage = router === "/";
  const isAboutUsPage = router === "/about-us";
  const [scrollValue, setScrollValue] = useState<boolean>(
    isStartingPage || isAboutUsPage ? false : true
  );
  const {
    handleMenuToggler,
    handleSearchMenuToggler,
    isProductTagMenuOpen,
    handleFavoriteMenuToggler,
    favoriteItems,
    handleShoppingCartMenuToggler,
    shoppingCartItems,
  } = useMenuSlider();

  useEffect(() => {
    // if (!isStartingPage) return setScrollValue(true);

    function handleScroll() {
      if (isStartingPage || isAboutUsPage) {
        const scrollY = window.scrollY;
        setScrollValue(scrollY > 50);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isProductTagMenuOpen ? "hidden" : ""
      } sticky top-0 z-30 w-full h-auto text-sm shadow-md shadow-[0px 3px 25px #00000007]`}
    >
      <div className="lg:flex lg:justify-center py-2 overflow-x-auto lg:overflow-x-visible bg-[#000000] min-h-6 text-c-White lato">
        <Container>
          <div className="hidden cxl:w-1/5 cxl:flex cxl:gap-5">
            <EarthLanguageComponent zIndex={true} top={true} id={3} />
            <WalletCurrencyComponent zIndex={true} top={true} id={4} />
          </div>

          <div>
            <Veganproducts className="cxl:hidden mr-5" fill="#FFFFFF" />
          </div>
          <div>
            <div className="cxl:hidden w-[1px] h-6 mr-4 bg-c-White text-c-White"></div>
          </div>
          <div className="w-max cxl:w-3/5 cxl:justify-center text-sm cxl:flex cxl:gap-8 ">
            <p className="w-max">
              <b>FRI FRAKT</b> - Leverans inom 1-3 arbetsdagar
            </p>
            <p className="hidden cxl:block">
              Summer Refill - 25% på allt när du handlar för över 200kr
            </p>
          </div>
          <div className="hidden cxl:flex cxl:justify-end cxl:w-1/5 ">
            <Veganproducts
              className="hidden cxl:block cxl:w-1/6x"
              fill="#FFFFFF"
            />
          </div>
        </Container>
      </div>
      <div
        className={`header-menu-container transition-all duration-300 ease-in-out flex w-full items-center justify-evenly h-16 ${
          scrollValue ? "bg-c-White" : "bg-transparent"
        } ${isStartingPage || isAboutUsPage ? "absolute" : "relative"}`}
      >
        <Container>
          <div className="flex w-1/3 space-x-4x gap-3 xs:space-x-5 md:space-x-8 lg:space-x-10 items-center">
            <button
              onClick={() => {
                handleMenuToggler();
              }}
            >
              <Menu fill={scrollValue ? "#000000" : "#FFFFFF"} />
            </button>
            <button onClick={() => handleSearchMenuToggler()}>
              <Search fill={scrollValue ? "#000000" : "#FFFFFF"} />
            </button>
          </div>
          <a
            href="/"
            className="flex w-1/3 min-w-maxx items-center justify-center"
          >
            <div
              className={
                "scale-[0.7] xs:scale-[1] transition-all duration-1000"
              }
            >
              <h1
                className={`${
                  scrollValue ? "text-[#000000]" : "text-[#FFFFFF]"
                } text-2xl font-bold lato`}
              >
                LOGO
              </h1>
            </div>
          </a>
          <div className="flex w-1/3 space-x-4x gap-3 xs:gap-0 xs:space-x-5 md:space-x-8 lg:space-x-10  items-center justify-end">
            <a href="/login">
              <Login fill={scrollValue ? "#000000" : "#FFFFFF"} />
            </a>
            <button className="relative" onClick={handleFavoriteMenuToggler}>
              <Heart
                className={"hidden lg:block scale-[1.6]"}
                stroke={scrollValue ? "#000000" : "#FFFFFF"}
              />
              <div
                className={`${
                  favoriteItems.length === 0
                    ? "hidden"
                    : "hidden lg:flex lg:absolute"
                } absolutex justify-center items-center bg-[#ffc5e5] size-5 rounded-full text-xs font-bold bottom-1 -right-[18px] lg:flexx`}
              >
                {favoriteItems.length}
              </div>
            </button>
            <button
              className="relative"
              onClick={handleShoppingCartMenuToggler}
            >
              <Shoppingbag fill={scrollValue ? "#000000" : "#FFFFFF"} />
              <div
                className={`${
                  shoppingCartItems.length === 0 ? "hidden" : "flex absolute"
                } absolutex justify-center items-center bg-[#404040] text-c-White size-5 rounded-full text-xs font-bold bottom-2.5 -right-[17px]`}
              >
                {shoppingCartItems.length}
              </div>
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}
