"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function PointSwiper() {
  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="login-swiper"
      >
        <div className="swipe-left-btn">
          <div className="swiper-button-prev nav-btn"></div>
        </div>
        <SwiperSlide>
          <div className="aspect-[43/61] lg:aspect-[192/76] p-5 relative flex justify-center items-center">
            <div className="h-full w-full lg:hidden">
              <Image
                src={"/heroimage3.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="lg:block hidden">
              <Image
                src={"/heroimage3.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[43/61] lg:aspect-[192/76] p-5 relative flex justify-center items-center">
            <div className="h-full w-full lg:hidden">
              <Image
                src={"/heroimage.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="lg:block hidden">
              <Image
                src={"/heroimage.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[43/61] lg:aspect-[192/76] p-5 relative flex justify-center items-center">
            <div className="h-full w-full lg:hidden">
              <Image
                src={"/heroimage2.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="lg:block hidden">
              <Image
                src={"/heroimage2.jpg"}
                alt="Image"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </SwiperSlide>
        <div className="swipe-right-btn">
          <div className="swiper-button-next nav-btn"></div>
        </div>
      </Swiper>
    </div>
  );
}
