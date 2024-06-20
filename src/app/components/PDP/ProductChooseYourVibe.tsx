"use client";
import { chooseYourVibeImages } from "@/app/Utilities/ExtraInfo";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";

export default function ProductChooseYourVibe() {
  return (
    <div className="p-4 mb-10 cxl:mb-20 space-y-2 max-w-[110rem] mx-auto">
      <div className="lato text-center space-y-1 p-5">
        <p className="text-xl font-extrabold">Choose your vibe</p>
        <p className="text-xs">#LOGObrand</p>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          780: { slidesPerView: 2, spaceBetween: 30 },
        }}
        className="choose-your-vibe-swiper max-w-[900px]"
      >
        <div className="swipe-left-btn">
          <button className="swiper-button-prev nav-btn"></button>
        </div>
        {chooseYourVibeImages.map((image, index) => (
          <SwiperSlide key={index} className={`px-3 md:px-16x`}>
            <div className="relative aspect-[380/490] h-full cmd:w-auto w-full cmd:max-h-[550px] rounded-2xl overflow-hidden md:px-3">
              <Image
                src={image.image}
                alt="Image"
                fill
                sizes="50vw"
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swipe-right-btn">
          <button className="swiper-button-next nav-btn"></button>
        </div>
      </Swiper>
    </div>
  );
}
