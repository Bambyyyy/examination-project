import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductMenuSet } from "../../Utilities/ExtraInfo";
import Image from "next/image";
import { Navigation } from "swiper/modules";

export default function TopProductsMenu() {
  return (
    <div className="w-full p-6 mb-5 bg-c-Gray">
      <div className="flex justify-between mb-5">
        <h4 className="font-bold text-xl">Topplistan</h4>
        <p className="underline text-xs">Visa alla</p>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={5}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="custom-swiper h-auto flex flex-col relative"
      >
        <div className="swipe-left-btn">
          <div className="swiper-button-prev nav-btn-left"></div>
        </div>
        {ProductMenuSet.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={item.productImage}
                alt="Image"
                height={80}
                width={70}
                className="object-cover object-center rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swipe-right-btn">
          <div className="swiper-button-next nav-btn-right"></div>
        </div>
      </Swiper>
    </div>
  );
}
