"use client";
import React from "react";
import Button from "../components/ButtonComponentFolder/Button";
import { useMenuSlider } from "../Utilities/SliderMenuContext";
import ProductCard from "../components/ProductCard";
import SwiperComponentTest from "../components/SwiperComponentTest";

export default function Page() {
  const Testfunction = () => {
    console.log("Hello world!");
  };

  const { products } = useMenuSlider();

  return (
    <div className="w-full mt-20 p-6 mb-5 bg-c-Gray">
      <Button variant="yellow" submit={true} onClick={Testfunction}>
        Testknapp
      </Button>

      <div>
        <SwiperComponentTest spaceBetween={10}>
          {/* {products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))} */}
        </SwiperComponentTest>
      </div>
      <div>
        <label htmlFor="username">Användarnamn:</label>
        <input
          type="text"
          id="username"
          aria-describedby="username-description"
        />
        <p id="username-description">Ange ditt användarnamn här</p>
      </div>
    </div>
  );
}
