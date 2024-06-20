"use client";
import React, { useEffect } from "react";
import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import FavoriteHeader from "./FavoriteHeader";
import FavoriteProducts from "./FavoriteProducts";
import FavoriteAddAllButton from "./FavoriteAddAllButton";
import FavoriteShareList from "./FavoriteShareList";

export default function FavoriteSideMenu() {
  const {
    favoriteItems,
    isFavoriteMenuOpen,
    handleFavoriteMenuToggler,
    addAllToCartFromFavorites,
  } = useMenuSlider();

  useEffect(() => {
    if (isFavoriteMenuOpen === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isFavoriteMenuOpen]);

  return (
    <div className="w-full h-full fixed z-30">
      <div
        className={`${
          isFavoriteMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 fixed top-0 right-0 bottom-0 w-full max-w-[500px] bg-c-White overflow-y-auto z-50`}
      >
        <FavoriteHeader />
        <div className="p-5">
          {favoriteItems.length > 0 ? (
            <>
              <FavoriteProducts />
              <FavoriteAddAllButton
                products={favoriteItems}
                addAllToCartFromFavorites={addAllToCartFromFavorites}
              />
              <FavoriteShareList />
            </>
          ) : (
            <div className="lato font-bold flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <h6 className="text-2xl font-bold lato mb-4">LOGO</h6>
              <p>Din önskelista är tom</p>
            </div>
          )}
        </div>
      </div>
      <div
        onClick={handleFavoriteMenuToggler}
        className={`h-full w-full z-10 fixed inset-0 duration-300 ease-in-out ${
          isFavoriteMenuOpen ? "bg-black opacity-50" : "pointer-events-none"
        }`}
      ></div>
    </div>
  );
}
