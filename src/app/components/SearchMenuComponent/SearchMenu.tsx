import { useMenuSlider } from "@/app/Utilities/SliderMenuContext";
import React, { useEffect, useState } from "react";
import SearchMenuBar from "./SearchMenuBar";
import PopularSearches from "./PopularSearches";
import SearchedProducts from "./SearchedProducts";

export default function SearchMenu() {
  const [filter, setFilter] = useState<string>("");
  const { isSearchMenuOpen, handleSearchMenuToggler, products } =
    useMenuSlider();

  useEffect(() => {
    if (isSearchMenuOpen === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isSearchMenuOpen]);

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const searchProducts = (filter: string) => {
    const lowercaseFilter = filter.toLocaleLowerCase();

    // const filteredProducts = TestProducts.filter((product) =>
    //   product.itemTag
    //     .replace("-", " ")
    //     .toLocaleLowerCase()
    //     .includes(lowercaseFilter)
    // );

    // return filteredProducts;

    const searchTerms = lowercaseFilter.split(" ");

    const filteredProducts = products.filter((product) =>
      searchTerms.every((term) => {
        return Object.entries(product).some(([key, value]) => {
          if (key === "itemDescription") return false;
          return String(value).toLocaleLowerCase().includes(term);
        });
      })
    );

    return filteredProducts;
  };

  const filteredProducts = searchProducts(filter);

  return (
    <>
      <div className="fixed z-30 w-full h-full">
        <div
          className={`${
            isSearchMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 transition-all duration-300 ease-in-out w-full max-w-[438px] overflow-y-auto h-full bg-c-Gray z-50 custom-scrollbar`}
        >
          <SearchMenuBar
            handleFilterChange={handleFilterChange}
            filter={filter}
          />
          {filter && filteredProducts.length > 0 ? (
            <SearchedProducts
              filteredProducts={filteredProducts}
              filter={filter}
            />
          ) : (
            <PopularSearches handleFilterChange={handleFilterChange} />
          )}
        </div>
        <div
          onClick={handleSearchMenuToggler}
          className={`h-full w-full z-10 fixed inset-0 duration-300 ease-in-out ${
            isSearchMenuOpen ? "bg-black opacity-50" : "pointer-events-none"
          }`}
        ></div>
      </div>
    </>
  );
}
