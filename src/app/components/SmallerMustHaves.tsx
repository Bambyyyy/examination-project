import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductSetOne } from "../Utilities/ExtraInfo";
import SmallProductCard from "./SmallProductCard";

export default function SmallerMustHaves() {
  return (
    <div className="w-full lg:max-w-[90rem] lg:mx-auto pl-5 mb-20 lg:px-12">
      <div className="flex items-end justify-between w-full mb-5 pr-5 lg:pr-0">
        <h4 className="averiaSerifLibre text-2xl font-bold">Our must haves</h4>
        <p className="underline font-semibold">Visa alla</p>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2.5}
        breakpoints={{
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {ProductSetOne.map((item, index) => (
          <SwiperSlide key={index}>
            <SmallProductCard itemImage={item.productImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
