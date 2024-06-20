import React from "react";
import { Images } from "../Utilities/ExtraInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleImage from "./SingleImage";

export default function TripleImages() {
  return (
    <div className="w-full justify-centerx flexd gap-[10px]x overflow-x-autox mb-20 lg:mx-auto max-w-[110rem] lg:justify-betweenx lg:px-[47px]x">
      <Swiper
        initialSlide={1}
        slidesPerView={1.3}
        centeredSlides={true}
        spaceBetween={20}
        watchOverflow
        breakpoints={{
          900: { spaceBetween: 5 },
          1024: { slidesPerView: 3, centeredSlides: false },
        }}
      >
        {Images.map((block, index) => (
          <SwiperSlide key={index}>
            <SingleImage block={block} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
